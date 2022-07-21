
const express = require('../app/config/express')
const app = express()
const request = require('supertest')


describe('GET /produtos', function() {
    it('#listagem json', function(done){
        
        request(app)
        .get('/produtos') //ROUTE IN APPLICATION
        .set('Accept', "application/json") // SET CONFIG IN YOUR REQUEST
        .expect('Content-Type', /json/) // EXPECTS TO RECEIVE 
        .expect(201, done) // EXPECTS TO RECEIVE TOO
})
})