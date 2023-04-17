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
function countCats(arrays) {
  let number = 0;
  arrays.forEach(arr => {
    arr.forEach(elem => {
      if (elem == '^^') {
        number += 1;
      }
    });
  });
  return number;
}

module.exports = {
  countCats
};
