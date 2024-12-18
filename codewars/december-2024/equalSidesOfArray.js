function findEvenIndex(arr){
  if (arr.length == 1) return 0
  
  const constPairs = [[0, arr.filter((value, index)=>index != 0).reduce((a,b)=>a+b, 0)]]
  for (let i = 1; i < arr.length; i++){
    let left = arr.filter((value, index)=> index < i).reduce((a,b)=>a+b, 0)
    let right = arr.filter((value, index)=> index > i).reduce((a,b)=>a+b, 0)
    constPairs.push([left, right])
  }
  const last = arr.filter((value, index)=> index <arr.length-1).reduce((a,b)=>a+b, 0)
  constPairs.push([last, 0])
  const subAnswers = constPairs.filter(pair => pair[0] === pair[1])
  return constPairs.indexOf(subAnswers[0])
}

// I got 90% the way there, but couldn't get the returns right. So I look up the solution... and the solution doesn't work for me.
// Had to look up a 2nd solution, this one worked.
// I'm feeling frazzled after this kata, this took like 2+ hours to solve even when I had the solution
