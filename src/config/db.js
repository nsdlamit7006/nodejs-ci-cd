const mongoose = require('mongoose');
exports.dotenv = require('dotenv').config();

const connectDB = async () => {
    console.log("Mongo URL:", process.env.MONGO_URI);
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Database connected');
};

module.exports = connectDB;
