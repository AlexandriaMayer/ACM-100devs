function array(string) {
  // at least three elements to not get a null
  // substring is main method
  // string is string
  let arr = string.split(",")
  if (arr.length < 3){
    return null
  }
  let str2 = arr.join("")
  let sub = arr.slice(1, arr.length - 1)
  console.log(string, arr, str2, sub)
  return sub.join(" ")
}
