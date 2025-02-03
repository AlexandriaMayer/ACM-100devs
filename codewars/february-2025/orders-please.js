function order(words){
  if (!words){
    return words
  }
  return words.split(' ').sort((a,b)=> getNumber(a) - getNumber (b)).join(' ')
}
function getNumber(str){
  return str.match(/\d/)[0]
}

// had to look up the solution, but I got 80% of the way there. The sort method is an elegant solution, and I didn't know it could do this sort of sorting. 
