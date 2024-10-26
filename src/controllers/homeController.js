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
  res.render("sample.ejs");
};

const getRoute3 = (req, res) => {
  res.send("TỚ NHỚ CẬU");
};

module.exports = {
  getHomepage,
  getRoute2,
  getRoute3,
};
