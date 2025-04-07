function sumTwoSmallestNumbers(numbers) { 
  console.log(numbers)
  numbers = numbers.sort((a,b)=>a-b)
  return numbers[0] + numbers[1]
}

// pretty easy
