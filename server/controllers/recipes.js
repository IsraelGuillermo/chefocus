const db = require('../models');

const submit = (req, res) => {
  console.log(req.body);
  const newRecipe = {
    ...req.body,
    UserId: req.user.id
  };
  db.Recipe.create(newRecipe)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(401).json(err);
    });
};

const render = (req, res) => {
  console.log(req.body);
  db.Recipe.findAll({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};

exports.submit = submit;
exports.render = render;
