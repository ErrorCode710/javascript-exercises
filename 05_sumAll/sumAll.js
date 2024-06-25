const sumAll = function (firstInteger, secondInteger) {
  let sum = 0;

  if (firstInteger <= -1 || secondInteger <= -1) {
    return "ERROR";
  } else if (
    typeof firstInteger === "string" ||
    typeof secondInteger === "string"
  ) {
    return "ERROR";
  } else if (isNaN(firstInteger) || isNaN(secondInteger)) {
    return "ERROR";
  } else {
    let start = Math.min(firstInteger, secondInteger);
    let end = Math.max(firstInteger, secondInteger);
    for (let i = start; i < end + 1; i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
