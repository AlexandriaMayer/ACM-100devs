function longest(s1, s2) {
  // input are two strings of all lowercase numbers
  // output is a string of all the letters in the alphabet, sorted from a to z
  let arr1 = s1.split("").sort()
  let arr2 = s2.split("").sort()
  let common = arr1.concat(arr2)
  console.log(arr1, arr2, common)
  // now we need to remove duplicates
  let uniq = [...new Set(common.sort())]
  console.log(uniq)
  return uniq.join("")
}

/// eeee i did it!!!
