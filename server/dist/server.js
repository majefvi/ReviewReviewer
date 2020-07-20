"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const SERVER_PORT = 5000;
const app = express();
app.get("/", (req, res) => {
    res.send("Howdy wurld.");
});
app.listen(SERVER_PORT, () => console.log("Look out! The server be runnin"));
