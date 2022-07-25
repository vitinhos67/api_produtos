const express = require('express');
const expressValidator = require('express-validator');
const load = require('express-load');
const middleware_error_404 = require('../middleware/err/error404')
const middleware_error_500 = require('../middleware/err/error500')
module.exports = function () {
   const app = express(); 
   
   app.use(express.static('./app/public'));
   app.set('view engine', 'ejs');
    app.set('views','./app/views');
    app.use(express.json());
    app.use(express.urlencoded({extended:true}))
    app.use(expressValidator())
    
    load('routes', {cwd: "app"})
    .then('infra')
    .into(app)
    app.use(middleware_error_404)
    
    
    return app;
}