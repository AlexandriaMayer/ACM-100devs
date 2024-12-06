function validatePIN (pin) {
  // what if we didn't regex it?
  // isn't regex like [1-9]S?true:false
  // i'll have to look it up
  // nested tenary operator. numbers then length, or vice versa
  // pin.length === 4 || pin.length === 6?//regex recongition:false
  const reg = new RegExp('^[0-9]+$')
  const valid = reg.test(pin)
  if (valid){
     if (pin.length === 4 || pin.length === 6){return true}else{return false}
  } else{return false}
  // yis, it is nested if-else loops
}
  // okay, after this, I found out the OR in checking length would've been  new RegExp('^[0-9{4}$' | ^[0-9{6}$) rather than the OR being in the curly brackets themselves
