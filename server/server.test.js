const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
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
    });

    describe('GET /users', () => {
        it('should return user object', (done) => {
            request(app) //call app in request function
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'Jen',
                    age: 40
                });
            })
            .end(done); //will stop the test
        });
    } );
});


