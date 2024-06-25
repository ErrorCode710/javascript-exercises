const add = function (...args) {
  if (Array.isArray(args[0])) {
    const add = args[0].reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return add;
  } else {
    const sum = args.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return sum;
  }
};

const subtract = function (...args) {
  if (Array.isArray(args[0])) {
    const subtract = args[0].reduce((accumulator, currentValue) => {
      return accumulator - currentValue;
    });
    return subtract;
  } else {
    const subtract = args.reduce((accumulator, currentValue) => {
      return accumulator - currentValue;
    });
    return subtract;
  }
};

const sum = function ([...args]) {
  if (Array.isArray(args[0])) {
    const sum = args[0].reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return sum;
  } else {
    const sum = args.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    return sum;
  }
};

const multiply = function (...args) {
  if (Array.isArray(args[0])) {
    const product = args[0].reduce((accumulator, currentValue) => {
      return accumulator * currentValue;
    }, 1);
    return product;
  } else {
    const sum = args.reduce((accumulator, currentValue) => {
      return accumulator * currentValue;
    }, 1);
    return sum;
  }
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (integer) {
  let result = 1;
  for (let i = 1; i <= integer; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
