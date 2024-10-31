const express = require("express");
const router = express.Router();
const {
  getHomepage,
  addUser,
  handelAddUser,
  updateUser,
  handelUpdateUser,
} = require("../controllers/homeController");

//khai bao route
//trang chu
router.get("/", getHomepage);
//trang add user
router.get("/addUser", addUser);
//xu ly add user
router.post("/handelAddUser", handelAddUser);
//trang update user
router.get("/updateUser/:id", updateUser);
//xu ly update user
router.post("/handelUpdateUser", handelUpdateUser);

module.exports = router;
