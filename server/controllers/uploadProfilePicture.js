const db = require('../models');

const uploadProfilePic = (req, res) => {
  console.log(req.body);
  // db.User.update(req.body,{where: {

  // }})
  //   .then((result) => {
  //     const { recipe } = result;
  //     res.json(recipe);
  //   })
  //   .catch((err) => {
  //     res.status(401).json(err);
  //   });
};

exports.uploadProfilePic = uploadProfilePic;
