function ProdutosDAO(connection){
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback) {
    this._connection.query("SELECT * FROM livros", callback)
}

ProdutosDAO.prototype.salva = function(titulo,descricao, preco, callback) {
    this._connection.query(`insert into livros(titulo, descricao, preco)
        values ('${titulo}', '$${descricao}', ${preco});`, 
        callback)
}



module.exports = () => {
    return ProdutosDAO
}