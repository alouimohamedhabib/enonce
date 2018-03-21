/**
 * Created by mohamed on 18/03/2018.
 */
/**
 * Handle DB connection
 */

var sqlite3 = require('sqlite3').verbose();

module.exports.db_connection = function (query, callback) {

    var db = new sqlite3.Database('database.sqlite');
    db.get(query, function (err, row) {
        console.log(err)
        callback(err, row)
    });

    db.close();
};

module.exports.db_connectionAll = function (query, callback) {

    var db = new sqlite3.Database('database.sqlite');
    db.all(query, function (err, row) {
        console.log(err)
        callback(err, row)
    });

    db.close();
};