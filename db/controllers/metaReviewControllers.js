const metaModel = require("../models/metaReviewModel.js");
const { MetaReview } = require("../models/metaReviewModel.js");

const createMetaReviewEntry = (data) =>
  // let NewMetaReview = new metaModel(data)
  metaModel.MetaReview.create(data, (responseData) =>
    console.log(responseData)
  );

module.exports = { createMetaReviewEntry };
