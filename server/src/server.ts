import { Application, Request, Response, NextFunction } from "express";
import express = require("express");

const SERVER_PORT = 5000;

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Howdy wurld.");
});

app.listen(SERVER_PORT, () => console.log("Look out! The server be runnin"));
