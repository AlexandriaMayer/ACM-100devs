function getMiddle(s) {

  if (s.length % 2 == 0){
      let middleEven = [s[((s.length)/2)-1], s[(s.length)/2]]
      return middleEven.join("")
  }
  if (s.length % 2 != 0){
    return s[Math.floor((s.length)/2)]
  }
}

// okay, this one was fun to figure out!
