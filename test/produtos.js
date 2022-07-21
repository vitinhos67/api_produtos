const http = require('http')
const assert = require('assert')
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
        

        assert.equal(res.statusCode, 201)
        assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')     
        done()
    })

    
    })
})