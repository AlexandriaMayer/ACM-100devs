function roundToNext5(n){
  // input is an integer. 
  // return is the number rounded to the next multiple of five
  // 0 -> 0
  // 1 -> 5
  // 6 -> 10
  // -1 -> 0
  // so we're always rounding up, not rounding to the absolutes
  // we'll use the Math.ceil() function
  return Math.ceil(n/5) * 5
  // 4/5 = 0.8. ceil takes it to 1. Then we multiply by 5.
}
