var orm = require("./../config/orm.js");

var burgers = {
    selectAll : function(tableName) {
        orm.selectAll("burgers")
    }
}


module.exports = burgers;