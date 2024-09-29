function findAverage(array) {
  if (array.length > 0){let total = array.reduce((a,b)=>a+b, 0);
  let average = total/array.length
  return average}
  else{
    return 0
  }
} 
