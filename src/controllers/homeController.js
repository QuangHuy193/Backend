const { json } = require("express");
const connection = require("../config/database");

const getHomepage = (req, res) => {
  let users = [];
  connection.query("select * from Users u", function (err, result, fields) {
    users = result;
    res.send(JSON.stringify(users));
  });
};

const getRoute2 = (req, res) => {
  return res.render("home.ejs");
};

const getRoute3 = (req, res) => {
  res.send("TỚ NHỚ CẬU");
};

const addUser = (req, res) => {
  res.send("aaa");
};

module.exports = {
  getHomepage,
  getRoute2,
  getRoute3,
  addUser,
};
