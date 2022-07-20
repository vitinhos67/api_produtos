const express = require('express');
const expressValidator = require('express-validator');
const load = require('express-load');
module.exports = function () {
   const app = express(); 
    
   app.set('view engine', 'ejs');
    app.set('views','./app/views');
    app.use(express.json());
    app.use(express.urlencoded({extended:true}))
    app.use(expressValidator())
    


    load('routes', {cwd: "app"})
    .then('infra')
    .into(app)

    return app;
}