const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getUser,
  addUser,
} = require("../controllers/homeController");

//khai bao route
router.get("/", getHomepage);
router.get("/user", getUser);
router.post("/addUser", addUser);

module.exports = router;
