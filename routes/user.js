const express = require("express");
const router = express.Router();

const User = 

const users = [
  {
    _id: "123",
    username: "alice",
    password: "alice",
    firstName: "Alice",
    lastName: "Wonder",
    email: "alice@gmail.com"
  },
  {
    _id: "234",
    username: "bob",
    password: "bob",
    firstName: "Bob",
    lastName: "Marley",
    email: "bob@whatever.com"
  },
  {
    _id: "345",
    username: "charly",
    password: "charly",
    firstName: "Charly",
    lastName: "Garcia",
    email: "charly@ulem.com"
  },
  {
    _id: "456",
    username: "shiyu",
    password: "shiyu",
    firstName: "Shiyu",
    lastName: "Wang",
    email: "swang@ulem.org"
  }
];
// Find user by credentials
router.get("/", await (req, res) => {
  // get username & pass
  const username = req.query.username;
  const password = req.query.password;
  let user;
  // if username & password r sent from client
  if (username && password) {
    user = await User.findOne({username: username, password: password });
      // if user has a given username & password
      if 




  } // if the username is taken
  else if (username) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        user = users[i];
      }
    }
  }
  // if user doesn't exist
  if (!user) {
    user = null;
  }
  // send user back to client
  res.json(user);
});
// create new user
router.post("/", async (req, res) => {
  const userToSave = new User({...req.body});
  
  
  

  
  
  newUser.save();
  res.json(newUser);
});
// Find user by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.json(user);
});

// Update user
router.put("/", (req, res) => {
  const newUser = req.body;
 await User.findByIdAndUpdate(newUser._id, newUser);
  res.json(newUser);
});

module.exports = router;
