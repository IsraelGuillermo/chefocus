const db = require('../models');

const login = (req, res) => {
  res.json(req.user);
};

const signup = (req, res) => {
  db.User.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};

exports.login = login;
exports.signup = signup;
