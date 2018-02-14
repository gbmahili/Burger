var orm = require("./../config/orm.js");

var burgers = {
    selectAll: function (functionToProcessResults) {
        orm.selectAll("burgers", function(res){
            functionToProcessResults(res);
        })
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals, functionToProcessResults) {
        orm.insertOne("burgers", cols, vals, function (res) {
            functionToProcessResults(res);
        });
    },
    updateOne: function (objColVals, condition, functionToProcessResults) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            functionToProcessResults(res);
        });
    }
}


module.exports = burgers;