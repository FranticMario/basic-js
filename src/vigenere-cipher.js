const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(bool = true) {
    this.type = bool;
  }

  crypt(str, key, type) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    const arr = [];
    const newStr = str.toUpperCase();
    key = key.repeat(Math.ceil(str.length / key.length)).toUpperCase();
    for (let i = 0, j = 0; i < newStr.length; i++, j++) {
      if (newStr[i].charCodeAt() == 32) j--;
      if (newStr[i].charCodeAt() < 65 || newStr[i].charCodeAt() > 90) arr.push(newStr[i])
      else {
        let index = newStr.charCodeAt(i) - 65;
        let shift = key.charCodeAt(j) - 65;
        arr.push(String.fromCharCode(65 + (type ? index + shift : index - shift + 26) % 26))
      }
    }
    return this.type ? arr.join('') : arr.reverse().join('');
  }

  encrypt(str, key) {
    return this.crypt(str, key, true);
  }

  decrypt(str, key) {
    return this.crypt(str, key, false);
  }
}
module.exports = {
  VigenereCipheringMachine
};
