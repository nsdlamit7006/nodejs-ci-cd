const express = require('express');
const app = require('./app');
const connectDB = require('./src/config/db',;

connectDB();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log("Hello...")
  console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port...... ${PORT}`);


module.exports = server;
