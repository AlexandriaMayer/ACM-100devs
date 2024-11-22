function abbrevName(name){
  return name.split(' ').map(e => e[0]).join('.').toUpperCase()
}

// my first guess wasn't far off, but the syntax wasn't correct. ended up googling how to abbreviate names in javascript, found someone with the same problem.
// split the string into an array, with the empty space being the delimiter. map through each element (e), pluck out the first index of the element. Join the two elements together with a period between them.
// Upper case the two letters to fit within the expected returns. 
