// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function cityCounter(totalPop, growth){
    // pop is a number, a count that is measured up to
    // growth is 1 + a percentage that the number grows by
    let count = 0,
        arr = [],
        map = {},
        x = 0,
        y = 0
        accPop = 0;
    for(let i = 1; accPop < totalPop; i++){
        arr.push([i, accPop, x, y])
        accPop = accPop + growth
        if (i % 2 == 0){
            x++
        }
        if (i % 2){
            y++
        }
    }
    console.log(count, arr, arr[arr.length-1])
}

cityCounter(1000, 1.25)
// 6/18/25 pausing, got the pop growth formula, but now I need to figure how to iterate over location

//  6/18/25 changed i to act as a primary key, population is a different field. basic x & y iteration added

// 6/19/25 sad girl hours
