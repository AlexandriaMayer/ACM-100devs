function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++){
      for (let j = i + 1; j < numbers.length; j++){
        if (numbers[i] + numbers[j] === target){
          return [i, j];
        }
      }
    }
}

// this is the brute force method, it has a space complexity of O(n) and a time complexity of O^n.
