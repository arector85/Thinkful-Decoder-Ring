// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    if(Array.from(new Set(alphabet)).length !== 26) return false;
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let abcEncode = {};
    let decode = {};
    let result = '';
    alphabet = alphabet.split('');
    input = input.toLowerCase();
    //creating data for encode and decode with objects
    abc.split('').forEach((letter, index) => {
      abcEncode[letter] = alphabet[index];
      decode[alphabet[index]] = letter;
    });
    //setting up decode if encode !== true
    if (!encode) abcEncode = decode;

    //matching input with data structures to encode or decode input
    input.split('').forEach(input => {
      result += input === " " ? " " : abcEncode[input];
    });

    return result;

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
