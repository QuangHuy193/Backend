//template ejs
const express = require("express"); //commonjs
const path = require("path");
require("dotenv").config();
const app = express(); //app express

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//init port
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//khai bao route
app.get("/", (req, res) => {
  res.send("Hello Huy!");
});

app.get("/route2", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(
    `Example app listening on port ${port} and hostname is ${hostname}`
  );
});
