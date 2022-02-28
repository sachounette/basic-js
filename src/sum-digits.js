const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n)  {
  let helpingN = n;
  let sum = 0;
  while(n > 0) {
  helpingN = Math.floor(n % 10);
  sum = sum + helpingN;
  n = Math.floor(n / 10);
  }
  let incaseofDigit = 0;
  let sum2 = 0;
  if (sum < 10) {return sum;}
  

  else if(sum >= 10) {
    incaseofDigit = Math.floor(sum % 10);
  sum2 = sum2 + incaseofDigit;
  sum = Math.floor(sum/10); sum2 = sum2 + sum;
  return sum2;

  }
  
}

module.exports = {
  getSumOfDigits
};
