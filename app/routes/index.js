module.exports = function(app){
  
  app.get("/produtos", function(req, res) {
      var connection = app.infra.database;
      const produtosDAO =  new app.infra.ProdutosDAO(connection);
      
      connection.connect(function(err) {
        if (err) {
          return console.error('error: ' + err.message);
        }
        console.log('Connected to the MySQL server.');
      });
        
        produtosDAO.lista((err, results) =>{
            res.render("lista", {lista : results})
          });

    
    });

      app.get("/produtos/form", (req,res) => {
        res.render('form')
      })

      app.post('/produtos', function(req,res){
        const {titulo, descricao, preco} = req.body
        
        const produto = {
          titulo,
          descricao,
          preco
        }
        var connection = app.infra.database;
        const produtosDAO = new app.infra.ProdutosDAO(connection)

        produtosDAO.salva(produto, (err, results) => {
          if(err) {
            return res.status(401).json({
              err
            })
          }
        })
          res.redirect('/produtos')
      })


}
    
    
