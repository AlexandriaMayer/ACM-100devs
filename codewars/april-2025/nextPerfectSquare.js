function findNextSquare(sq) {
  // is the sqrt an integer?
  let num = Math.sqrt(sq)
  let root = 0
  let nextSq = 0
  if (Number.isInteger(num) == true){
    root = num + 1
    nextSq = Math.pow(root, 2)
    return nextSq
  } else{
    return -1;
  }
}

 // not hard, got me thinking
