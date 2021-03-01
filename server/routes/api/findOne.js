const router = require('express').Router();

const findoneRecipe = require('../../controllers/findOne');

router.route('/:id').get(findoneRecipe.findOne);

module.exports = router;
