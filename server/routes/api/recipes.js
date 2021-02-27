const router = require('express').Router();

const recipeController = require("../../controllers/recipes");


router.route('/').post(recipeController.submit)
router.route('/').get(recipeController.render)

module.exports = router;