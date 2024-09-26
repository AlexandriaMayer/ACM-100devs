function sumMix(x){
  // console.log(typeof x) says this is an object
  return x
    .map(num => parseInt(num))
    .reduce((total, currentValue) => {
    return total + currentValue
  }, 0)
} // ended up having to look up the solution to this
sumMix([4, 2, , "83", "-3"])
