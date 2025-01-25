function sumDigits(number) {
  let str = String(Math.abs(number))
  let arr = str.split("")
  console.log(arr)
  let count = 0
  for (let e of arr){
    count += Number(e)
  }
  return count
}
