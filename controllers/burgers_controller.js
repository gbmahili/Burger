// Require needed files
var express = require("express");
var burger = require("./../models/burgers.js");

var router = function(app){
    app.get("/", function (req, res) {
        res.json({data: results});
    })
}

module.exports = router;