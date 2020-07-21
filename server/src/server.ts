/*
import { Application, NextFunction, Request, Response } from "express";
import express = require("express");
import bodyparser = require("body-parser");
// import { Router } = require("express");

// import mjvRoutes = require("./routes/router.js");
// import router = require("router");

const SERVER_PORT = 5000;

const app: Application = express();
app.use(bodyparser.json());

// const mjvRoutes =
// Router.route("/").all((req: Request, res: Response) => res.send("what up man"));

// const router = express.Router();
// app.use(router);
// router.route(mjvRoutes)

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("route reached");
  res.sendStatus(200);
});

const retrieveReview = (req: Request, res: Response) => {};

// app.get("/review", retrieveReview());

export default app;

app.listen(SERVER_PORT, () => console.log("Look out! The server be runnin"));
*/

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
