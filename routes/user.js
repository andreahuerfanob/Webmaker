const express = require("express");
const router = express.Router();

const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Load user
router.get("/load", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
});

// Find user by credentials
router.get("/", async (req, res) => {
  // get username & pass
  const username = req.query.username;
  const password = req.query.password;
  let user;
  // if username & password r sent from client
  if (username && password) {
    user = await User.findOne({ username: username, password: password });
    // if the username is taken
  } else if (username) {
    user = await User.findOne({ username: username, password: password });
  }
  // if user doesn't exist
  if (!user) {
    user = null;
  }
  // send user back to client
  res.json(user);
});
// Create new user
router.post("/register", async (req, res) => {
  const newUser = new User({ ...req.body });
  // Create salt & hash
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      throw err;
    }
    bcrypt.hash(newUser.password, salt, async (err, hash) => {
      if (err) {
        throw err;
      }
      newUser.password = hash;
      const user = await newUser.save();
// Find user by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  console.log(user);
  res.json(user);
});
// Update user
router.put("/", async (req, res) => {
  const newUser = req.body;
  await User.findByIdAndUpdate(newUser._id, newUser);
  res.json(newUser);
});

module.exports = router;
