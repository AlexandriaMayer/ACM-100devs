const reverseSeq = n => {
  let arr = Array.from(Array(n), (_,x) => x);
  //for (let i = 0; i < n; i++){
   // arr.unshift(i)
   // return arr
  //}
  let arrReversed = arr.reverse()
  return arrReversed.map(v=>v+1)
};

// this was more complicated than necessary, but that's what happens when I have to google each step by step. I get the brute force method lol
