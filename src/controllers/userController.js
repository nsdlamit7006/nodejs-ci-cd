const User = require('../models/userModel');

const register = async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.status(201).json({ message: 'User registered successfully' });
};

module.exports = { register };
