function getDivisorsCnt(n){
    // for loop between 1 and n, create arr
    // fizzbuzz logic
    // if n % i === 0
    // push to new array
    // either we return the array now
    // or we do a string of `we have ${arr.length} divisiors - `
    let count = 0
    if (n % Math.sqrt(n) == 0){
      count++
    }
    for (let i = 0; i < Math.sqrt(n); i++){
      if (n % i == 0){
        count += 2
      }
    }
    return count
}

// had to look up solution due to arrays not working at very large sizes. I'm pretty sure this has to do with big O, but I'll have to ask why. 
// Might have been throwing out numbers that are larger than can be handled by 32 bit JS
