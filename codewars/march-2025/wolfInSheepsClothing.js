function warnTheSheep(queue) {
  let reversed = queue.reverse()
  let wolf = reversed.indexOf("wolf")
  if (wolf === 0){
    return "Pls go away and stop eating my sheep"
  }
  else { 
    return `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`
  }
}

// had to look up the solution, but turns out reversing was the key all along
