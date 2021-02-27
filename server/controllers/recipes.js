const db = require('../models');

const submit = (req, res) => {
  console.log(req.body);
  db.Recipe.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
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
    })
}

exports.submit = submit;
exports.render = render;
