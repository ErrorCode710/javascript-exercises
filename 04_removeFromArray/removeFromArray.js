const removeFromArray = function (arrayNumbers, ...args) {
  return arrayNumbers.filter((items) => !args.includes(items));
};
// Do not edit below this line
module.exports = removeFromArray;
