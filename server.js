const express = require('express');
const app = require('./app');
const connectDB = require('./src/config/db');

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
