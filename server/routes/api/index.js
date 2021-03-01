const router = require('express').Router();
const authRoutes = require('./auth');
const recipeRoutes = require('./recipes');
const profilepicRoutes = require('./profilePic');
const singupRoute = require('./signup');
const findOneRecipe = require('./findOne');
const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.use('/signup', singupRoute);
router.use('/auth', authRoutes);
router.use(isAuthenticated);
router.use('/recipes', recipeRoutes);
router.use('/getRecipes', recipeRoutes);
router.use('/getRecipesByUser', recipeRoutes);
router.use('/getIndividualRecipe', findOneRecipe);
module.exports = router;
