function enough(cap, on, wait) {
  //console.log(boarding)
  if ((on+wait) > cap){
    return (on+wait)-cap
  }
  else{
    return 0
    //cap10 on5 wait10
          // cap 0 on10 wait5
  }
}
