const expect = require('expect');

const utils = require('./utils');


it('should add two numbers', () => {
    var res = utils.add(10, 30);
    expect(res).toBe(40).toBeA('number'); //calls to expect can be chain tests together 

});

it('should square a number', () => {
    var res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
});

// should verify first and last names are set
//assert it includes firstName and lastName with proper values
it('should set firstName and lastName', () => {
    var user = {location: 'SF', age: 40};
    var res = utils.setName(user, 'James Vaughn');
    expect(res).toInclude({
        firstName: 'James',
        lastName: 'Vaughn'
    });
});

it('should async add two numbers', (done) => { //done argument tells Mocha it's a async test
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done(); //call done method
    });
});

it('should async square a numbers', (done) => { //done argument tells Mocha it's a async test
utils.asyncSquare(4, (square) => {
    expect(square).toBe(16).toBeA('number');
    done(); //call done method
});
});
//
// it('should square a number', () => {
//     //var res = utils.square(3);
//     //expect(12).toNotBe(12);
//     //toBe works with numbers and string but not objects
//     //objects are compared using === so must use toEqual
//     //expect({name: 'james'}).toEqual({name: 'james'}); works with objects
//     // expect([2,3,4]).toInclude(2); works with arrays and lists
//     // expect([2,3,4]).toExclude(2); works with arrays and lists
    
//     expect({
//         name: 'James',
//         age: 40,
//         locatino: 'SF'
//     }).toInclude({
//         age: 40
//     })
// });