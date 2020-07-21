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
