function solve(s){
    let countLower = 0,
        countUpper = 0,
        lowers = new RegExp(/([a-z])/g),
        uppers = new RegExp(/([A-Z])/g)
    for (let c of s){
      if (c.match(lowers)){
        countLower++
      }
      if (c.match(uppers)){
        countUpper++
      }
      console.log(`uppers: ${countUpper}, lowers: ${countLower}`)
    }
    if (countLower >= countUpper){
      return s.toLowerCase()
    } else if (countUpper > countLower){
      return s.toUpperCase()
    }
}

// nice!!!
