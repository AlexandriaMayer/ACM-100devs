//Create a stopwatch object that has four properties and three methods

let stopwatch = {}
    stopwatch.brand= "V Sauce",
    stopwatch.color= "Purple",
    stopwatch.owner= "Tsukasa Hiiragi",
    stopwatch.type= "digital",
    stopwatch.Year_bought= 2007,
    stopwatch.time="00:00:00.00"
    stopwatch.start= function(){
        console.log("Go!")
    }
    stopwatch.stop = function(){
        console.log(`Stopping at ${time}`)
    }

    // Stopwatch description
    describe();{
        return `This stopwatch is a ${color} ${brand} ${type} model, owned by ${owner} since ${this.Year_bought}.`;}
    stopwatch.tellltime(time);{
        console.log(`The time is ${time}`)
    }
