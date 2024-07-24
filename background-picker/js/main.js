document.getElementById('m1').onclick = metroLine1
document.getElementById('m2').onclick = metroLine2
document.getElementById('m3').onclick = metroLine3
document.getElementById('m4').onclick = metroLine4
document.getElementById('m5').onclick = metroLine5

// the actual content of the functions is going to change, but I want to get
// the basic functionality out of the way. I'll have to read over the MDN for
// the design I really want.

function metroLine1(){
  document.querySelector('body').style.backgroundColor='rgba(215, 10, 80, 1)'
  document.querySelector('body').style.border='5px solid rgba(255,255,255,1)'
  document.querySelector('body').style.color='white'
  document.querySelector('h1').style.color='white'
  document.querySelector('h2').style.color='white'
}


function metroLine2(){
  document.querySelector('body').style.backgroundColor='rgba(55 , 200, 35, 1)'
  document.querySelector('body').style.border='5px solid rgba(255,255,255,1)'
  document.querySelector('body').style.color='white'
}
function metroLine3(){
  document.querySelector('body').style.backgroundColor='rgba(20, 20, 185, 1)'
  document.querySelector('body').style.border='5px solid rgba(255,255,255,1)'
  document.querySelector('body').style.color='white'
}
function metroLine4(){
  document.querySelector('body').style.backgroundColor='rgba(180 , 20, 220, 1)'
  document.querySelector('body').style.border='5px solid rgba(255,255,255,1)'
  document.querySelector('body').style.color='white'
}
function metroLine5(){
  document.querySelector('body').style.backgroundColor='rgba(191, 87, 0, 1)'
  document.querySelector('body').style.border='5px solid rgba(255,255,255,1)'
  document.querySelector('body').style.color='white'
}