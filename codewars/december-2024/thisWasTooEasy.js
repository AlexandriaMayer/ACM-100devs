function removeEveryOther(arr){
  let arrKeepers = []
  for (let i = 0; i < arr.length; i++){
    if (i % 2 ===0){
      arrKeepers.push(arr[i])
    }
  }
  return arrKeepers
} // idk why there are katas that start 98% complete
