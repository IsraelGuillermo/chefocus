const router = require('express').Router();
const authRoutes = require('./auth');
const recipeRoutes = require('./recipes');
const isAuthenticated = require('../../config/middleware/isAuthenticated');


router.use('/auth', authRoutes);
router.use(isAuthenticated)
router.use('/recipes', recipeRoutes)

module.exports = router;
