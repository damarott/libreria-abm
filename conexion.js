/* CONEXION CON LA DB */

const mysql = require("mysql");
module.exports = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "books_new"
});