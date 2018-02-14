var orm = require("./../config/orm.js");

var burgers = {
    all: function (functionToProcessResults) {
        orm.all("burgers", function(res){
            functionToProcessResults(res);
        })
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, functionToProcessResults) {
        orm.create("burgers", cols, vals, function (res) {
            functionToProcessResults(res);
        });
    }
}


module.exports = burgers;