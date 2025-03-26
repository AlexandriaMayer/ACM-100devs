function tribonacci(signature,n){
  //[1, "1", 1] = return ???
  let sequence = [...signature];
  
  for (let i = 0; i < n - signature.length;i++){
    sequence.push(sequence[sequence.length-1] 
                  + sequence[sequence.length-2] 
                  + sequence[sequence.length-3])
  }
  return sequence.slice(0, n);
}

// was close, but syntax was off. Had to look up the solution. 
