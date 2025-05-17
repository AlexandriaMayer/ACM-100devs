function mango(quantity, price){
  // okay so we have iterate
  console.log(quantity, price)
  let costs = 0;
  for (let i = 1; i <= quantity; i++){
    if (i % 3){
      console.log(i)
      costs += price
    }
  }
  console.log(costs)
  return costs
}

// today I learned i % 3 returns us the remainder. That makes sense, but it was outside what I used to doing with %.
