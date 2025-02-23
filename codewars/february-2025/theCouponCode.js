function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  // return true if valid, false if not
  // enteredCode == correctCode
  // Doesn't JS have a time module?
  // it does. I might need to parse each month/day/year individually, add up the seconds, then compare
  // does get day comprehend leap years?
  let parseCurrent = new Date(currentDate)
  let parseExpiration = new Date(expirationDate)
  console.log(parseCurrent, parseExpiration)
  // okay, parse does it. Now we just need to do a comparison operator.
  let codeCheck = enteredCode === correctCode ? true : false
  console.log("Code Check: " + codeCheck)
  let dateValid = parseCurrent <= parseExpiration ? true : false
  // let dateDiff = parseCurrent - parseExpiration
  //console.log(dateDiff)
  // let dateValid = dateDiff <= 0 ? true : false
  console.log("Date Valid: " + dateValid)
  return codeCheck == true && dateValid == true ? true : false
}

// sort of looked up the solution, but turns out I just needed to use strict equivelance for this challenge. 

// also I had to use new Date() instead of .parse()

// I mean, it asked for that in the tests.

// but overall, this was a good learning experience
