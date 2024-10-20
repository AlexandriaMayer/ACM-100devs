function digitize(n) {
  let arrR = []
  let str = n.toString()
  let reversed = str.split("").reverse()
  for (let i = 0; i<reversed.length; i++){
    let num = parseInt(reversed[i])
    arrR.push(num)
    console.log(arrR)
  }
  return arrR
}
