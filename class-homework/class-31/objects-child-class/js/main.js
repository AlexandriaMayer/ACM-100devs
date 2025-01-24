//Create an a class and extend it - Can be anything you would like it to be! 

class Streamer{
    constructor(game){
        this.game = game
    }
    letsPlay(game){
        console.log()
    }
}

class BeagsAndJam extends Streamer{
    constructor(game, day){
        super(game)
        this.day = day
    }
    gameDay(day, game){
            console.log(`I stream ${game} on ${day}`)}

}
let thursday = new BeagsAndJam("XCOM","Thursday")
// okay this class doesn't make sense.