import { Application, NextFunction, Request, Response } from "express";
// import { Error } from "@types/mongoose";
import express = require("express");
import bodyparser = require("body-parser");
import path = require("path");

const db = require("../../db/db.js");
const OriginalReview = require("../../db/models/originalReviewModel.js");
const MetaReview = require("../../db/models/metaReviewModel.js");

const SERVER_PORT = process.env.PORT || 5000;

const app: Application = express();
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "build", "index.html"));
});

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

app.get("/getrandom", (req: Request, res: Response) => {
  OriginalReview.find({})
    .limit(1)
    .then((data) => {
      // console.log(data);
      res.send(data);
    });
});

app.post("/savemetareview", (req: Request, res: Response) => {
  let incomingData = req.body.formState;
  let newMetaReview = new MetaReview(incomingData);
  newMetaReview.save((err: Error, doc: Object) => {
    if (err) return console.log("Error saving: ", err);
    else console.log("metaReview saved successfully!");
  });
  res.sendStatus(201);
});

app.listen(SERVER_PORT, () => console.log("Look out! The server be runnin"));
