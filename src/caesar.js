// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift < -25 || shift > 25 || shift === 0) return false;
    if(!encode) shift *= -1
    // change input .toLowerCase, split letters, use charCode (ascii table) to convert letters to numbers,
    // parseInt on numbers if need to if not right datatype
    // loop from a to z and z to a
    return input.toLowerCase().split('').map((letter) => {
      if (letter.charCodeAt(0) < 97 || letter.charCodeAt(0) > 122) return letter;
      let num = letter.charCodeAt(0) + parseInt(shift);
     // loop alphabet if at end or beginning depending on encode/decode
      if (num >= 122) {
        num = 96 + (num - 122)

      } if (num <= 96) {
         num = (num + 122) -96
      }

      return String.fromCharCode(num);
    }).join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
