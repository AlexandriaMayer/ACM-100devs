function noBoringZeros(n) {
  let arr = n.toString().split('');
  while(arr[arr.length - 1 ] === "0"){
    arr.pop()
  }
  return +arr.join('')
}

// had to look up the solution because I forgot about while loops.
