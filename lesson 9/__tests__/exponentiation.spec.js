const Calculator = require("../src/calculator.js"); // импортируем класс

describe("Calculator: exponentiation", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test.each([
    ["a positive number", 5, 25],
    ["a negative number", -4, 16],
    ["zero", 0, 0],
    ["one", 1, 1],
  ])("Exponentiation of %s gives the correct square", (_name, number, expected) => {
    expect(calc.exponentiation(number)).toBe(expected);
  });

  test.each([
    [0.3, 0.09],
    [-0.5, 0.25],
  ])("Exponentiation of fractional number %p is close to %p", (number, expected) => {
    expect(calc.exponentiation(number)).toBeCloseTo(expected);
  });

  describe("negative cases", () => {
    test.each([
      ["a string", "5"],
      ["null", null],
      ["a missing argument", undefined],
      ["NaN", NaN],
      ["Infinity", Infinity],
    ])("Exponentiation with %s as an argument throws a TypeError", (_name, number) => {
      expect(() => calc.exponentiation(number)).toThrow(TypeError);
    });
  });
});
