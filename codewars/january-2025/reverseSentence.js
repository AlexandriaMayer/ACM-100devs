function reverse(string){
  let trimStr = string.trim()
  return trimStr.split(" ").reverse().join(" ")
}


// ah, another .split(" ").reverse().join(" ")
