const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// signup
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // check is email exists
    const exists = await User.findOne({ email });

    // if exists, do not proceed
    if (exists) return res.status(400).json({ error: "Email already in use. " });

    // else, proceed
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // check is email exists
    const exists = await User.findOne({ email });

    if (!exists) return res.status(404).json({ error: "Email not found" });

    const isPasswordMatched = await bcrypt.compare(password, exists.password);

    if (!isPasswordMatched) return res.status(400).json({ error: "Incorrect password" });

    const token = jwt.sign({ userId: exists._id }, process.env.JWT_SECRET);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
