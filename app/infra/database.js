const {resolve}  = require('path');

require('dotenv').config({
    path: resolve('.env')
});

const mysql = require('mysql');
  
function connectionDB() {
    
    
    return mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password : process.env.PASSWORD,
        database: process.env.DATABASE,
    });
    
}

//wrapper
module.exports = function (){
    return connectionDB()
}
