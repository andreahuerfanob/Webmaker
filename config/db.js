const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongo");
const connectDB = async () => {
  await mongoose.connect(db);
};

module.exports = connectDB;
