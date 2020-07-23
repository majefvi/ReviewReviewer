const express = require("express");
const bodyParser = require("body-parser");

// const morgan = require('morgan');

const db = require("../db/db.js");
const OriginalReview = require("../db/models/originalReviewModel.js");

// const tester = new OriginalReview({ product_category: "dogs" });
// console.log("OriginalReview: ", tester);

// db(true);

// console.log(
//   OriginalReview.find({})
//     .limit(1)
//     .then((err, ogRev) => {
//       if (err) return console.error(err);
//       console.log(ogRev);
//     })
// );

// OriginalReview.find({}).limit(1);

const PORT = 5000;

const app = express();
app.use(bodyParser.json());

app.get("/getrandom", (req, res) => {
  OriginalReview.find({})
    .limit(1)
    .then((err, data) =>
      err ? console.log("error: ", err) : console.log("data: ", data)
    );
  res.end();
});

app.listen(PORT, () => console.log("app listening on: ", PORT));
