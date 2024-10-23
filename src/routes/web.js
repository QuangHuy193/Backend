const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getRoute2,
  getRoute3,
} = require("../controllers/homeController");

//khai bao route
router.get("/", getHomepage);
router.get("/route2", getRoute2);
router.get("/route3", getRoute3);

module.exports = router;
