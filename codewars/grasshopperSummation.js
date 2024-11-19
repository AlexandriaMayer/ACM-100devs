var summation = function (num) {
  let arr = []
  for (i=1; i<=num; i++){
    arr.push(i)
  }
  return arr.reduce((a,b)=>a+b,0)
}
