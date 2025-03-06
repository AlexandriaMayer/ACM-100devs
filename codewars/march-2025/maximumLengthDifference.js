const mxdiflg = (a1, a2) =>
    // I couldn't get the edges cases correct
  a1.reduce((acc, c)=> 
            Math.max(acc,a2.reduce((acc2, c2)=>
                                  Math.max(acc2, Math.abs(c.length - c2.length)), -1)), -1)
  // had to look up the solution, I tried so hard at this :sob:
