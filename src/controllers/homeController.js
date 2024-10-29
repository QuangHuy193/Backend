const { json } = require("express");
const connection = require("../config/database");

const getHomepage = (req, res) => {
  res.render("home.ejs");
  // let users = [];
  // connection.query("select * from Users u", function (err, result, fields) {
  //   users = result;
  //   res.send(JSON.stringify(users));
  // });
};

const getUser = (req, res) => {
  return res.render("addUser.ejs");
};

const addUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.username;
  let city = req.body.city;
  connection.query(
    `insert into Users(email, name, city) values(?, ?, ? )`,
    [email, name, city],
    function (err, results) {
      res.send("create user success");
      console.log(results);
    }
  );
};

module.exports = {
  getHomepage,
  getUser,
  addUser,
};
