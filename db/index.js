const mongoose = require("mongoose");
const DB_URI = "mongodb://localhost/amazonreviews";

const db = mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.then((db) => console.log(`Connected to: '${DB_URI}'`)).catch((err) =>
  console.log(`Error connecting to '${DB_URI}': ${err}'`)
);

module.exports = { db };

/*

// below is a simple connection to Mongo via Mongoose example

const mongoose = require("mongoose");
const mURI = "mongodb://localhost:27017/khawsar";

const db = mongoose.connect(mURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.then((db) => console.log(`Connected to: '${mURI}'`))
  .catch((err) =>
    console.log(`Error connecting to '${mURI}': ${err}`)
);

module.exports = db;

*/
