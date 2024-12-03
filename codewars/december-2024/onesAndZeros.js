const binaryArrayToNumber = arr => 
  parseInt(arr.join(""),2)

// had an elaborate setup, but it didn't work for arrays of flexible values. ended up looking up the solution and it was just one line of code. I didn't think to use parseInt,
// forgot that it could convert numbers on different bases than 10
