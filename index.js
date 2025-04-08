const { connectToDatabase } = require("./db_config/db.connect");
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/recipeRoutes");

require("dotenv").config();
connectToDatabase();

const app = express();
app.use(bodyParser.json());

app.use("/recipes", router);

PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
