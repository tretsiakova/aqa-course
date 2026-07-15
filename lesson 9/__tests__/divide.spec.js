const Calculator = require("../src/calculator.js"); // импортируем класс

describe("Calculator: divide", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test.each([
    ["two equal positive numbers", 10, 10, 1],
    ["a positive and a negative number", 25, -5, -5],
    ["two negative numbers", -30, -5, 6],
    ["zero by a positive number", 0, 5, 0],
    ["a bigger number by a smaller one", 10, 4, 2.5],
  ])("Division of %s gives the correct quotient", (_name, dividend, divider, expected) => {
    expect(calc.divide(dividend, divider)).toBe(expected);
  });

  test.each([
    [0.3, 0.1, 3],
    [1, 3, 0.3333333333],
  ])("Division of fractional numbers %p / %p is close to %p", (dividend, divider, expected) => {
    expect(calc.divide(dividend, divider)).toBeCloseTo(expected);
  });

  describe("negative cases", () => {
    test.each([
      ["a positive number", 15],
      ["a negative number", -15],
      ["zero", 0],
    ])("Division of %s by zero throws a RangeError", (_name, dividend) => {
      expect(() => calc.divide(dividend, 0)).toThrow(RangeError);
    });

    test.each([
      ["a string", "10", 2],
      ["null", null, 2],
      ["a missing argument", 10, undefined],
      ["NaN", NaN, 2],
      ["Infinity", 10, Infinity],
    ])("Division with %s as an argument throws a TypeError", (_name, dividend, divider) => {
      expect(() => calc.divide(dividend, divider)).toThrow(TypeError);
    });
  });
});
