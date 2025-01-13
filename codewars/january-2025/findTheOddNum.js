function findOdd(A) {
  let numMap = {},
      count = 0,
      oddNum = null
  
  for (const num of A){
    numMap[num] = numMap[num] + 1 || 1
  }
  for (const num in numMap){
    if (numMap[num] % 2 !== 0){
      count = numMap[num]
      oddNum = parseInt(num)
    }
  }
  return oddNum;
}

// the max char problem Leon went over helped me solve this problem
