const connection = require("../config/connection.js");

const orm = {
  selectAll: function(table, cb) {
    // ?? is the table name
    const queryString = "SELECT * FROM ??;";
    connection.query(queryString, [table], function(error, result) {
      if (error) {throw error;}
      cb(result);
    });
  },


  insertOne: function(table, columns, data, cb) {
    // first ?? is the table; (??) has the column names; (?) is the values
    queryString = "INSERT INTO ?? (??) VALUES (?);";
    connection.query(queryString, [table, columns, data], 
      function(error, result) {
      if (error) {throw error;}
      cb(result);
    });
  },


  updateOne: function(table, id, column, newvalue, cb) {
    const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;";
    connection.query(queryString, [table, column, newvalue, id], 
      function(error, result) {
      if (error) {throw error;}
      cb(result);
    });
  }
};

module.exports = orm;