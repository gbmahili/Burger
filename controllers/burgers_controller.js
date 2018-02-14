// Require needed files
var express = require("express");
var burger = require("./../models/burger.js");
// Create the`router` for the app, and export the`router` at the end of your file.
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data){
        var burgerData = {
            burger : data
        };
        console.log(burgerData);
        res.render("index", burgerData);
    });
});

router.post("/", function (req, res) {
    var current_timestamp = "current_timestamp()";
    burger.create(["burger_name", "devoured"], [req.body.burger_name, false], function (result) {
        //INSERT INTO burgers (burger_name,devoured) VALUES("The Seamus with American and Grilled Onions",false);       
        res.render("index", result);
    });
    //console.log(req.body);
});

module.exports = router;