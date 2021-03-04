const router = require('express').Router();

const deleteRecipe = require('../../controllers/deleteRecipe');

router.route('/:id').delete(deleteRecipe.deleteRecipe);

module.exports = router;
