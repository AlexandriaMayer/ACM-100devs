function hero(bullets, dragons){
  let ammoNeed = dragons * 2
  if (bullets>=ammoNeed){
    return true
  }
  else{
    return false
  }
}
//easy, realized it was just a simple equation and a conditional.
