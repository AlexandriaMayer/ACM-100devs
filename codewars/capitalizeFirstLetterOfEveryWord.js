String.prototype.toJadenCase = function () {
  return this
  .split(" ")
  .map(word=>word[0].toUpperCase() + word.slice(1))
  .join(" ");
};

// the initial idea I had was a for loop and toUpperCase, but this didn't work because of... constructors. Had to look up the solution, map makes sense, everything else was close
