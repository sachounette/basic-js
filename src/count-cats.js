const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

  function countCats(matrix) {
  let sum = 0;
for(let i = 0; i < matrix.length; i++) {
  for(let k = 0; k < matrix[i].length; k++) {
    //throw new NotImplementedError('Not implemented');
    if (matrix[i][k]!= null && typeof matrix[i][k] === "string" && matrix[i][k].length == 2 && matrix[i][k].includes("^^")) {
      sum = sum + 1;
    }
} 

}
return sum;
}


module.exports = {
  countCats
};
