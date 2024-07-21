document.querySelector('#check').addEventListener('click', check)

function check() {

  const job = document.querySelector('#job').value.toLowerCase()

  //Conditionals go here

  if(job.includes("gis") || job.includes("dev") || job.includes("geo")|| job.includes("data")){
    console.log("omg really? tell me more!")
  }else if(job ==="baker" || job ==="florist"|| job ==="vet"|| job ==="artist"){
    console.log("awh you're having all the fun!")
  }else{
    console.log("ok")
  }
}
