var express = require('express');
var isAuth = require('../lib/middleware');
var db = require("../lib/db_connection");
const router = express.Router();


router.get('/:id', function (req, res) {
    var id = req.params.id;

    db.db_connection("SELECT * FROM products WHERE id = " + id, function (err, row) {

        //console.log(err);
        // cart view add & test err/success
        let state = true;
        let message;
        let product = false;
        if (err || (row == null)) {
            state = false;
            errorMessage = err ? ", \n" + err.message : ""
            message = "Error, somethin gone wrong with the product : " + id + "  \n " +
                "" + errorMessage;
        } else {
            message = "Product with the id:" + id + " successfully bought";
            product = row;
        }
        res.render('cart', {status: state, message: message, product: product}); // user friendly response

        //res.json({success: true, text: "Product " + id + " successfully bought"})
    });

});


module.exports = router;