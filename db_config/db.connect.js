const mongoose = require("mongoose");

const mongoUri = process.env.MONGOURI;

const connectToDatabase = async () => {
  await mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("Database is connected successfully");
    })
    .catch((error) => {
      console.log({ error: error.message });
    });
};

module.exports = connectToDatabase;
