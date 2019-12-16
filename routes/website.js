const express = require("express");
const router = express.Router();
const Website = require("../models/Website");

const websites = [
  { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
  { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
  { _id: "456", name: "Msimbo", developerId: "456", description: "Lorem" },
  { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
  { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
  { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
  { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
];

// Create website
router.post("/", (req, res) => {
  const newWebsite = req.body;
  websites.push(newWebsite);
  res.json(newWebsite);
});

// get all website
router.get("/user/:uid", (req, res) => {
  const uid = req.params.uid;
  const currentWebsites = await Website.find({ developerId: uid });
  res.json(currentWebsites);
});

// Get website by given ID
router.get("/:wid", (req, res) => {
  const wid = req.params.wid;
  const website = await Website.findById(wid);
  res.json(website);
});

// update website
router.put("/", (req, res) => {
  const newWebsite = req.body;
  await Website.findByIdAndUpdate(newWebsite._id, newWebsite);
  res.json(newWebsite);
});
// Delete Website
router.delete("/:wid", (req, res) => {
  const wid = req.params.wid;
  await Website.findByIdAndRemove(wid);
  res.json(websites);
});
module.exports = router;
