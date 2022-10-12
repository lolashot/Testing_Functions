const stringLength = (string) => {
    if(string.length < 1) {
        throw new Error('string length must be greater than one');

    }
    if(string.length > 10) {
        throw new Error('string length must be less than eleven');
    }
    return string.length;
}

// Task 2: Reverse string fx
const reverseString = (str) => str.split('').reverse().join('');

// Task 3: Simple Calculator
class basicCalculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

    static add = (x, y) => {
        return (x + y);
    }

    static subtract = (x, y) => {
        return (x - y);
    }

    static multiply = (x, y) =>  {
        return (x * y);
    }

    static divide = (x, y) => {
        return (x / y);
    }
}

// Task 4: Captalize First letter of string
const capitaliseString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = {
  stringLength, reverseString, basicCalculator, capitaliseString,
};