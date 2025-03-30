function longestConsec(strarr, k) {
    // how does the concat method work with variable amounts of concat?
    /**let pirate = [];
    // ah, so it's pairs of indicies
    // we can do a for loop, but i < arr.length - 2
    // strarr[i].concat(strarr[i+1])
    // .concat() returns a new array. We will need to join the arrays into a string
    // [["sleep","tight"],["tight","floofer"],["floofer", "may"], ["may", "your"], ["your", "curls"], ["curls", "be"], ["be", "healthy"]]
    // another for loop, pirate[i].join("")
    // ["sleeptight","tightfloofer", "floofermay", "mayyour", "yourcurls", "curlsbe", "behealthy"]
    // put these array elements in a map with indicies being their key... what if there dupllicates?
    let pirateMap = {};
    // what do we put in the pirate map? the string lengths and their indicies
    for(let i = 0; i<strarr.length-k; i++){
      pirate.push(strarr[i].concat(strarr[i+1]));
    }
    console.log(pirate)
    // it works, and we can skip the joining step
    // compared to twosum, we're wanting to return the first, not the last, so this for loop needs to work in reverse
    for(let j=pirate.length-1;j>=0;j--){
      pirateMap[pirate[j]] = j;
    }
    console.log(pirateMap)
    **/
    function longestConsec(strarr, k) {
    let tempArr = strarr;
    let newArr = [];
    let tracker = strarr.length
    let newTracker = strarr;
    if (strarr.length == 0 || k > strarr.length || k <=0){
      return ""
    }
    while (tracker >=k){
      let sum='';
      for (let i = 0; i < k;i++){
        sum = sum+newTracker[i];
      }
      newTracker.shift();
      newArr.push(sum);
      tracker--;
    }
    let countNewStr= newArr[0];
    for (let i = 1; i<newArr.length;i++){
      if (newArr[i].length > countNewStr.length){
        countNewStr = newArr[i];
      }
      else if(newArr[i].length = countNewStr.length){
        countNewStr = countNewStr;
      }
      else{
        return ""
      }
    }
  
  return countNewStr
}
    // I had to look up the solution. it's late and I'll have to read over this tomorrow.
}
