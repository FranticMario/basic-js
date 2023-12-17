const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
const dateSample = N => !parseFloat(N) || typeof N !== "string" || N > 15 || N <= 0 ? false : Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(N)) / (Math.LN2 / HALF_LIFE_PERIOD));

module.exports = {
  dateSample
};
