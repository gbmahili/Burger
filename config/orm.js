// Import the sql connection
var connection = require("./connection.js");

// ORM
var orm = {
    all : function (tableName, cb) {
        var query = "SELECT * FROM " + tableName + ";";
        connection.query(query, function (err, results) {
            if (err) throw err;
            //console.log(results);
            cb(results);
        });       
    }
}
module.exports = orm;