function multipleOfIndex(array) {
  let indexMulti = []
  for (let i = 0; i<array.length;i++){
    if (array[i] % i === 0 || array[i] == 0){
      indexMulti.push(array[i])
    }
  }
  return indexMulti
}

// not bad, not hard. fine question for bedtime codewars
