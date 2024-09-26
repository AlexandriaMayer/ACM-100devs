function findNeedle(haystack) {
  if(haystack.includes('needle')){
      return("found the needle at position " + haystack.indexOf("needle"))
    // it wanted a return, not a console.log
  }
  else{
    console.log("Needle not found")
  }
}

// overall, about what I expected. took some fangaling of the syntax
