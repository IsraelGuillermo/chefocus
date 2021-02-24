const router = require('express').Router();
const passport = require('../../config/passport');
const authController = require('../../controllers/auth');
const RecipeController = require("../../controllers/recipes");
const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.route('/signup').post(authController.signup);

router.use(passport.authenticate('local'));
router.route('/login', isAuthenticated).post(authController.login);
// Matches with '/api/auth/login'
router.route('/signup').post(authController.signup);
router.route('/recipes').post(RecipeController.submit)

module.exports = router;
