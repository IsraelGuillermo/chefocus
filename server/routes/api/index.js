const router = require('express').Router();
const authRoutes = require('./auth');
const recipeRoutes = require('./recipes');
const profilePicRoutes = require('./profilePic');
const signUpRoute = require('./signup');
const findOneRecipe = require('./findOne');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.use('/signup', signUpRoute);
router.use('/auth', authRoutes);
router.use(isAuthenticated);
router.use('/recipes', recipeRoutes);
router.use('/updateProfilePic', profilePicRoutes);
router.use('/getRecipes', recipeRoutes);
router.use('/getRecipesByUser', recipeRoutes);
router.use('/getIndividualRecipe', findOneRecipe);
module.exports = router;
