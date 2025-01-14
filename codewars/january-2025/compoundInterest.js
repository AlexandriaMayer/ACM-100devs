function calculateYears(principal, interest, tax, desired) {
    // your code
  // this is compound interest
  let years = 0
  while (principal < desired){
    let gains =  principal * interest - (principal * interest * tax)
    principal += gains
    years++
  }
  return years
}
