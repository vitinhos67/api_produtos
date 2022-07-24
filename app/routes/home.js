module.exports = function (app) {

    app.get('/', (req,res) => {
        
        const connection = app.infra.database
        const produtos = new app.infra.ProdutosDAO(connection)

          produtos.lista((err,result) => {
            
            if(err) {
              console.log(err)
              return;
            }

            res.render('home/index', { livros: result})
          })
    })

}