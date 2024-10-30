function friend(friends){
  let trueFriends = []
  // iterate through the array
  for (i = 0; i < friends.length; i++){
    if (friends[i].length === 4){
      trueFriends.push(friends[i])
    }
  }
  return trueFriends
  // if friends[i].length === 4 trueFriends.push(friends[i])
  // else 
}

// this was the easy, brute force method. I realize I can do this with a filter method as well.
