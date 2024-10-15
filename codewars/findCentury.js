function century(year) {
  let decimal = parseFloat(year) / 100
  console.log(decimal)
  //let ce = Number(decimal).toFixed(0)
  let round = Math.ceil(decimal)
  console.log(round)
  return round;
}

// took a while to work out the syntax, but now I should remember how to handle this. rather brute force answer, but it was easier to debug this way.
