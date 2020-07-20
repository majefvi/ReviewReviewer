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

// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res.send("Howdy wurld.");
// });

export default app;

app.listen(SERVER_PORT, () => console.log("Look out! The server be runnin"));
