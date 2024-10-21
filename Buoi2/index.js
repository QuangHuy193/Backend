const express = require("express"); //commojs
//import express from "express"; // es modules

const app = express(); //app express

const port = 8080; //init port
//khai bao route
app.get("/", (req, res) => {
  res.send("Hello Huy!");
});

app.get("/route2", (req, res) => {
  res.send('<h1>HELLO</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
