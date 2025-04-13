function isValidWalk(walk) {
  if (walk.length != 10){
    return false
  }
  let lat = 0,
      long = 0
  for (let i = 0; i < walk.length;i++){
    if (walk[i] == 'n'){
      lat++
    }
    if (walk[i] == 's'){
      lat--
    }
    if (walk[i] == 'e'){
      long++
    }
    if (walk[i] == 'w'){
      long--
    }
    console.log(lat, long)
    
  }
  return lat === 0 && long === 0 && walk.length === 10? true: false
}

// 6kyu
// this seemed harder the first time I saw it, but it was pretty easy to do now.
