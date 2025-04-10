function duplicateCount(text){
  // we are inputting strings, we are outputting the number of duplicate characters
  // have to handle base case of empty string
  if(text == ""){
    return 0
  }
  let ccText = text.toLowerCase(),
      count = 0,
      charMap= {};
  // mapping out chars in ccText & their frequency
  for (const char of ccText){
    charMap[char] = charMap[char] + 1 || 1
  }
  // loop through, count number of times charMap[char] is > 1
  for (const char in charMap){
    if(charMap[char] > 1){
      count += 1
    }
  }
  console.log(text)
  console.log(ccText)
  console.log(charMap)
  return count
}

// this one wasn't too hard because I knew of a similar exercise where a hashmap was used
