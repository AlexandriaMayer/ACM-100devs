const humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears == 1) return [1, 15, 15]
  if (humanYears == 2) return [2, 24, 24]
  if (humanYears > 2) return [humanYears, 24+((humanYears-2)*4), 24+((humanYears-2)*5)]
}
// I knew this was going to be an if-else loop, but I wasn't getting the later conditionals returned. Why? Because I was using = instead of ==. I don't know how I forgot that.
