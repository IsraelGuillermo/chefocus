const db = require('../models');

const submit = (req, res) => {
  console.log(req.body);
  db.recipe.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};

exports.submit = submit;