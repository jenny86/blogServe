var db = require('../db/index.js');

// 注册用户
let insertData = function( value ) {
    let _sql = "insert into t_user (name,password) values ('"+value.username+"','"+value.password+"');"
    return db.query( _sql, value )
}
// 登录
let login = function( value ) {
    let _sql = "select * from t_user where name='"+value.username+"' and password='"+value.password+"';"
    return db.query( _sql, value )
}
module.exports = {
    insertData,
    login
}