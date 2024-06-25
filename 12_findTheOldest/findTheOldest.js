const findTheOldest = function (arr) {
  return arr.reduce((oldest, person) => {
    const age = person.yearOfDeath - person.yearOfBirth;
    if (!oldest || age > oldest.age) {
      return { name: person.name };
    }
    return oldest;
  }, null);
};

// Do not edit below this line
module.exports = findTheOldest;
