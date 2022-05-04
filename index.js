function stringLength(str) {
  if (str.length >= 1 && str.length <= 10) {
    return str.length;
  }
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = class {
  add(a, b) {
    return a < 0 || b < 0 ? undefined : a + b;
  }
  subtract(a, b) {
    return a >= 0 && b >= 0 ? a - b : undefined;
  }
  divide(a, b) {
    return a / b;
  }
  multiply(a, b) {
    return a * b;
  }
};

let calc = new calculator();


const capitalize = (str)=>{
return str[0].toUpperCase()+[...str].slice(1).join('');
}


module.exports = { capitalize,stringLength, reverseString, calc };
