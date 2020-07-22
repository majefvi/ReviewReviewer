const mongoose = require("mongoose");

const randomMongoose = require("mongoose-simple-random");

const reviewSchema = new mongoose.Schema({
  product_id: String,
  product_category: String,
  review: String,
  star_rating: Number,
});

reviewSchema.plugin(randomMongoose);

const OriginalReview = mongoose.model(
  "OriginalReview",
  reviewSchema,
  "amzlReviews"
);

// OriginalReview.find({})
//   .then((data) => console.log(data))
//   .catch((err) => console.log("something is wrong: ", err));

module.exports = {
  OriginalReview,
};
