// import express library
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("config");
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let user = await User.findOne({ username: username, password: password });

  // if user is not existing
  if (!user) {
    res.json(null);
  } else {
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: "1d"
      },
      (err, token) => {
        if (err) {
          throw err;
        }
        res.json({ token, user });
      }
    );
  }
});

// import path to deploy online
const path = require("path");
// Init express
const app = express();
const connectDB = require("./config/db");

// Connect DB
connectDB();

app.use(express.json());
// Define Routes
app.use("/api/user", require("./routes/user"));
app.use("api/website", require("./routes/website"));
app.use("api/page", require("./routes/page"));
app.use("api/widget", require("./routes/widget"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3100;
// server listening
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
