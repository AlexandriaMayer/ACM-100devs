function titleCase(title, minorWords) {
  if (title.length === 0){
    return '';
  }
  let titleArray = title.toLowerCase().split(" ");
  let minorArray ;
  if (minorWords){
    minorArray = minorWords.toLowerCase().split(" ");
  } else {
    minorArray = [];
  }
  
  
  titleArray[0] = capitalize(titleArray[0])
  
  for (let i = 0; i < titleArray.length;i++){
    if (minorArray.indexOf(titleArray[i]) === -1 ){
      titleArray[i] = capitalize(titleArray[i]);
    }  
  }
  return titleArray.join(" ");
}

let capitalize = (str) =>{
  return str[0].toUpperCase() + str.slice(1)
}

// https://www.codewars.com/kata/5202ef17a402dd033c000009/
// had to look up a solution. Turns out the .slice() method was needed to do the concatinating with "and after index 0..." 
// the base cases also seemed pretty weird ... I swear I could just practice handing undefineds, nulls, and NaNs so I am better prepared for other katas.
