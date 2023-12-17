const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("");
  let result = "";
  
  for (let i = 0; i < arr.length; i++) {
    let counter = 1; 

   
    while (arr[i] === arr[i + 1]) {
      counter++;
      i++;
    }

    result += (counter > 1) ? counter + arr[i] : arr[i];
  }

  return result;
}
module.exports = {
  encodeLine
};
