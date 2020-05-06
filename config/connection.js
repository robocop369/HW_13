const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "e764qqay0xlsc4cz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "aeybqrvg5modmnqs",
  password: "grnrpvlafq72b2k6",
  database: "olhrrzfdc8u5ptey"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
});

// connection.query(`
//     CREATE TABLE burgers (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     burger_name VARCHAR(255) NOT NULL,
//     devoured BOOLEAN DEFAULT FALSE);`,
//     (err) => {
//       if (err) {
//         console.log('bruh...')
//       }
//     }
//   )
// console.log("db connected as id " + connection.threadId);


// connection.query(`
// INSERT INTO burgers 
// (burger_name) 
// VALUES
// ("Chipotle Burger"),
// ("QUEBurger");


// INSERT INTO burgers 
// (burger_name,devoured) 
// VALUES
// ("Bacon Bacon Bacon Burger", TRUE);`,
//     (err) => {
//       if (err) {
//         console.log('bruh...')
//       }
//     }
//   )
console.log("db connected as id " + connection.threadId);



module.exports = connection;