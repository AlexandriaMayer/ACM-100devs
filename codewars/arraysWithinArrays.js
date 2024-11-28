function openOrSenior(data){
  let output = []
  for (let i = 0; i<data.length; i++){
    if (data[i][0] > 54 && data[i][1] > 7){
      output.push("Senior")
    }
    else{
      output.push("Open")
    }
  }
  return output
  // if e[0] >= 55 && e[1] < 7
  // output.push("Senior")
  // else
  // output.push("Open")
  // return output
}
// my basic logic was correct, but I had to look up the solution due to having slightly incorrect syntax. 
