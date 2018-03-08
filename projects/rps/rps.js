

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.nav-rps')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var result = "";
var userScore = 0;
var computerScore = 0;
var tieScore = 0;


// if computer wins - computer score ++;
//
// if user wins - userScore ++;

// var gameRound = function() {
//
// }

// while (1 < 5) {
// gameRound()
// if (userScore === 3){
// console.log("userWins")
// result = "You Win!"
// break
// } else if (computerScore === 3) {
// console.log("computerWins")
// result = "Computer Wins"
// break
// } else {gameRound()}
// }
//
// var output = document.querySelector('#results');
//
// output.innerHTML = "<p>"result"</p>";


var userWins = "You win!";
var computerWins = "The Computer wins!";
var ties = "It's a tie!"
var roundCounter = 0;

var rock = function() {

}
var gameRound = function() {
    var userChoice = prompt("Choose Rock, Paper, or Scissors by typing 'R', 'P', or 'S'");
    var rng = Math.random();
    var computerChoice = "R";

    if(rng > 0.66) {
        computerChoice = "P";
    } else if (rng > 0.33) {
        computerChoice = "S";
    }

    if(computerChoice !== userChoice){
        if(computerChoice === "R"){
            if (userChoice === "S") {
                alert(computerWins);
                computerScore ++;
            } else {
                alert(userWins);
                userScore ++;
            }
        } else if (computerChoice === "P") {
            if( userChoice === "R") {
                alert(computerWins);
                computerScore ++;
            } else {
                alert(userWins);
                userScore ++;
            }
        } else {
            if( userChoice === "P") {
                alert(computerWins);
                computerScore ++;
            } else {
                alert(userWins);
                userScore ++;
            }
        }
    } else {
        alert('Tie!');
        tieScore ++;
    }
};

//while (roundCounter < 5) {
//     gameRound();
//     roundCounter++;
// }
var output = document.querySelector('#results');

while (roundCounter < 5) {
gameRound();
roundCounter++;
if (userScore === 3){
console.log("userWins");
output.innerHTML = "<p>You Win!</p>";
break
} else if (computerScore === 3) {
console.log("computerWins");
output.innerHTML = "<p>The Computer Wins!</p>";
break
} else if (computerScore === 2 && userScore === 2 && tieScore < 1) {
  console.log("ties");
  output.innerHTML = "<p>It is a tie!</p>";
break
} else {gameRound();}
};
