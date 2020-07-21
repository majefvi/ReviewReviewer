import { Application, NextFunction, Request, Response } from "express";
import express = require("express");
import bodyparser = require("body-parser");

const SERVER_PORT = process.env.PORT || 5000;

const app: Application = express();
app.use(bodyparser.json());

app.get("/", () =>
  console.log(
    `Welcome to reviewReviewer!
    Try navigating to /getRandomOriginalReview to view a review and leave a metaReview`
  )
);

app.get(
  "/getRandomOriginalReview",
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("Random review being retrieved");
    let randoRev = await retrieveReview(req);
    if (randoRev) {
      res.send(randoRev);
    } else {
      next("Random review cannot be generated...  Please refresh the page.");
    }
  }
);

// below is preserved to demonstrate practice with 'fs' and 'yaml'
// this step was needed to verify routes and React component appearance

const yaml = require("js-yaml");
const fs = require("fs");
let dummyDataDoc;

// Get document, or throw exception on error
try {
  dummyDataDoc = yaml.safeLoad(
    fs.readFileSync(
      "/Users/matthewbeckerleg/Programming/Apprenticeship/nellyjs/groupProject/ReviewReviewer/server/dummyData/dummyData.yml",
      "utf8"
    )
  );
  console.log("dummyDataDoc access success");
} catch (e) {
  console.log(e);
}

// console.log(
//   "some dummyData from the doc: ",
//   dummyDataDoc?.Reviews?.Category?.soda[1] // should yeild 'Coke' object
// );

// ---below is the general shape of data expected by the front end---

// GET '/getRandomOriginalReview'
// expect to get back an object with the following shape:
// productName:
// productImage:
// productManufacturer:
// productReview:
// productRating:
// productID:

// POST '/saveMetaReview'
// database will expect the user to have provided a review of the shape:
// originalReviewProductID:
// metaReviewAuthor:
// metaReviewText:
// metaReviewRating:

const coinflip = (): boolean => (Math.random() < 0.5 ? true : false);

const retrieveReview = (req) => {
  let categoryChoice = coinflip();
  let arrayIndex = coinflip() ? 0 : 1;
  let retrievedRando;

  if (categoryChoice) {
    retrievedRando = dummyDataDoc?.Reviews?.Category?.soda[arrayIndex];
  } else {
    retrievedRando = dummyDataDoc?.Reviews?.Category?.nuts[arrayIndex];
  }

  console.log("retrievedRando from retrieveReview(): ", retrievedRando);
  return retrievedRando;
};

// here to test output of retrieveReview() - TODO: remove line 82/83
// retrieveReview();

app.listen(SERVER_PORT, () => console.log("Look out! The server be runnin"));
