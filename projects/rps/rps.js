

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

//Greets player with alert and instructions
alert("Choose Rock, Paper, or Scissors by pressing the 'Rock', 'Paper', or 'Scissor' button");

var result = "";
var userScore = 0;
var computerScore = 0;
var tieScore = 0;
var userWins = "<p>You win!</p>";
var computerWins = "<p>The Computer wins!</p>";
var tie = "<p>It's a tie!</p>";
var roundCounter = 1;


function rockChoice() {
   userChoice = "Rock";
   console.log("Chose Rock");
  gameRound();
}

function paperChoice() {
  userChoice = "Paper";
  console.log("Chose Paper");
  gameRound();
}

function scissorsChoice() {
  userChoice = "Scissors"
  console.log("Chose Scissors");
  gameRound();
}


function gameRound(computerChoice) {
    var userChoice = ""
    var rng = Math.random();
    var computerChoice = "";
    var output = document.querySelector('#results');

    if (rng > 0.66) {
        computerChoice = "Paper";
        console.log("Comp Paper");
    } else if (rng > 0.33) {
        computerChoice = "Scissors";
        console.log("Comp Scissors");
    }
    else {
      computerChoice = "Rock";
      console.log("Comp Rock");
    }


    if (userChoice !== computerChoice) {
        if (userChoice === "Rock") {
            if (computerChoice === "Scissors") {
                output.innerHTML = userWins;
                userScore ++;
            } else {
                output.innerHTML = computerWins;
                computerScore ++;
            }
        } else if (userChoice === "Paper") {
            if (computerChoice === "Rock") {
                output.innerHTML = userWins;
                userScore ++;
            } else {
                output.innerHTML = computerWins;
                computerScore ++;
            }
        } else if (userChoice === "Scissors") {
            if (computerChoice === "Paper") {
                output.innerHTML = userWins;
                userScore ++;
            } else {
                output.innerHTML = computerWins;
                computerScore ++;
            }
        }
    } else {
        output.innerHTML = tie;
        tieScore ++;
    }
};

 // var output = document.querySelector('#results');

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
