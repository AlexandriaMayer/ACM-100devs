function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr[arr.length-1]
}
function pushElement(arr){
  let el=1;
  //push el to arr
  let arr2 = arr.push(el)
  return arr
}
function popElement(arr2){
  //pop an element from arr
  let arr3 = arr2.pop()
  return arr2
}
// 8kyu
// need to figure out why the last one worked.
