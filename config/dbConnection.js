var mysql = require('mysql');
connMySql = function(){
    return mysql.createConnection({
        host : 'localhost',
        port : '3306',
        user : 'root',
        password : '123456',
        database : 'portal_noticias'

    })
};
module.exports= function(){
   return connMySql;
};
