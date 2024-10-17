function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let totals = marks.reduce((a,b)=>a+b, 0);
  let average = totals/marks.length
  return Math.floor(average)
}

// huntober DS&A day one. ez
