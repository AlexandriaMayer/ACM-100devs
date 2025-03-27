function noOdds( values ){
  console.log(values)
  // not odd = includes evens and zero?
  let notOdd = []
  for(let i = 0; i<values.length; i++){
    if (values[i] % 2 == 0){
      notOdd.push(values[i])
    }
  }
  return notOdd
}
