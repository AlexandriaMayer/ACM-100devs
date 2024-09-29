console.log("private property? in my program?")

function Stopwatch(){
    let startTime, endTime, running, duration = 0;
    this.start = function(){
        if (running)
            throw new Error('Stopwatch has already started');
        running = true;
        startTime = new Date();
    };
    this.stop = function(){
        if (!running)
            throw new Error('Stopwatch is not running');
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime())/ 100;
        duration += seconds;
    };
    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
    Object.defineProperty(this, 'duration', {
        get: function(){return duration;}
    });
}

// I had to look up the solution. ugh my brain doesn't want to brain today

//const sw = new Stopwatch(){
    // ok how to count time in JS?

    // stop.  throw Error() if hit twice
    // reset
//}
const startError = new Error("Stopwatch is already running")
