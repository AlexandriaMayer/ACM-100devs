function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let ages = [age1,age2,age3,age4,age5,age6,age7,age8]
  let agesSquared = ages.map(x => x * x)
  let total = agesSquared.reduce((a,c)=>a+c, 0)
  let squareRoot = Math.sqrt(total)
  return Math.floor(squareRoot/2)
}

// this one was pretty easy, considering the prompt gave us the steps
