const Calculator = require("../src/calculator.js"); // импортируем класс

describe("Calculator", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  //add
  test("add", () => {
    expect(calc.add(7, 10)).toBe(17); //positive
    expect(calc.add(7, -8)).toBe(-1); //negative
    expect(calc.add(0.75, 0.4)).toBe(1.15); //fractional
  });

  //subtraction
  test("subtraction", () => {
    expect(calc.subtraction(99, 9)).toBe(90); //positive
    expect(calc.subtraction(-19, 9)).toBe(-28); //negative
    expect(calc.subtraction(0.5, 0.4)).toBeCloseTo(0.1); //fractional
  });

  //multiply
  test("multiply", () => {
    expect(calc.multiply(10, 10)).toBe(100); //positive
    expect(calc.multiply(10, 0)).toBe(0); //0
    expect(calc.multiply(6, -5)).toBe(-30); //negative
    expect(calc.multiply(0.6, 0.5)).toBe(0.3); //fractional
    expect(calc.multiply(-0.6, -0.5)).toBe(0.3); //negative * neagative => positive
  });

  //divide
  test("divide", () => {
    expect(calc.divide(10, 10)).toBe(1); //positive
    expect(calc.divide(10, 4)).toBe(2.5); //fractional
    expect(calc.divide(25, -5)).toBe(-5); //negative
    expect(calc.divide(-30, -5)).toBe(6); //negative / neagative => positive
    expect(calc.divide(15, 0)).toBe(Infinity); //Infinity
  });

  //exponentiation
  test("exponentiation", () => {
    expect(calc.exponentiation(5)).toBe(25); //positive
    expect(calc.exponentiation(-4)).toBe(16); //negative
    expect(calc.exponentiation(0.3)).toBe(0.09); //fractional
    expect(calc.exponentiation(0)).toBe(0); //0
  });
});
