const router = require('express').Router();
const authRoutes = require('./auth');
const recipeRoutes = require('./recipes');
const profilepicRoutes = require('./profilePic');

const isAuthenticated = require('../../config/middleware/isAuthenticated');

router.use('/auth', authRoutes);
router.use(isAuthenticated);
router.use('/recipes', recipeRoutes);
router.use('/getRecipes', recipeRoutes);
router.use('/getRecipesByUser', recipeRoutes);
router.use('/updateProfilePic', profilepicRoutes);
module.exports = router;
