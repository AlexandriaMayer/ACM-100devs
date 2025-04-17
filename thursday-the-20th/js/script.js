
document.querySelector('#inputDate').addEventListener('input', inputDate)
document.querySelector('#endDate').addEventListener('input',endingDate)
document.querySelector('#currentDate').addEventListener('click', currentDate)
document.querySelector('#includeLastDay').addEventListener('click', includeLastDay)
document.querySelector('#submission').addEventListener('click', thursdayThe20th)

function inputDate(){
    let firstDate = new Date(document.querySelector('#inputDate').value)
    console.log(firstDate)
    // I need to adjust the date for UTC - April 1st is returning March 31st at 7pm CST
    return firstDate
}
function endingDate(){
    let secondDate = new Date(document.querySelector('#endDate').value)
    console.log(secondDate)
    return secondDate
}
function currentDate(){
    // I think for version 1.0, I don't need to get current date - this would just be a nice shortcut

    let today = new Date();
    let today2 = today.getDate()+today.getMonth()+today.getFullYear()
    
}
function includeLastDay(){
    // current date seems to be the default
    // so if includeLastDay is turned off, subtract one day from day count
}


function thursdayThe20th(){
    // we have to use recursion to loop through the dates
    // we already have our starting and ending dates
    let firstDate = inputDate();
    let secondDate = endingDate(); 
    let thursday = 0,
        the20th = 0,
        thursday20th = 0;
    for (let day = firstDate; day <= secondDate; day.setDate(day.getDate()+1)){
        if (day.getDate() === 20 && day.getDay() === 4){
            thursday20th++
        }
        if (day.getDate() === 20){
            the20th++
        }
        if (day.getDay() === 4){
            thursday++
        }
        let newDate = firstDate.setDate(firstDate.getDate() + 1)
        // console.log(`newDate ${newDate}, firstDate ${firstDate}`)
        firstDate = new Date(newDate);
    }
    document.querySelector('#thursdays').innerText = `${thursday} Thursdays.`;
    document.querySelector('#the20ths').innerText = `${the20th} The 20ths.`;
    document.querySelector('#thursdayThe20ths').innerText = `${thursday20th} Thursday The 20ths.`;
    console.log(`The 20ths: ${the20th}, Thursdays: ${thursday}, Thursday the 20ths: ${thursday20th}`)
    // now I need to make the function fill in the H1s on the page
    // if date[i][dayOfWeek] = "Thursday" && date[i][day] = 20, console.log("Thursday the 20th!")
    // if date[i][dayOfWeek] = "Thursday", console.log("Thursday")
    // if date[i][day] = 20, console.log("the 20th!")
}
