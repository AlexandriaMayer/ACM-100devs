function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let filteredGeese = []
    for (let i = 0; i<birds.length; i++){
      if (birds[i]!= geese[0] &&
          birds[i]!= geese[1] && birds[i]!= geese[2] && 
          birds[i]!= geese[3] && birds[i]!= geese[4]){
        filteredGeese.push(birds[i])
      }
    }
  return filteredGeese
  }

// I had to look up the solution, which... didn't surprise me. But I feel like the solution goes against a lot of programming principles due to its brute force nature.
