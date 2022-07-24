const http = require('http')

const options = {
    hostname: "localhost",
    port: 3000,
    path: '/produtos',
    method: 'POST',
    headers: {
        'Accept': "application/json",
        'Content-type':'application/json'
    }
}
const client = http.request(options, (res) => {
    console.log(res.statusCode);
    
    res.on('data', function(body){
        console.log(`Body ${body}`)
    })
})

const produto = {
    titulo: "oioi",
    descricao: "um pequeno principew",
    preco: '50'
}

client.end(JSON.stringify(produto))