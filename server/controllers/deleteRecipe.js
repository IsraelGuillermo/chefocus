const db = require('../models');

const deleteRecipe = (req, res) => {
  console.log(req.params.id);
  const recipeId = req.params.id;
  db.Recipe.destroy({
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

exports.deleteRecipe = deleteRecipe;
