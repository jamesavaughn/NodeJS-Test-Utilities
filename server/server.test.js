const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hello world response', (done) => {
    request(app) //call app in request function
    .get('/')
    .expect(404)
    .expect((res) => {
        expect(res.body).toInclude({
            error: 'Page not found.'
        });
    })
    .end(done); //will stop the test
});

//Make new test
//assert 200
//assert that you exist in user array

