module.exports = function(application){
    application.get('/formulario_inclusao_noticia',function(req,res){
        res.render('admin/form_add_noticia');
    });

    application.post('/noticias/salvar',function(req,res){
        var noticia  = req.body;
        req.assert('titulo','Titulo e Obrigatorio').notEmpty();
        req.assert('resumo','Resumo e Obrigatorio').notEmpty();
        req.assert('resumo','Resumo deve ter entre 10 e 100 caracteres').len(10,100);
        req.assert('autor','Autor e Obrigatorio').notEmpty();
        req.assert('data_noticias','Data e Obrigatorio').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia','Noticia e Obrigatoria').notEmpty();
        
        var erros =  res.validationErros();

        if (erros){
            res.render("admin/form_add_noticias");
            return;
        }

        var connection = application.config.dbConnection();
        var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

        NoticiasDAO.salvarNoticia(noticia,function(error,result){
            res.redirect('/noticias');
          
        });
    });
};