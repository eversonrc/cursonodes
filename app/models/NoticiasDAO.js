function NoticiasDAO(connection){
    this._connection = connection;

}

module.exports = function(){
    NoticiasDAO.prototype.getNoticias = function(connection, callback){
        this._connection.query('select * from noticias', callback);
        
    }
   
    NoticiasDAO.prototype.getNoticia = function(connection,callback){
        this._connection.query('select * from noticias where id_noticia = 1',callback);
    }

    NoticiasDAO.prototype.salvarNoticia = function(noticia,connection,callback){
        this._connection.query('insert into noticias set ?',noticia,callback) 
    }
    return NoticiasDAO;
}