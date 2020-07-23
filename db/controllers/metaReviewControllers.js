const metaModel = require("../models/metaReviewModel.js");
const { MetaReview } = require("../models/metaReviewModel.js");

const createMetaReviewEntry = (data) =>
  metaModel.MetaReview.create(data, (responseData) =>
    console.log(responseData)
  );

// module.exports = { createMetaReviewEntry };

// export default createMetaReviewEntry;
