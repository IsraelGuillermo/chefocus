const db = require('../models');
const userName = require('../models/User')

const submit = (req, res) => {
  console.log(req.body);
  db.Recipe.create(req.body)
    .then((result) => {
      const { recipe } = result;
      res.json(recipe);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};

const render = (req, res) => {
  console.log(req.body);
  db.Recipe.findOne({
    where: {
      userName = username,
    }
  })
    .then((result) => {
      const { recipe } = result;
      res.json(recipe);
    })
    .catch((err) => {
      res.status(401).json(err);
    })
}

exports.submit = submit;
exports.render = render;