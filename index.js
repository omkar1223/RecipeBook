const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const connectToDatabase = require("./db_config/db.connect");
const recipe = require("./models/recipe.model");
const app = express();
app.use(express.json());
app.use(cors());
PORT = 9000;
connectToDatabase();

app.get("/", (req, res) => {
  res.status(200).json("Welcome to recipe book");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
