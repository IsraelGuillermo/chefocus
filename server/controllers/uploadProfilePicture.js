const db = require('../models');

const uploadProfilePic = (req, res) => {

  db.User.update(
    { photo: req.body.photo },
    {
      where: {
        id: req.body.id
      }
    }
  )
    .then((result) => {
      const { updatedUser } = result;
      res.json(updatedUser);
    })
    .catch((err) => {
      console.error(err);
      res.status(401).json(err);
    });
};

exports.uploadProfilePic = uploadProfilePic;
