require("dotenv").config();
const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  waitForConnections: process.env.DB_WAITFORCONNECTION,
  connectionLimit: process.env.DB_CONNECTIONLIMIT,
  queueLimit: process.env.DB_QUEUELIMIT,
});

module.exports = connection;
