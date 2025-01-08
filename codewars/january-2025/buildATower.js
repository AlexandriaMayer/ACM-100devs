function towerBuilder(nFloors) {
  let space, star, levels = []
  for (let i = 1; i <= nFloors; i++){
    space = ' '.repeat(nFloors - i)
    star = '*'.repeat(2 * i - 1)
    levels.push(`${space}${star}${space}`)
  }
  return levels
}

// ah, I didn't know about the repeat function! that solves a lot
