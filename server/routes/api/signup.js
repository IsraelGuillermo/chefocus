const router = require('express').Router();
const authController = require('../../controllers/auth');

router.route('/').post(authController.signup);

module.exports = router;
