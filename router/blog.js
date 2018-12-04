var db = require('../db/index.js');

let hotList = function( value ) {
    let _sql = "select * from t_blog;"
    return db.query( _sql, value )
}
let myArtical = function( value ) {
    let _sql = "select * from t_blog;"
    return db.query( _sql, value )
}
module.exports = {
    hotList,
    myArtical
}