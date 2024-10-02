function findDifference(a, b) {
  let aProduct = a.reduce((c, d)=>c * d)
  let bProduct = b.reduce((e, f)=>e * f)
  let difference = aProduct - bProduct
  return Math.abs(difference)
} // not hard, only curveball was having to force integer to positive with the abs function
