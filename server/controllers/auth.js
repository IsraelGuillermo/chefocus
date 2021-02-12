// const db = require('../models');

const login = async (req, res) => {
  res.json(req.user);
};

exports.login = login;
