/*

// below is a sample set of controllers for the model

const Pim = require('../models/pim.js');

const addPim = (data) => {
  const pokemon = new Pim({data});
  pokemon.save((err) => {
    if (err) return handleError(err);
    else console.log(`Pokemon '${data.name}' added!`)
  });
};

const findPim = (req, res, next) => {
  Pim.find(data, (err) => {
    if (err) return next(err);
    res.send(data)
  })
}

const editPim = (data) => {

}

const deletePim = (data) => {
  
}

module.exports = {
  addPim,
  findPim,
  editPim,
  deletePim,
};

*/
