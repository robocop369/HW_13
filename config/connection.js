const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "qc40vdfveeehcvjh",
  password: "u2ucp4umx0qbenu3",
  database: "dzlijkz0ju9rea43"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("db connected as id " + connection.threadId);
});

module.exports = connection;