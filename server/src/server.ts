import { Application, NextFunction, Request, Response } from "express";
import express = require("express");
import bodyparser = require("body-parser");

const db = require("../../db/db.js");
const OriginalReview = require("../../db/models/originalReviewModel.js");

// const dbFile = require("../../db/index.js");

var count = 0;

const SERVER_PORT = process.env.PORT || 5000;
// const YML_PATH =
// "/Users/matthewbeckerleg/Programming/Apprenticeship/nellyjs/groupProject/ReviewReviewer/server/dummyData/dummyData.yml";
const YML_PATH =
  "/Users/jeffreyjhaywood/Programming Environment/Web/ReviewReviewer/server/dummyData/dummyData.yml";
// const METAREV_YML_PATH =
//   "/Users/matthewbeckerleg/Programming/Apprenticeship/nellyjs/groupProject/ReviewReviewer/server/dummyData/metaDummyData.yml";
const METAREV_YML_PATH =
  "/Users/jeffreyjhaywood/Programming Environment/Web/ReviewReviewer/server/dummyData/metaDummyData.yml";

const app: Application = express();
app.use(bodyparser.json());

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  console.log("Homepage visited");
  const homePageStr = `Welcome to reviewReviewer! </br>
      Try navigating to /getRandomOriginalReview to view a review and leave a metaReview`;
  const homePageTemplate = `
      <html><div style="
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;">
          ${homePageStr}
      </div></html>`;
  res.send(homePageTemplate);
});

// app.get(
//   "/getrandom",
//   async (req: Request, res: Response, next: NextFunction) => {
//     console.log("Random review being retrieved");
//     let randoRev = await retrieveReview(req);
//     if (randoRev) {
//       res.send(randoRev);
//     } else {
//       next("Random review cannot be generated...  Please refresh the page.");
//     }
//   }
// );

app.get("/getrandom", (req, res) => {
  OriginalReview.find({})
    .limit(1)
    .then((err, data) => (err ? console.log("error: ", err) : res.send(data)));
});

app.post(
  "/savemetareview",
  // () => console.log("a save has been attempted!")
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("Incoming metaReview: ", req.body);
    let destructuredBody = req.body?.formState;
    let yamlStr = yaml.safeDump({
      id: count,
      metaReview: destructuredBody,
    });
    fs.writeFileSync(METAREV_YML_PATH, yamlStr, "utf8");
    console.log("saved!");
  }
);

// below is preserved to demonstrate practice with 'fs' and 'yaml'
// this step was needed to verify routes and React component appearance

const yaml = require("js-yaml");
const fs = require("fs");
let dummyDataDoc;

// Get document, or throw exception on error
try {
  dummyDataDoc = yaml.safeLoad(fs.readFileSync(YML_PATH, "utf8"));
  console.log("dummyDataDoc access success");
} catch (e) {
  console.log(e);
}

console.log(
  "some dummyData from the doc: ",
  dummyDataDoc?.reviews?.category?.soda[1] // should yeild 'Coke' object
);

// let data = { test: "hi" };
// let yamlStr = yaml.safeDump(data);
// fs.writeFileSync(METAREV_YML_PATH, yamlStr, "utf8");

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
    retrievedRando = dummyDataDoc?.reviews?.category?.soda[arrayIndex];
  } else {
    retrievedRando = dummyDataDoc?.reviews?.category?.nuts[arrayIndex];
  }

  console.log("retrievedRando from retrieveReview(): ", retrievedRando);
  return retrievedRando;
};

// here to test output of retrieveReview() - TODO: remove line 82/83
// retrieveReview();

app.listen(SERVER_PORT, () => console.log("Look out! The server be runnin"));
