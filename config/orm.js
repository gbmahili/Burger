// Import the sql connection
var connection = require("./connection.js");

// ORM
var orm = {
    all : function (tableName, functionToProcessResults) {
        var query = "SELECT * FROM " + tableName + ";";
        connection.query(query, function (err, results) {
            if (err) throw err;
            functionToProcessResults(results);
        });       
    }
}
module.exports = orm;