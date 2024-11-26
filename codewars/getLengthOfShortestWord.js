function findShort(s){
  let shorty = []
 let arr = s.split(" ")
 let sortArr = arr.sort((a, b) => a.length - b.length)
 return sortArr[0].length
}

// My original idea was correct. I misread what the expected return was - I thought it wanted the number of words that were the shortest.
// It wants the length of the shortest word.
