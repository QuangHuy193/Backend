//template ejs
require("dotenv").config();
//commonjs
const express = require("express");
//app express
const app = express();

const configViewEngine = require("./config/viewEngine");
const router = require("./routes/web");

//init port
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);

app.use("/", router);
app.use("/admin", router);

app.listen(port, hostname, () => {
  console.log(
    `Example app listening on port ${port} and hostname is ${hostname}`
  );
});
