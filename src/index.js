const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(str) {
  let result = [];
  let char = [];
  let res = '';
  for (let i = 0, k = 0; i < str.length; i = i + 10, k++) {
    char[k] = str.substr(i, 10);
    char[k] = char[k].substr(char[k].indexOf('1'));

    result[k] = '';

    for (let j = 0; j < char[k].length; j = j + 2) {
      let symbol = char[k].substr(j, 2);
      if (symbol == '10') {
        result[k] += '.';
      }
      if (symbol == '11') {
        result[k] += '-';
      }
      if (symbol == '*') {
        result[k] += ' ';
      }
    }

    for (key in MORSE_TABLE) {
      if(key == result[k])
      result[k] = MORSE_TABLE[key];
    }

  }
  return result.join('');
}

module.exports = {
  decode
}