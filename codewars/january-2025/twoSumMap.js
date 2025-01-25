function twoSum(numbers, target) {
  const numbersToIndex = {}
  for (let i = 0; i < numbers.length; i++){
    numbersToIndex[numbers[i]] = i;
  }
  for (let i = 0; i < numbers.length; i++){
    const numberNeeded = target - numbers[i];
    if (numbersToIndex[numberNeeded] !== undefined && numbersToIndex[numberNeeded] !== i){
      return [i, numbersToIndex[numberNeeded]]
    }
  }
}

// two sum, but using a map to create key value pairs. This has a time complexity closer to O(n). I need to read up more and play with the map data type. 
