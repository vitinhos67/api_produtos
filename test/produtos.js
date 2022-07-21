const http = require('http')

describe('ProdutosController', function() {
    it('#listagem json', function(done){
        
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/produtos',
        headers: {
            'Accept': 'application/json'
        }
    }
    
    http.get(options, (res) => {
        
        if(res.statusCode > 200 || res.statusCode < 299) {
            console.log(`statusCode: ${res.statusCode}`)
        }
        
        if(res.headers['content-type'] == 'application/json; charset=utf-8'){
            console.log(`Content-Type: ${res.headers['content-type']}`)
        }
        
        done()
    })

    
    })
})