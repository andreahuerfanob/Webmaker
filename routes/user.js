const express = require("express"); 
const router = express.Router();
// send hello to client
router.get("/", (req, res)=>{res.json("Hello");
router.get("/123", (req, res) => {
    res.json("hello from server");

});

module.exports = router;