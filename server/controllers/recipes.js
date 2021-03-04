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
  db.Recipe.findAll({
    include: [
      {
        model: db.User
      }
    ]
  })
    .then((result) => {
      res.json(result);
      console.log(result);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};

const findRecipeByUser = (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  db.Recipe.findAll({
    include: [
      {
        model: db.User,
        where: {
          id: userId
        }
      },
    ]
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};

exports.submit = submit;
exports.render = render;
exports.findRecipeByUser = findRecipeByUser;
