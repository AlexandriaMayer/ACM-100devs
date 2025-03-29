function minValue(values){
  let uniques = new Set(values.sort((a,b)=>a-b))
  console.log(uniques)
  let arr = [...uniques]
  console.log(arr)
  let num = Number(arr.join(""))
  return num
}
