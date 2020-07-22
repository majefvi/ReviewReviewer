import app from "../server.ts";
const { Router } = require("express");

const mjvRoutes = Router.route("/").all((req, res) => res.send("what up man"));

app.Router().all((req, res) => res.send("hi?"));

export default mjvRoutes;
