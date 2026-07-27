/**
 * Throws a TypeError if any argument is not a finite number.
 * @param {...*} args values to validate
 */
function validateNumbers(...args) {
  for (const arg of args) {
    if (typeof arg !== "number" || !Number.isFinite(arg)) {
      throw new TypeError(`Expected a finite number, but got: ${String(arg)}`);
    }
  }
}

/**
 * A class containing methods for basic arithmetic operations.
 * @class Calculator
 */
class Calculator {
  /**
   * @param {...Number} theArgs numbers for summing
   * @return {Number} sum of numbers (0 if called without arguments)
   * @memberof Calculator
   */
  add(...theArgs) {
    validateNumbers(...theArgs);
    return theArgs.reduce((sum, n) => sum + n, 0);
  }

  /**
   * @param {...Number} theArgs numbers for multiplication
   * @return {Number} product of numbers (1 if called without arguments)
   * @memberof Calculator
   */
  multiply(...theArgs) {
    validateNumbers(...theArgs);
    return theArgs.reduce((product, n) => product * n, 1);
  }

  /**
   * @param {Number} minuend number to subtract from
   * @param {Number} subtrahend number being subtracted
   * @return {Number} difference
   * @memberof Calculator
   */
  subtraction(minuend, subtrahend) {
    validateNumbers(minuend, subtrahend);
    return minuend - subtrahend;
  }

  /**
   * @param {Number} dividend number being divided
   * @param {Number} divider number to divide by, must not be 0
   * @return {Number} quotient
   * @memberof Calculator
   */
  divide(dividend, divider) {
    validateNumbers(dividend, divider);
    if (divider === 0) {
      throw new RangeError("Division by zero is not allowed");
    }
    return dividend / divider;
  }

  /**
   * @param {Number} number number to square
   * @return {Number} the number multiplied by itself
   * @memberof Calculator
   */
  exponentiation(number) {
    validateNumbers(number);
    return number * number;
  }
}

module.exports = Calculator;
