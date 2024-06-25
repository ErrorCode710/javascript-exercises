const palindromes = function (string) {
  const newString = string.replace(/[\W_]/gi, "").toLowerCase();
  let normal = "";
  let reverse = "";

  for (let i = 0; i < newString.length; i++) {
    normal += newString[i];
  }
  for (let i = newString.length - 1; i >= 0; i--) {
    reverse += newString[i];
  }
  if (normal == reverse) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
