var db = require('../db/index.js');

let insertData = function( value ) {
    let _sql = "select * from t_user;"
    return db.query( _sql, value )
}

module.exports = {
    insertData
}