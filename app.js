"use strict";
/**
 * Modules import
 * @type {*}
 */
var express = require('express');
const router = express.Router();
var path = require("path");
var logger       = require( 'morgan');
var cookieParser = require( 'cookie-parser');
var bodyParser   = require( 'body-parser');
var http         = require( 'http');
var routeProducts  =  require( './routes/products');
var routeCart =  require( './routes/cart');
var routeIndex    =  require( './routes/index');
var db = require("./lib/db_connection");
var app = express();
app.use(express.static(path.join(__dirname ,"public")));
/**
 * Server setup
 */
const server = http.createServer(app);
let port = process.env.PORT || 3001;


/**
 * middleware init
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine","twig");
app.use(express.static('views'));

/**
 * routes
 */
// app.get('/', routeIndex);
app.use('/products', routeProducts);
app.use('/cart', routeCart);
app.get('/' , function (req , res) {
    res.redirect("products/list")
} )
app.close = function() {
    server.close();
}

app.listen(() => {
    server.listen(port, () => {
        console.log("Express server listening on port " + port + " in " + app.settings.env + " mode");
    });
});

module.exports = app;