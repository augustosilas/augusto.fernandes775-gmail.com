const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123",
  database: "cadastro",
});

connection.connect((err) => {
  if (err) return console.log(err);
  console.log("conectou");
});

module.exports = connection;
