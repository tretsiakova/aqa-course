const Calculator = require("../src/calculator.js"); // импортируем класс

describe("Calculator: subtraction", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test.each([
    ["two positive numbers", 99, 9, 90],
    ["a negative and a positive number", -19, 9, -28],
    ["a smaller number minus a bigger one", 5, 9, -4],
    ["a number and zero", 42, 0, 42],
    ["two equal numbers", 7, 7, 0],
  ])("Subtraction of %s gives the correct difference", (_name, minuend, subtrahend, expected) => {
    expect(calc.subtraction(minuend, subtrahend)).toBe(expected);
  });

  test.each([
    [0.5, 0.4, 0.1],
    [1.15, 0.75, 0.4],
  ])("Subtraction of fractional numbers %p - %p is close to %p", (minuend, subtrahend, expected) => {
    expect(calc.subtraction(minuend, subtrahend)).toBeCloseTo(expected);
  });

  describe("negative cases", () => {
    test.each([
      ["a string", "99", 9],
      ["null", null, 9],
      ["a missing argument", 99, undefined],
      ["NaN", NaN, 9],
      ["Infinity", Infinity, 9],
    ])("Subtraction with %s as an argument throws a TypeError", (_name, minuend, subtrahend) => {
      expect(() => calc.subtraction(minuend, subtrahend)).toThrow(TypeError);
    });
  });
});
