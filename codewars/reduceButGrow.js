function grow(x){
  let xProduct = x.reduce((a,b)=>a*b)
  return xProduct
  //xProduct sounds like some workout or EXTREME consumer good from the 2000s
}

// getting this to work required doing math outside of the program. This verified what order of operations would get the results the program wanted - just multiply each array element together.
// instinctive moment made me wonder if I could multiply instead of add in a reduce function.
// with a little googling, I learned reduce can do other operators. 
// initivalValue at the end needs to be undefined, because the usual 0 will make the product zero
