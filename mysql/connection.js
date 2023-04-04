const mysql = require("mysql");

const connection = mysql.createConnection({
  database: "ft3",
  user: "root",
  password: "",
  host: "localhost",
  port: 3306,
});

connection.connect();

// connection.query("SELECT * FROM mini_cooper;", (error, results) => {
//   console.log(error, results);
// });

module.exports = connection;
