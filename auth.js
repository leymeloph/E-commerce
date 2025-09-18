// Import tools
import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// REGISTER route
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;         // get data from request

    const existingUser = await User.findOne({ email });     // check if email already exists
    if (existingUser) return res.status(400).json({ message: "Email already exists" });

    const newUser = new User({ username, email, password }); // create new user
    await newUser.save();                                   // save to DB (password auto-hashed)

    res.status(201).json({ message: "User registered successfully" }); // success response
  } catch (err) {
    res.status(500).json({ error: err.message });           // error response
  }
});

// LOGIN route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;                   // get data from request

    const user = await User.findOne({ email });             // check if user exists
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password); // compare password
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // create token (valid for 1 hour)
    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });

    // send token + user info back
    res.json({
      token,
      user: { id: user._id, username: user.username, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });           // error response
  }
});

export default router;
