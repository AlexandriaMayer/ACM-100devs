function findMultiples(integer, limit){
  let arr = [];
  let multiple = integer/limit
  for(i=integer; i<=limit; i+=integer){
    arr.push(i)
  }
  return arr
  // had to look up the solution after coming close
  // the big surprise was realizing I could use the integer itself as the increment in the for loop.
  
}
