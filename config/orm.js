// Import the sql connection
var connection = require("./connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}


// ORM
var orm = {
    selectAll : function (tableName, functionToProcessResults) {
        var query = "SELECT * FROM " + tableName + ";";
        connection.query(query, function (err, results) {
            if (err) throw err;
            functionToProcessResults(results);
        });       
    },
    insertOne: function (tableName, cols, vals, functionToProcessResults) {
        var queryString = "INSERT INTO " + tableName;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        console.log(queryString);
        //INSERT INTO burgers (burger_name,devoured) VALUES("The Seamus with American and Grilled Onions",false);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            functionToProcessResults(result);
        });
    },
    // An example of objColVals would be {id: 6, devoured: false}
    updateOne: function (tableName, objColVals, condition, functionToProcessResults) {
        var queryString = "UPDATE " + tableName;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            functionToProcessResults(result);
        });
    }
}
module.exports = orm;