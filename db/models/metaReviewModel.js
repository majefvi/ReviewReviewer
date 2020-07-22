const mongoose = require("mongoose");

const metaReviewSchema = new mongoose.Schema({
  product_id: String,
  product_category: String,
  review: String,
  star_rating: Number,
});

const MetaReview = mongoose.model(
  "MetaReview",
  metaReviewSchema,
  "metaAmzlReviews"
);

module.exports = {
  MetaReview,
};
