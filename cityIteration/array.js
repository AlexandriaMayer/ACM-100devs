// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function cityCounter(pop, growth){
    // pop is a number, a count that is measured up to
    // growth is 1 + a percentage that the number grows by
    let count = 0,
        arr = [],
        map = {},
        x = 0,
        y = 0;
    for(let i = 100; i < pop; 0){
        arr.push([i, x, y])
        i = i + growth
    }
    console.log(count, arr, arr[arr.length-1])
}

cityCounter(1000, 1.25)

// pausing, got the pop growth formula, but now I need to figure how to iterate over location
