const mongoose = require("mongoose");
const DB_URI = "mongodb://localhost/amazonreviews";

mongoose.connect(DB_URI, {
  // refering back to URI to reconnect
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const reviewSchema = new mongoose.Schema({
  customer_id: Number,
  product_category: String,
  date: { type: Date, default: Date.now },
  comments: [{ body: String, date: Date }],
  star_rating: Number,
});

const originalReview = mongoose.model("originalReview", reviewSchema);

// const customerReview = new originalReview({
//   category: watch,
// })

// customerReview.save((err, initialReview) => {
//   if (err) return console.log("error: ", err);
//   // console.log(initialReview);
// })

const reviewLookup = originalReview.find((err, originalReview) => {
  if (err) return console.error(err);
  console.log("doc modeled successfully: ", originalReview);
});

// db-server comms
db.find().aggregate([{ $sample: { size: 1 } }])((error, result) => {
  if (error) {
    console.log("error: ", error);
    return response.status(500).send(error);
  }
  response.send(result);
});
