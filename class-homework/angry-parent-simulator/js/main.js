document.querySelector("#yell").addEventsListener('click', run)

function run(){
  const fName = document.querySelector('#firstName').value 
  const fMidName = document.querySelector('#firstMiddle').value 
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value
}

document.querySelector('#placeToYell').innerText=`${fName}
${fMidName} ${lMidName} ${lName}`

//ok what does inner text do?

// temp pseduocode again wein und bier bitte kaffe

// html form input

// x = toFloat()

// y = ((x-32)5/9)

// html element that is actually just a repo for y
