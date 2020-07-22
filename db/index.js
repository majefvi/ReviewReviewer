const mongoose = require("mongoose");
const DB_URI = "mongodb://localhost/amazonreviews";
const randomMongoose = require("mongoose-simple-random");
const controller = require("./controllers/originalReviewControllers");

const db = mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.then((db) => console.log(`Connected to: '${DB_URI}'`)).catch((err) =>
  console.log(`Error connecting to '${DB_URI}': ${err}'`)
);

console.log("controller --------->", controller);

db.controller.randomReview();

// const reviewSchema = new mongoose.Schema({
//   product_id: String,
//   product_category: String,
//   review: String,
//   star_rating: Number,
// });

// reviewSchema.plugin(randomMongoose);

// const OriginalReview = mongoose.model(
//   "OriginalReview",
//   reviewSchema,
//   "amzlReviews"
// );

// OriginalReview.find({})
//   .limit(1)
//   .then((data) => console.log("here is our find data: ", data))
//   .catch((err) => console.log("something is wrong: ", err));

// module.exports = db;
