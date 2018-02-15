// Require needed files: express, method-override and body-parser
var express = require("express");
var bodyParser = require("body-parser");
//var methodOverrid = require("method-override");

var PORT = process.env.PORT || 3000;

var app = express();

// All static files will be served from the public folder, such as css and images:
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Use bodyParser for data received from the client
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});