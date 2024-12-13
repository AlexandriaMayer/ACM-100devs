var number=function(array){
  //let alphabet = ('abcdefghijklmnopqrstuvwxyz')
  //let alphaSplit = alphabet.split("")
  let output = []
  if (array.length == 0){
    return []
  } else {
    for (let i = 0; i < array.length; i++){
     output.push(i + 1 + ": " + array[i])
    }
  }
 return output 
}

// okay, I was 80% of the way there before looking up the solution.

// I was missing: an if-else to handle empty arrays, and that creating an alphabet array was redudunant. A populated array would provide the letters themselves - this 
// isn't just a-b-c
