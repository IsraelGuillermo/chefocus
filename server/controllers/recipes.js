const db = require('../models/Recipe');


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

exports.submit = submit;