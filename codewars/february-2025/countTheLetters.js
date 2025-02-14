function strCount(str, letter){  
  // ("Llama", "l") => 1?2?
  // Is the comparison case sensitive? 
  let count = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] == letter[0]){
      count++
    }
  }
  return count
  
}
