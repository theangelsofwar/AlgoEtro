const CONVERSION = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I',
}

var intToRoman = function(val) {
  let result = ''
  while(val > 0) {
    let foo=Object.keys((CONVERESION).reverse().find(digit => val >=parseInt(digit));
    result += CONVERSION[foo]
    val -= foo
  }
  return result
};