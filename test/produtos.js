
const express = require('../app/config/express')
const app = express()
const request = require('supertest')


describe('GET /produtos', function() {

this.beforeEach((done) => {
    const connection = app.infra.database;

    connection.query('DELETE FROM livros', (err, results) => {
        if(!err) {
            done();
        }
    })
})


it('#listagem json', function(done){
        
        request(app)
        .get('/produtos') //ROUTE IN APPLICATION
        .set('Accept', "application/json") // SET CONFIG IN YOUR REQUEST
        .expect('Content-Type', /json/) // EXPECTS TO RECEIVE 
        .expect(201, done) // EXPECTS TO RECEIVE TOO
})

it('#criar produto', function(done){
        
    request(app)
    .post('/produtos')
    .send({titulo: 'MY FRIEND1', descricao: 'Uma vaca', preco: '20'})
    .expect(302, done)
})

})

