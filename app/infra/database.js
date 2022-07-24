const {resolve}  = require('path');

require('dotenv').config({
    path: resolve('.env')
});

const mysql = require('mysql');
  
function connectionDB() {

    if(!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            password : process.env.PASSWORD,
            database: process.env.DATABASE,
        });
    }
    
    if(process.env.NODE_ENV == 'development')
    return mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password : process.env.PASSWORD,
        database: process.env.DATABASE_DEVELOPMENT,
    });
    
}

//wrapper
module.exports = function (){
    return connectionDB()
}
