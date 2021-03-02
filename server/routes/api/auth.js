const router = require('express').Router();
const passport = require('../../config/passport');
const authController = require('../../controllers/auth');

// router.route('/signup').post(authController.signup);

router.use(passport.authenticate('local'));
router.route('/login').post(authController.login);
// Matches with '/api/auth/login'
// router.route('/signup').post(authController.signup);

module.exports = router;
