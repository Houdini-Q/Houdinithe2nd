//
//
// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
//
// // Close the dropdown if the user clicks outside of it
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
var bt = document.querySelector('.buttonp');
//Greets player with alert and instructions
alert("Choose Rock, Paper, or Scissors by pressing the 'Rock', 'Paper', or 'Scissor' button");


function generate(e) {
  var userWins = "<p>You win!</p>";
  var computerWins = "<p>The Computer wins!</p>";
  var tie = "<p>It's a tie!</p>";
  var btnClicked = e.target;
  var userChoice = btnClicked.id;
  var compOptions = [
    "rock",
    "paper",
    "scissors"
  ];


  var randomNum = Math.floor(Math.random() * 3);
  var compChoice = compOptions[randomNum];
  var output = document.querySelector('#results');


  switch(userChoice) {
    case "rock":
      if(compChoice === "paper") {
        output.innerHTML = computerWins;
      } else if(compChoice === "scissors") {
        output.innerHTML = userWins;
      } else if(compChoice === "rock") {
        output.innerHTML = tie;
      }
    break;

    case "paper":
    if(compChoice === "paper") {
      output.innerHTML = tie;
    } else if(compChoice === "scissors") {
      output.innerHTML = computerWins;
    } else if(compChoice === "rock") {
      output.innerHTML = userWins;
    }
    break;
    case "scissors":
    if(compChoice === "paper") {
      output.innerHTML = userWins;
    } else if(compChoice === "scissors") {
      output.innerHTML = tie;
    } else if(compChoice === "rock") {
      output.innerHTML = computerWins;
    }
    break;
  }
}

bt.addEventListener('click', function(e) {
    e.preventDefault();
    generate(e);

  }, false);
