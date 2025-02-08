function arrayDiff(a, b) {
  // is array a and array b only integers?
  // looks like yes
  // is array b only one element?
  // no, there can be more than one
  // is the returned array just array a - array b's elements, or is a unique count of array a's numbers?
  // okay, first answer would be o^2, but brute force is fine.
  // nested for loop doesn't work
  let c = a.filter(x => !b.includes(x))
  return c
}
