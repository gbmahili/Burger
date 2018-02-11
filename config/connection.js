var mysql = require("mysql");

var connection = mysql.createConnection({
    host : "127.0.0.1",
    port : "3306",
    user: "root",
    password: "Kambale1937",
    database: 'top_songsDB'
});

connection.connect();

connection.query('SELECT * FROM top5000', function (error, results, fields) {
    if (error) throw error;
    console.log(results.length);
});

connection.end();