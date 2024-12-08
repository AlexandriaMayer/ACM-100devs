function highAndLow(numbers){
  let arr = numbers.split(" ").map(Number)
  console.log(arr)
  let maxMin = [Math.max(...arr), Math.min(...arr)]
  return maxMin.join(" ")
  
  // Math.max and Math.min require integers or floats as the arguments. It also by default doesn't recongize an array as 
  // a valid argument. It just sees an array, doesn't interate through it. We can use spread syntax to get around this issue.
  
}
