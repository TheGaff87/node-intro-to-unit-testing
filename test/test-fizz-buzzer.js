// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
// test the normal case
it('should display fizz/buzz/fizzbuzz for appropriate inputs', function() {
    // range of normal inputs
    const normalCases = [
      {a: 30, expected: "fizz-buzz"},
      {a: 10, expected: "buzz"},
      {a: 6, expected: "fizz"},
      {a: 7, expected: 7}
    ];
    // for each input, should get expected answers
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if arg not a number', function() {
    // range of bad inputs
    const badInputs = ["false", "3", "five"];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});