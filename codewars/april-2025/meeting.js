 function meeting(s) {
    let namelist = s.split(";")
    console.log(namelist)
   // now we need to create an array of arrays
   for (let i = 0; i < namelist.length; i++){
     namelist[i] = namelist[i].toUpperCase().split(":").reverse()
   }
   console.log(namelist)
   // now we need to sort these by last name (first element in the sub array)
   let namelistSorted = namelist.sort()
   // a simple sort was enough :')
   console.log(namelistSorted)
   for (let j = 0; j < namelistSorted.length; j++){
      namelistSorted[j] = namelistSorted[j].join(", ")
      namelistSorted[j] = `(${namelistSorted[j]})`
   }
   // final join isn't producing the right result. I think string interpolation is our best bet
   console.log(namelistSorted)
   return namelistSorted.join("")
}

// this was a good one! I was able to solve it on my own! laughed when I finally solved it with putting the space in 

// https://www.codewars.com/kata/59df2f8f08c6cec835000012
