var orm = require("./../config/orm.js");

var burgers = {
    all: function (functionToProcessResults) {
        orm.all("burgers", function(res){
            functionToProcessResults(res);
        })
    }
}


module.exports = burgers;