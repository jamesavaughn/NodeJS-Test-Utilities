const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

// HTTP GET ROUTE /users [array of objects]
// USERS Name and Age Property

app.get('/users', (req, res) => {
    res.send([{
        name: "Mike",
        age: 25
    }, {
        name: "Andrew",
        age: 30
    }, {
        naem: 'Jen',
        age = 40
    }]);
});

app.listen(3000);

module.exports.app = app; //export app to use in other files
