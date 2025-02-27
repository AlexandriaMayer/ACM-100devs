function derive(coefficient,exponent) {
  let num = coefficient * exponent
  let mod = exponent - 1
  return (`${num}x^${mod}`)
}
