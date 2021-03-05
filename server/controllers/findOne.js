const db = require('../models');

const findOne = (req, res) => {
  const recipeId = req.params.id;
  db.Recipe.findOne({
    where: {
      id: recipeId
    }
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status().json(err);
    });
};

exports.findOne = findOne;
