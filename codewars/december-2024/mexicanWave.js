function wave(str){
  let wave = []
  for (let i = 0; i < str.length; i++){
    if (str[i] !== " "){
      wave.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1))
        }
  }
  return wave
}

// had to look up the solution, turns out the slice method was what was needed to iterate through each string.
