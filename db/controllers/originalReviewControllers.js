const customModels = require("../models/originalReviewModel.js");

const randomReview = () =>
  customModels.OriginalReview.find({})
    .limit(1)
    .then((data) => console.log("here is our find data: ", data))
    .catch((err) => console.log("something is wrong: ", err));

module.exports = { randomReview };
