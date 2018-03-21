var express = require('express');
var isAuth = require('../lib/middleware');
var db = require("../lib/db_connection");

const router = express.Router();

router.get('/view/:id', function (req, res) {
    var id = req.params.id;

    db.db_connection("SELECT * FROM products WHERE id = " + id, function (err, row) {
        console.log(row);
        res.render('view', {product: row});
    })
});

router.get('/list', function (req ,  res) {

    var theQUery = "SELECT * FROM products";


    db.db_connectionAll("SELECT * FROM products", function (err, rows) {
        res.render('list', {products: rows});
    })
})

module.exports = router;