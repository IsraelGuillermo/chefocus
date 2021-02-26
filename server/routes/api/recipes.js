const router = require('express').Router();

const recipeController = require("../../controllers/recipes");



router.route('/').post(recipeController.submit)

module.exports = router;