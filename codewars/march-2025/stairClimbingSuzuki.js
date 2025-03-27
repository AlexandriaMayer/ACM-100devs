function stairsIn20(s){
  let dailyTotals = []
  // ah, it's an array of arrays
  for (let i = 0; i < s.length; i++){
    dailyTotals.push(s[i].reduce((a,c)=>a+c,0))
  }
  return dailyTotals.reduce((a,c)=>a+c,0)*20
}

// ez
