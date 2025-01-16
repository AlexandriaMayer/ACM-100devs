function reverseLetter(str) {
  // step one: reverse
  return str.split("").filter((e)=> /[a-zA-Z]/.test(e)).reverse().join("")
  // step two: filter out for typeof = alphabetical
}

// took a while to get the right regex to filter it out
