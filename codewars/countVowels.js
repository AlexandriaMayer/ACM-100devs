function getCount(str) {
    console.log(str.length)
  let result = ''
  //str.split('')
  for(i = 0; i<str.length; i++){
    if (str[i] == 'a' || str[i] == 'e'|| str[i] == 'i' ||
        str[i] == 'o'|| str[i] == 'u'){
      result+=str[i]
    }
  }
  return result.length
}

// took effort, had to look for how others solved this problem. overall, I was 80% of the way there and the rest was working around the math logic.
// went down a rabbithole with comparing string lengths, but that's not the key. key was to change != to ==, and AND to OR.
