module.exports = function(app) {

    app.get("/promocoes/form" , function(req,res) {
        const connection = app.infra.database;
        const produtosDAO = new app.infra.ProdutosDAO(connection);
        
        produtosDAO.lista((err, results) => {
            res.render("promocoes/form", { lista: results })
        })
    })    


    app.post("/promocoes", (req,res) => {

        const promocao = req.body;
        console.log(promocao)
        res.redirect("/promocoes/form");
    })

}