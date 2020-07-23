const mongoose = require("mongoose");
require("dotenv").config();
const DB_URI = process.env.REACT_APP_CUSTOM_DB_URI;

// const controller = require("./controllers/originalReviewControllers.js");
// const metaController = require("./controllers/metaReviewControllers.js");

const db = mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// db.then((db) => console.log(`Connected to: '${DB_URI}'`)).catch((err) =>
//   console.log(`Error connecting to '${DB_URI}': ${err}'`)
// );

// console.log(
//   metaController.createMetaReviewEntry({
//     product_id: "743294",
//     product_category: "Musc",
//     review: "life is good",
//     star_rating: 3,
//   })
// );

// const holder = {
//   estConn: () => db,
//   log: () => console.log("why?????????????"),
// };

// console.log(controller.randomReview());

/*
  // BELOW IS EXAMPLE OF SINGLE PAGE DB INTERACTION
  // SPLIT UP INTO DIRECTORIES BASED ON SEPARATION OF CONCERNS

// const reviewSchema = new mongoose.Schema({
//   product_id: String,
//   product_category: String,
//   review: String,
//   star_rating: Number,
// });

// reviewSchema.plugin(randomMongoose);

// const OriginalReview = mongoose.model(
//   "OriginalReview",
//   reviewSchema,
//   "amzlReviews"
// );

// OriginalReview.find({})
//   .limit(1)
//   .then((data) => console.log("here is our find data: ", data))
//   .catch((err) => console.log("something is wrong: ", err));

*/

module.exports = db;
