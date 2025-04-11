
document.querySelector('#inputDate').addEventListener('click',inputDate)
document.querySelector('#endDate').addEventListener('click',endingDate)
document.querySelector('#currentDate').addEventsListener('click', currentDate)
document.querySelector('#includeLastDay').addEventsListener('click', includeLastDay)

// 4/11/2025 this isn't working and needs so much help

function inputDate(){
    let inputDate = new Date(document.querySelector('#inputDate').value)
    console.log(inputDate)
}
function endingDate(){
    let endingDate = new Date(document.querySelector('#endDate').value)
    console.log(endingDate)
}
function currentDate(){
    let today = document.querySelector('#currentDate').addEventsListener('click')
    return today
}
function includeLastDaty(){

}

function compareDate(inputDate, endDate, currentDate, includeLastDay, submission){
    // option to include or exclude end date
    // if endDate is before inputDate,  
}

function thursdayThe20th(){
    // for loop?
    // if date[i][dayOfWeek] = "Thursday" && date[i][day] = 20, console.log("Thursday the 20th!")
    // if date[i][dayOfWeek] = "Thursday", console.log("Thursday")
    // if date[i][day] = 20, console.log("the 20th!")
}
