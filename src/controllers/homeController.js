const { json } = require("express");
const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  addUserToDB,
  updateUserToDB,
  deleteUserToDB,
} = require("../services/CRUDServices");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const addUser = (req, res) => {
  return res.render("addUser.ejs");
};

const handelAddUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.username;
  let city = req.body.city;
  let results = await addUserToDB(email, name, city);
  if (results == 1) {
    return res.send("create user success");
  } else {
    return res.send("can't create user success");
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;

  const user = await getUserById(userId);

  return res.render("updateUser.ejs", { user: user });
};

const handelUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.username;
  let city = req.body.city;
  let id = req.body.userId;
  let results = await updateUserToDB(email, name, city, id);
  if (results > 0) {
    return res.send("update user success");
  } else {
    return res.send("can't update user success");
  }
};
const deleteUser = async (req, res) => {
  const user = await getUserById(req.params.id);

  return res.render("deleteUser.ejs", { user: user });
};

const handelDeleteUser = async (req, res) => {
  let id = req.body.userId;
  let results = await deleteUserToDB(id);
  if (results == 1) {
    return res.send("Delete user success");
  } else {
    return res.send("Delete can't user success");
  }
};

module.exports = {
  getHomepage,
  addUser,
  handelAddUser,
  updateUser,
  handelUpdateUser,
  deleteUser,
  handelDeleteUser,
};
