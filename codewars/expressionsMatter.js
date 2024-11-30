function expressionMatter(a, b, c) {
  let arr = []
  arr.push(a + b + c)
  arr.push(a * b * c)
  arr.push(a * b + c)
  arr.push(a*(b + c))
  arr.push(a + b * c)
  arr.push((a + b)*c)
  arr.sort((d, e)=> d - e)
  return arr[arr.length - 1]
}

// that's one way do it it. I also found about the Math.max() method afterwards, and that makes way more sense.
