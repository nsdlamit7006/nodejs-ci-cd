const express = require('express');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

module.exports = app;
