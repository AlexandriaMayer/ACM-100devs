function gimme (triplet) {
  // create copy array
  let arr = Array.from(triplet)
  let arr1 = arr.sort((a, b)=> a - b)
  for(let i = 0; i<triplet.length; i++){
    if (triplet[i] === arr1[1]){
      return i
    }
  }
}
// okay, so my initial logic was correct, but it wasn't returning the right element.
// turns out triplet was an object, not an array. 
// using Array.from() was needed to extract the array. After that, the program worked perfectly.
