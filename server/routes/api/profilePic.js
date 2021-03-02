const router = require('express').Router();

const profilePicController = require('../../controllers/uploadProfilePicture');

router.route('/').put(profilePicController.uploadProfilePic);

module.exports = router;
