import { Application, NextFunction, Request, Response } from "express";
import express = require("express");
import bodyparser = require("body-parser");

const dummyData = require("../dummyData/dummyData.yml");

const SERVER_PORT = process.env.PORT || 5000;

const app: Application = express();
app.use(bodyparser.json());

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  console.log("Random review being retrieved");
  let randoRev = await retrieveReview(req, res);
  if (randoRev) {
    res.send(randoRev);
  } else {
    next("Random review cannot be generated...  Please refresh the page.");
  }
});

const retrieveReview = (req: Request, res: Response): Object => {
  let retrievedRando = dummyData?.Reviews?.Category;
  console.log("RETRIEVEDRANDO: ", retrievedRando);
  return {};
};

var ymlTest = JSON.stringify(dummyData?.Reviews?.Category?.nuts[0].name);

console.log("YML ACCESS TEST: ", ymlTest);

app.listen(SERVER_PORT, () => console.log("Look out! The server be runnin"));

/*
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/express_backend", (req, res) => {
  console.log("hi");
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.get("/harrypotter", (req, res) => {
  console.log("he be a wizard");
  res.send({ test: "is this how this works?" });
});

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

      // test
*/
