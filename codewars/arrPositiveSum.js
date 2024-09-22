function positiveSum(arr) {
  // need to filter out positive values from the array
  let arrPositive = arr.filter((x) => x > 0); 
  console.log(arrPositive)
  let arrPositiveSum = arrPositive.reduce((a,b)=>a+b,0);
  console.log(arrPositiveSum)
  return arrPositiveSum
}
// got it right on the first try!!! \>o</
