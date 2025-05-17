function sumMul(n,m){
  if (m < 1 || n == 0){
    return 'INVALID'
  }
  let arr = []
  for (let i = 1; i < m; i++){
    if (i % n == 0){
      arr.push(i)
    }
  }
  console.log(arr)
  return arr.reduce ((a, c)=>a+c, 0)
}

// not too hard, just had to handle the base cases. please go through the test examples some more.
