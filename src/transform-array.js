const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */


function transform(arr) {
  /* let result;
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] == '--discard-next' &&
        arr[i+1] != '--discard-prev' &&
        arr[i+1] != '--double-next' &&
        arr[i+1] != '--double-prev') {
      if ((i + 1) <= arr.length - 1) {
        result = arr.slice(i, 2);
        i--;
        console.log(arr);
      } else {
        result = arr.slice(i, 1);
        console.log(arr);
      }
    } else if (arr[i] == '--discard-prev') {
      if (i > 0) {
        result = arr.slice(i-1, 2);
        i--;
        console.log(arr);
      } else {
        result = arr.slice(i, 1);
        console.log(arr);
      }
    } else if (arr[i] == '--double-next' &&
               arr[i+1] != '--discard-prev' &&
               arr[i+1] != '--discard-next' &&
               arr[i+1] != '--double-prev') {
      if ((i + 1) <= arr.length - 1) {
        result = arr.slice(i, 1);
        result = arr.slice(i, 0, arr[i]);
        i--;
        console.log(arr);
      } else {
        result = arr.slice(i, 1);
        console.log(arr);
      }
    } else if (arr[i] == '--double-prev') {
      if (i > 0) {
        result = arr.slice(i, 1);
        result = arr.slice(i-1, 0, arr[i]);
        i--;
        console.log(arr);
      } else {
        result = arr.slice(i, 1);
        console.log(arr);
      }
    }
  }
  return arr; */
}




module.exports = {
  transform
};
