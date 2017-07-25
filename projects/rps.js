var userChoice = prompt ("Choose Rock, Paper, Scissors by typing 'R', 'P', or 'S'");
var rngRoyals = Math.random();  //random number generator
var computerChoice = "R";
if(rngRoyals > 0.66){
  computerChoice = "P";
} else if (rngRoyals > 0.33) {
  computerChoice = "S";
}
var userWins = "Royals win!";
var computerWins = "Royals lose.";
if(computerChoice !== userChoice){ //check to see if it's not a tie
  if(computerChoice === "R"){
    if (userChoice === "S"){
      alert(computerWins);
    } else {
      alert(userWins);
    }
  }
  else if (computerChoice === "P") {
    if (userChoice === "R") {
      alert(computerWins);
    } else {
      alert(userWins);
    }
  }
  else {
    if( userChoice === "P") {
      alert(computerWins);
    } else {
      alert(userWins);
    }
  }
} else {
    alert('Tie goes to the runner!');
}
