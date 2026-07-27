const Calculator = require("../src/calculator.js"); // импортируем класс

describe("Calculator: add", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test.each([
    ["two positive numbers", [7, 10], 17],
    ["a positive and a negative number", [7, -8], -1],
    ["two negative numbers", [-7, -8], -15],
    ["a number and zero", [7, 0], 7],
    ["three numbers", [1, 2, 3], 6],
    ["a single number", [5], 5],
    ["no arguments", [], 0],
  ])("Addition of %s gives the correct sum", (_name, args, expected) => {
    expect(calc.add(...args)).toBe(expected);
  });

  test.each([
    [[0.75, 0.4], 1.15],
    [[0.1, 0.2], 0.3],
    [[-0.5, 0.4], -0.1],
  ])("Addition of fractional numbers %p is close to %p", (args, expected) => {
    expect(calc.add(...args)).toBeCloseTo(expected);
  });

  describe("negative cases", () => {
    test.each([
      ["a string", ["7", 10]],
      ["null", [null, 10]],
      ["undefined", [undefined, 10]],
      ["NaN", [NaN, 10]],
      ["Infinity", [Infinity, 10]],
    ])("Addition with %s as an argument throws a TypeError", (_name, args) => {
      expect(() => calc.add(...args)).toThrow(TypeError);
    });
  });
});
