# JS Test Framework Using Mocha #

## Description ##

Sample node test cases using assertion modules.

## Functionality ##

## Run instructions ##
` $ npm run test-watch `


## Key Concepts ## 

* assertion packages (mjackson / expect)
* node test cases
* Mocha package

## Details ##

1) Install: `npm i mocha --start-dev`
2) Create test.js file (test.js) files are for test cases
3) Modify package.json `    "test": "mocha **/*.test.js"    `
4) Call it(); method by Mocha `it('should add two numbers', ()=> {} );
5) Run test ` $ npm test `
6) Write test case

`it('should square a number', () => {`
    `var res = utils.square(3);`
    `if (res != 9) {`
     `   throw new Error(`expected 9, but got ${res}`); `
    `}`
`});`

7) Set up auto testing 

`nodemon --exec 'npm test' 

Add `"test-watch": "nodemon --exec 'npm test'"` to the package.json file

`$ npm run test-watch`

8) Install Expect to dev environment
`$ npm install expect@1.20.2 --save-dev`

** it(); **
` it('should ...', () => {`
    `var res = ...;`
    `expect(res).toBe(...); `

9) Add done() argument for async testing
** Async Test Needs 'Done' argument **

`it('should ...', (done) => { //done argument tells Mocha it's a async test`
 `   utils.asyncAdd(4, 3, (sum) => {`
  `      expect(sum).toBe(7).toBeA('number');`
   `     done(); //call done method`

10) `supertest` package for testing testing express apps
