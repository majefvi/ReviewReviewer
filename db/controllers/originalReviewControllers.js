const customModels = require("../models/originalReviewModel.js");
// const db = require("../index.js");
// const { Mongoose } = require("mongoose");

const randomReview = () => {
  customModels.OriginalReview.find({})
    .limit(1)
    .then((data) => console.log("here is our find data: ", data))
    .catch((err) => console.log("something is wrong: ", err));
};
module.exports = {
  randomReview,
};
