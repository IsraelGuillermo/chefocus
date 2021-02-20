const db = require('../models');

const login = async (req, res) => {
  res.json(req.user);
  res.redirect('/');
};

const signup = (req, res) => {
  console.log(`This is controller auth `, req.body);
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
