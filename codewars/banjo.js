function areYouPlayingBanjo(name) {
  let string = name
  let stringCaseCorrected = string.toLowerCase();
  if (stringCaseCorrected[0] === 'r'){
    return `${name} plays banjo`
  }
  else {
    return `${name} does not play banjo`
  }
 return stringCaseCorrected
}

// this was was interesting, because I had to correct broken code, rather than write the code from scratch.
