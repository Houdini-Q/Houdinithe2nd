

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


alert("Choose Rock, Paper, or Scissors by pressing the 'Rock', 'Paper', or 'Scissor' button");

var userWins = "<p>You win!</p>";
var computerWins = "<p>The Computer wins!</p>";
var tie = "<p>It's a tie!</p>";
var roundCounter = 0;


function rockChoice() {
  userChoice = "Rock";
  // computerChoice = "";
  console.log("Chose Rock");
  gameRound();
}

var paperChoice = function() {
  userChoice = "Paper";
  console.log("Chose Paper");
  gameRound();
}

var scissorsChoice = function() {
  userChoice = "Scissors"
  console.log("Chose Scissors");
  gameRound();
}

var gameRound = function() {
    var userChoice = "";
    var rng = Math.random();
    var computerChoice = "Rock";

    if (rng > 0.99) {
      computerChoice = "Rock";
      console.log("Comp Rock");
    } else if (rng > 0.66) {
        computerChoice = "Paper";
        console.log("Comp Paper");
    } else if (rng > 0.33) {
        computerChoice = "Scissors";
        console.log("Comp Scissors");
    }

    if (computerChoice !== userChoice) {
        if (computerChoice === true) {
            if (userChoice === "Scissors") {
                output.innerHTML = computerWins;
                computerScore ++;
            } else if (userChoice === "Paper") {
                output.innerHTML = userWins;
                userScore ++;
            }
        } else if (computerChoice === "Paper") {
            if ( userChoice === "Rock") {
                output.innerHTML = computerWins;
                computerScore ++;
            } else {
                output.innerHTML = userWins;
                userScore ++;
            }
        } else {
            if( userChoice === "Paper") {
                output.innerHTML = computerWins;
                computerScore ++;
            } else {
                output.innerHTML = userWins;
                userScore ++;
            }
        }
    } else {
        output.innerHTML = tie;
        tieScore ++;
    }
};


var output = document.querySelector('#results');

// while (roundCounter < 5) {
// gameRound();
// roundCounter++;
// if (userScore === 3){
// console.log("userWins");
// output.innerHTML = "<p>You Win!</p>";
// break
// } else if (computerScore === 3) {
// console.log("computerWins");
// output.innerHTML = "<p>The Computer Wins!</p>";
// break
// } else if (computerScore === 2 && userScore === 2 && tieScore < 1) {
//   console.log("ties");
//   output.innerHTML = "<p>It is a tie!</p>";
// break
// } else {gameRound();}
// };

// $("#rocky").on("click", rockChoice());
// $("#papery").on("click", paperChoice());
// $("#scissory").on("click", scissorsChoice());
