const { json } = require("express");
const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDServices");

//*
const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getUser = (req, res) => {
  return res.render("addUser.ejs");
};

const addUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.username;
  let city = req.body.city;
  const [results, fields] = await connection.query(
    `insert into Users(email, name, city) values(?, ?, ? )`,
    [email, name, city]
  );
  return res.send("create user success");
};

module.exports = {
  getHomepage,
  getUser,
  addUser,
};
