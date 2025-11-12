const Calculator = require('../src/calculator.js'); // импортируем класс

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

   test('add: 7 + 10 = 17', () => {
    expect(calc.add(7, 10)).toBe(17);
  });

  test('subtraction: 99 - 9 = 90', () => {
    expect(calc.subtraction(99, 9)).toBe(90);
  });

  test('multiply: 10 * 10 = 100', () => {
    expect(calc.multiply(10, 10)).toBe(100);
  });

  test('divide: 10 / 10 = 1', () => {
    expect(calc.divide(10, 10)).toBe(1);
  });

  test('exponentiation: 5 * 5 = 25', () => {
    expect(calc.exponentiation(5)).toBe(25);
  });

})