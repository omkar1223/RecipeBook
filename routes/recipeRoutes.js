const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,
  getRecipesByTitle,
  getRecipesByAuthor,
  getRecipeByDifficulty,
  updateRecipeDifficultyById,
  updateRecipePrepAndCookTimeById,
  deleteRecipeById,
} = require("../controllers/recipeController");

router.post("/", createRecipe);

router.get("/", getAllRecipes);

router.get("/title/:title", getRecipesByTitle);

router.get("/author/:author", getRecipesByAuthor);

router.get("/difficulty/:difficulty", getRecipeByDifficulty);

router.put("/Id/:Id/difficulty/:difficulty", updateRecipeDifficultyById);

router.put("/times/:title", updateRecipePrepAndCookTimeById);

router.delete("/Id/:Id", deleteRecipeById);

module.exports = router;
