function checkExam(array1, array2) {
 // Not empty, have the same length. 
  let count = 0
  console.log(`Array 1 ${array1} Array 2 ${array2}`)
  
  for (let i = 0; i < array1.length; i++){
    if (array2[i] === array1[i]){
      count += 4
    }
    else if (array2[i] !== array1[i] && array2[i] != ""){
      count -= 1
    }
  }
  // the empty element isn't undefined, it's just ""
  return count < 0 ? 0 : count
  
  // count += 4 for correct answers
  // count -= 1 for incorrect answers
  // if score is less than 0, return zero?
}

// thrown off at times, but I was able to get back on track. This one wasn't too hard.
