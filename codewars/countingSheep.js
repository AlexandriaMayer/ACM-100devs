var countSheep = function (num){
  let arr = []
  for (i = 0; i<num; i++){
    arr.push((i+1) + " sheep...")
  }
  // for loop, arr.push(i + " sheep...")
  // returns an array of strings
  let str = arr.join("")
  return str
}
