var express = require('express');
var isAuth = require('../lib/middleware');
var db = require("../lib/db_connection");

const router = express.Router();
var state = true;
var message;
var product = false;

router.get('/view/:id', function (req, res) {
    const id = req.params.id; // will not be change during current exec

    db.db_connection("SELECT * FROM products WHERE id = " + id, function (err, row) {
        // console.log(row);

        if (err || (row == null)) {
            state = false;
            errorMessage = err ? ", \n" + err.message : ""
            message = "Error, somethin gone wrong with the product : " + id + "  \n " +
                "" + errorMessage;
        } else {
            message = "";
            product = row;
        }
        res.render('view', {status: state, message: message, product: product});
    })
});

router.get('/list', function (req, res) {

    var theQUery = "SELECT * FROM products";


    db.db_connectionAll("SELECT * FROM products", function (err, rows) {
        if (err || (rows == null)) {
            state = false;
            errorMessage = err ? ", \n" + err.message : ""
            message = "Error, somethin gone wrong with the product : " + id + "  \n " +
                "" + errorMessage;
        } else {
            message = "";
            product = rows;
        }
        res.render('list', {products: rows, state: false , message: message});
    })
})

module.exports = router;