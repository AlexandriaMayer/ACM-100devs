function addLength(str) {
  let arr = str.split(" ")
  let lengths = []
  // did the split
  // for loop to iterate over the array
  // like if I could, I just to play with extracting the length into a new array
  // once I figure that out, it's a simple matter of string interpolation
  for (let i = 0; i<arr.length; i++){
    lengths.push(arr[i] + " " + arr[i].length)
  }
  return lengths
}
// i did it yay!!
