const points = games => 
  //let gameScores = []
  //let gameSplit = games.split(':').map(x,games)
  
   games.reduce((a,b)=> a += b[0] > b[2] ? 3: 
                              b[0] < b[2] ? 0: 1         
                 ,0) 
  // had to look up the solution. I had the right idea with the reduce, but
  // he used a terinary operator instead of a conventional if..else. 
  // also the reduce function can bypass strings and just return numbers from a string?
  // this mean the whole split and parseInt steps were unnecessary
  // at least I'm trying to practice PREP
  // https://www.youtube.com/watch?v=v-OMXltJ6yE
  // "3:2" -> "3", "2" 

  // parseInt("3", "2")
  
  // x = 3, y = 2
  // let champScore = []
  // if (x > y) -> chapScore.push(3)
  // else if (x === y) -> champScore.push(1)\
  // let finalScore = champScore => reduce((a,b) a + b, 0)
  // return final score
