const mongoose = require("mongoose");

const randomMongoose = require("mongoose-simple-random");

const reviewSchema = new mongoose.Schema({
  product_id: String,
  product_category: String,
  review: String,
  star_rating: Number,
});

reviewSchema.plugin(randomMongoose);

const OriginalReview = mongoose.model("OriginalReview", reviewSchema);

module.exports = {
  OriginalReview,
};

/* 

// below is a sample model

const mongoose = require('mongoose');

const pimSchema = mongoose.Schema({
  name: String,
  favorite: String,
  captured: Boolean,
  rating: Number,
  added: {
    type: Date,
    default: Date.now
  }
});

const Pim = mongoose.model('Pim', pimSchema);

module.exports = {
  Pim,
};

*/
