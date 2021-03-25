// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract, multiply, divide, toNumber} from '../calculator.js';

const test = QUnit.test;

test('add', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 11;
    const y = 2;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract', (expect) => {
    const x = 11;
    const y = 2;
    const expected = 9;

    const actual = subtract(x, y);
    expect.equal(actual, expected);
});

test('multiply', (expect) => {
    const x = 11;
    const y = 2;
    const expected = 22;

    const actual = multiply(x, y);
    expect.equal(actual, expected);
});

test('divide', (expect) => {
    const x = 11;
    const y = 2;
    const expected = 5.5;

    const actual = divide(x, y);
    expect.equal(actual, expected);
});

test('0 divided by 0 returns 0', (expect) => {
    const x = 0;
    const y = 1;
    const expected = 0;

    const actual = divide(x, y);
    expect.equal(actual, expected);
});

test('toNumber', (expect) => {
    const expected = 7;
    const input = document.createElement('input');
    input.value = expected;
    const actual = toNumber(input);
    expect.equal(actual, expected);
});

test('Empty String Returns 0', (expect) => {
    const expected = 0;
    const input = document.createElement('input');
    input.value = expected;
    const actual = toNumber("");
    expect.equal(actual, expected);
});