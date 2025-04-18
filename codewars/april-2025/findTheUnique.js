function findUniq(arr) {
  // an array with only one element different than the others?
  // we're returning the unique number
  // so, for loop
  // if arr[i] != arr[i-1], return arr[i]
  // this method doesn't work when the first number is the unique one
  // how about a map?
  let count = 0
  let theOthers = null
  let numMap = {}
  for (const e of arr){
      numMap[e] = numMap[e] + 1 || 1
  }
  for (const e in numMap){
    if (numMap[e] > count){
      count = numMap[e]
      theOthers = e
    }
  }
  console.log(arr, numMap, theOthers)
  for (let i = 0; i < arr.length; i++){
    if (arr[i] != theOthers){
      // I have no idea why this works with regular but not strict equivelance
      console.log(`${arr[i]} is not like ${theOthers}!`)
      return arr[i]
    }
  }
  
  return Math.min.apply(null, Object.values(numMap))
}
