const mongoose = require("mongoose");

const metaReviewSchema = new mongoose.Schema({
  product_id: String,
  metaReviewAuthor: String,
  metaRating: String,
  metaReviewText: String,
});

module.exports = mongoose.model(
  "MetaReview",
  metaReviewSchema,
  "metaAmzlReviews"
);

// module.exports = {
//   MetaReview,
// };
