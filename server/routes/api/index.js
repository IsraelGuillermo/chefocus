const router = require('express').Router();
const authRoutes = require('./auth');
const db = require('../../models');


router.use('/auth', authRoutes);

module.exports = router;
