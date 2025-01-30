const rps = (p1, p2) => {
  // mandatory viewing: https://youtu.be/WhquiIVkVww?si=RSlmWi4RUij3AUJW
  if (p1 === p2){
    return "Draw!"
  } else if ((p1 === "scissors" && p2 === "paper") || 
             (p1 === "rock" && p2 === "scissors") ||
             (p1 === "paper" && p2 === "rock")){
    return "Player 1 won!"}
    else{
      return "Player 2 won!"
    }
};
