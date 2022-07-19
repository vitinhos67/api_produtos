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

      app.post('/produtos/salva', function(req,res){
        const {titulo, descricao, preco} = req.body
        
        var connection = app.infra.database;
        const produtosDAO = new app.infra.ProdutosDAO(connection)

        const log = produtosDAO.salva(titulo, descricao, preco, (err, results) => {
          if(err) {
            return res.status(401).json({
              err
            })
          }

          res.status(201).json({
            status: "Sucesso",
            produto: {
              titulo, descricao, preco
            }
          })
        })


      })


}
    
    
