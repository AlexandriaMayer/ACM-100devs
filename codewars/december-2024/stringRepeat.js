function repeatStr (n, s) {
  let arr = []
  for (let i=0; i<n; i++){
    arr.push(s)
  }
  return arr.join("")
}

// ok that's one way to do it

// but the top solution was return s.repeat(n)
// I'll have to look that up and add it to my anki deck.
