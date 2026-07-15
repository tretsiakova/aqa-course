const Calculator = require("../src/calculator.js"); // импортируем класс

describe("Calculator: multiply", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test.each([
    ["two positive numbers", [10, 10], 100],
    ["a number and zero", [10, 0], 0],
    ["a positive and a negative number", [6, -5], -30],
    ["two negative numbers", [-6, -5], 30],
    ["three numbers", [2, 3, 4], 24],
    ["a single number", [5], 5],
    ["no arguments", [], 1],
  ])("Multiplication of %s gives the correct product", (_name, args, expected) => {
    expect(calc.multiply(...args)).toBe(expected);
  });

  test.each([
    [[0.6, 0.5], 0.3],
    [[-0.6, -0.5], 0.3],
    [[0.1, 0.2], 0.02],
  ])("Multiplication of fractional numbers %p is close to %p", (args, expected) => {
    expect(calc.multiply(...args)).toBeCloseTo(expected);
  });

  describe("negative cases", () => {
    test.each([
      ["a string", ["10", 10]],
      ["null", [null, 10]],
      ["undefined", [undefined, 10]],
      ["NaN", [NaN, 10]],
      ["Infinity", [Infinity, 10]],
    ])("Multiplication with %s as an argument throws a TypeError", (_name, args) => {
      expect(() => calc.multiply(...args)).toThrow(TypeError);
    });
  });
});
