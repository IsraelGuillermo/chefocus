const router = require('express').Router();
const authRoutes = require('./auth');
const db = require('../../models');
const recRoutes = require('./auth')


router.use('/auth', authRoutes);
router.use('/recipes', recRoutes)

module.exports = router;
