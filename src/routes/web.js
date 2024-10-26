const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getRoute2,
  getRoute3,
  addUser,
} = require("../controllers/homeController");

//khai bao route
router.get("/", getHomepage);
router.get("/user", getRoute2);
router.get("/route3", getRoute3);

router.post("/addUser", addUser);

module.exports = router;
