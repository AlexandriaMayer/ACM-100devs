var number = function(busStops){
  console.log(busStops) // array of arrays
  // you can always iterate through this array
  // and then iterate through the inner array
  // final number is probably going to be zero or more
  // no negative numbers? 
  // within each array: off, on
  // [2, 1] (1), [5, 6] (0), [8, 0] (8), [3, 7] (4), [2, 4] (2)
  // onCount += [stop[0]]
  // offCount += [stop[1]]
  // total = onCount - offCount
  // return total
  let onCount = 0
  let offCount = 0
  for (let i = 0; i<busStops.length; i++){
    for (let j = 0; j < busStops[i].length; j++){
      onCount += busStops[i][0]
      offCount += busStops[i][1]
    }
  }
  console.log(onCount, offCount)
  // for some reason, this was being double counted
  return (onCount/2) - (offCount/2)
  // I couldn't figure out how to prevent the double counting, so I wondered if I could get a correct result by dividing the final number in half
  // surprise: It works!
}

// thank you bus driver
