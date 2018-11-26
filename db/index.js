var mysql = require('mysql');
let data;
let config = {
    host     : 'localhost',
    user     : 'root',
    password : '123',
    database : 'blog',
};
var pool  = mysql.createPool(config);
// let connection = mysql.createConnection(config);
// connection.query('select * from t_user;', function(err, rows) {
//     data = rows[0]
// });

let query = function( sql, values ) {

    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject( err )
            } else {
                connection.query(sql, values, ( err, rows) => {
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    })

}

module.exports = {
    query
}


