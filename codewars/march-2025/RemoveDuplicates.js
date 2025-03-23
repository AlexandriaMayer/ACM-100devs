function distinct(a) {
  // are we going by string equiv? like 1 vs "1"?
  // we are returning an array with all the unique values
  // [2, "2", 3, 3] -> [2, "2", 3]
  // [3, 4, 1, 1, 4, 2] -> [3, 4, 1, 2] What is the order of the array? examples seem to show we're
  // pulling from the first instance in this array
  // I know a map can map out each number, kinda like we do for twosum.
  // So let me refresh my knowledge on that
  return a.filter((item, pos, self)=>{return self.indexOf(item) == pos})
  const map = {}
  
  console.log(map)
  // how do we pull the numbers out of the map and into an array?
  // .from()
  const captainKeys = Object.keys(map)
  // we need to iterate over the new array and convert the string numbers to integers
  /**for (const e of captainKeys){
    theUniques.push(parseInt(e))
  }**/
}

// post submission: I do all this work and forget about sets aahahahaaaaaaa
