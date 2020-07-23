const mongoose = require("mongoose");
require("dotenv").config();
const DB_URI = process.env.REACT_APP_CUSTOM_DB_URI;

mongoose.connect(
  `${DB_URI}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("db conn")
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));

db.once("open", function () {
  console.log("Successfully connected to MongoDB!");
});

// const db = (tap) => {
//   if (tap) {
//     mongoose.connect(
//       `${DB_URI}`,
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       },
//       () => console.log("db conn")
//     );
//   } else {
//     console.log("Have to turn the tap to connect to the db.");
//   }
// };

module.exports = db;
