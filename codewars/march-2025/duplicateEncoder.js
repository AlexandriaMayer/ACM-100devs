function duplicateEncode(word){
    const freqMap = {};
    const result = [];
    let arr = word.toLowerCase()
                  .split('')
                  .map((c, i, a)=> a.indexOf(c) === a.lastIndexOf(c) ? "(" : ")")
                  .join('')
    return arr
}

// i had to look up the solution :sob:
