const router = require('express').Router();
const passport = require('../../config/passport');
const authController = require('../../controllers/auth');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.use(passport.authenticate('local'));

// Matches with '/api/auth/login'
router.route('/login', isAuthenticated).post(authController.login);
router.route('/signup').post(authController.signup);

module.exports = router;
