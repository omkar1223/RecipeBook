const { connectToDatabase } = require("./db_config/db.connect");
const express = require("express");
const bodyParser = require("body-parser");
const Recipe = require("./models/recipe.model");

require("dotenv").config();
connectToDatabase();

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ msg: "Hello welcome", msg: "ok ok" }, { msg: "second way" });
});

async function createRecipe(recipeData) {
  try {
    const newRecipe = new Recipe(recipeData);
    const savedData = await newRecipe.save();
    return savedData;
  } catch (error) {
    console.log(error);
  }
}

app.post("/recipe", async (req, res) => {
  console.log("coming here");
  console.log("req.body: ", req.body);
  try {
    const newRecipe = await createRecipe(req.body);
    res.status(200).json({
      msg: "New Recipe database created successfully",
      recipe: newRecipe,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
