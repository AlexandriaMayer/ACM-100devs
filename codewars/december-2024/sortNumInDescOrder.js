function descendingOrder(n){
  // 4537261 -> 7654321
  let str = String(n)
  let joined = str.split('').sort((a, b) => b - a).join("")
  return parseInt(joined)
}
