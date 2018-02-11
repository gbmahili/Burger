// Import the sql connection
var connection = require("./connection.js");

// ORM
var orm = {
    selectAll : function (tableName) {
        var query = "SELECT * FROM ??";
        connection.query(query,[tableName, function (err, results) {
            console.log(results);
        }])
    }
}

module.exports = orm;