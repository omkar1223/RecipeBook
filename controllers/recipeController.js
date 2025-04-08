const Recipe = require("../models/recipe.model");
const mongoose = require("mongoose");

const createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    const savedData = await newRecipe.save();
    res
      .status(200)
      .json({ msg: "recipe data created successfully", recipe: savedData });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "error while creating data", error: error.message });
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ recipes: recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecipesByTitle = async (req, res) => {
  try {
    const title = req.params.title;
    const recipes = await Recipe.find({ title: title });
    if (!recipes) {
      return res.status(404).json({ msg: `Title not found for ${title}` });
    }
    res.status(200).json({ recipes: recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecipesByAuthor = async (req, res) => {
  try {
    const recipes = await Recipe.find({ author: req.params.author });
    res.status(200).json({ recipes: recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecipeByDifficulty = async (req, res) => {
  try {
    const recipes = await Recipe.find({ difficulty: req.params.difficulty });
    res.status(200).json({ recipes: recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRecipeDifficultyById = async (req, res) => {
  try {
    const recipes = await Recipe.findByIdAndUpdate(
      req.params.Id,
      { difficulty: req.params.difficulty },
      {
        new: true,
      }
    );
    if (!recipes) {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.status(200).json({ recipes: recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRecipePrepAndCookTimeById = async (req, res) => {
  try {
    const recipes = await Recipe.findOneAndUpdate(
      { title: req.params.title },
      { prepTime: req.body.prepTime, cookTime: req.body.cookTime },
      {
        new: true,
      }
    );
    if (!recipes) {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.status(200).json({ recipe: recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRecipeById = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.Id);
    if (!deletedRecipe) {
      return res.status(404).json({ msg: "Recipe Id not found" });
    }
    res.status(200).json({
      msg: "Recipe deleted successfully",
      deletedRecipe: deletedRecipe,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipesByTitle,
  getRecipesByAuthor,
  getRecipeByDifficulty,
  updateRecipeDifficultyById,
  updateRecipePrepAndCookTimeById,
  deleteRecipeById,
};
