

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.nav-cyoa')) {

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

var firstName;
var lastName;

function setButtonText() {
  var change = document.getElementById("toggle");
  if (change.innerHTML === "Start Game")
  {
    change.innerHTML = "System Failure";
  }

  setTimeout(function() { matrix(); }, 1000);

}



  function matrix() {

    $(window).bind("load", function() {
       // code here

      var output = document.querySelector('#begin');

        firstName = prompt("Before we begin this game, for starters I must ask you, what is your first name?") || "Visitor";
        lastName = prompt("What's your last name?") || "";

    output.innerHTML = "<p>Welcome to your adventure, " + firstName + " " + lastName + ". Now let us begin!</p>";
    });

  var response = prompt(firstName + ", you walk into a dim, cozy, fire lit room. There is a comfortable looking leather chair and a wooden table. You are eager to sit down so you do. But once you do you notice on the table that there is a glass of water. And infront of the glass is a red pill, and a blue pill. For some odd reason you are compelled to take one of the pills. If you take the blue pill the adventure simply ends and you are removed from the game. If you take the red pill...well as you should know, you stay in wonderland and you will see how deep the rabbit hole goes. Type 'blue' to take the blue pill, type 'red' to take the red pill.");

  if(response === "red") {
      response = prompt("After taking the red pill you begin to feel fuzzy. Your skin feels hot and your vision becomes blurry. You look at the wall and it begins to fold and twist as your reality bends. You stand up and close your eyes for a moment which somehow works as a rememdy and you regain your grip on reality. But when you look forward the table is gone. There is nothing but two doors. A door on the right and a door on the left. The door on the left has 'The Real World' written on it. The door on the right has 'The Matrix' written on it. Type 'left' to enter the door on the left. Type 'right' to enter the door on the right"); {

        if(response === "left") {
          response = alert("You enter the left door and after your first step you plummet into darkness. The fall causes you to close your eyes and brace for hitting the bottom but you can feel something tugging against the back of your neck. You open your eyes and you have stopped falling. You are now upon the ship called the Exodus. You look around and your best friend has just unplugged you from the matrix. Your friend congratulates you for making it out of the matrix and into the real world unharmed.");
        } else if (response === "right") {
          response = prompt("You enter the door on the right and after your first step the door vanishes from behind you. The space around you is all white and suddenly a table with two weapons appear before you with instructions. The instructions tell you to prepare yourself for a fight against the Agent known as Nero. The two weapons on the table are a Katana, and a Handgun. Type 'sword' to equip yourself with the katana. Type 'gun' to equip yourself with the handgun.");  {

            if(response === "sword") {
              response = prompt("You pick up the sword and sheath it into a bokken on your back. A new door appears and you enter it. You find yourself standing infront of Agent Nero and next to him is an innocent potential, bounded in a steel chair, whom you need to save from the Agent. The door is still behind you however. Now it is time to test your courage and your blade. Type 'fight' to duel the agent and attempt to save the potential. Type 'run' to flee back inside the door.");  {

                if(response === "fight")  {
                 response = alert("All you can think about is saving the kid and you place all of your focus on the task before you. Heroically, you dash forward, drawing your sword with a blinding god-like speed. The Agent rushes forward as well. You both collide into a series of attacks, defensive maneuvers and combinations, but in the end you manage to strike the Agent in the chest, ultimately defeating him. You watch in satisfaction as he dissapates back into Matrix Code. And with a victorious smirk on your face you head over to the potential and release him from the chair. Together you head back to the door and enter it. Your eyes are forced shut, but when you open them you are awake in the real world and greeting you are the citizens of Zion. Congratulations you made it successfully out of the matrix, defeated an Agent which is a feat only the best fighters of Zion can do, and you saved another individual. You might actually have the gift of The One.");
                } else if  (response === "run") {
                response = alert("You begin to panic and in a cowardly fashion you run for the door. The Agent chases after you but right before he grabs your arm you shut the door closed. Your body is pulled back and everything goes blank. Your eyes are forced closed but you quickly open them and find yourself awake, lying in the bed on a ship in the real world.");
                } else {
                  alert("Please type in a valid input! Click 'Start Game' to try again.");
                }
              }

            } else if (response === "gun") {
              response = prompt("You pick up the gun and holster it on your hip. A new door appears and you enter it. You find yourself standing infront of Agent Nero and next to him is an innocent potential, bounded in a steel chair, whom you need to save from the Agent. The door is still behind you however. Now it is time to test your courage and your aim. Type 'fight' to duel the agent and attempt to save the potential. Type 'run' to flee back inside the door.");  {

                if(response === "fight") {
                  response = alert("All you can think about is saving the kid and you place all of your focus on the task before you. Like an old western cowboy you quickly draw yor handgun and fire round after round at the agent as accurately as possible. The Agent rushes forward as well with his gun blazing. You both are in an intense shootout and you are left with your last bullet in the chamber. You take a deep breath and try to focus even harder than you did before. Somehow time around you gradually slowed down and you suddenly became faster. You knew you only had one shot and had to make it count so you decided to get as close as possible. You rushed towards Agent Nero as he fired shots that narrowly missed you. Some even scraped against your skin, but in a leap of faith you dived gun first into the air and managed to cover the distance. Your gun now directly in the agents face, you fire, ultimately defeating him. You watch in satisfaction as he dissapates back into Matrix Code. And with a victorious smirk on your face you head over to the potential and release him from the chair. Together you head back to the door and enter it. Your eyes are forced shut, but when you open them you are awake in the real world and greeting you are the citizens of Zion. Congratulations you made it successfully out of the matrix, defeated an Agent which is a feat only the best fighters of Zion can do, and you saved another individual. You might actually have the gift of The One.");
                } else if (response === "run") {
                response = alert("You begin to panic and in a cowardly fashion you run for the door. The Agent chases after you but right before he grabs your arm you shut the door closed. Your body is pulled back and everything goes blank. Your eyes are forced closed but you quickly open them and find yourself awake, lying in the bed on a ship in the real world.");
                } else {
                  alert("Please type in a valid input! Click 'Start Game' to try again.");
                }
              }


            } else {
              alert("Please type in a valid input! Click 'Start Game' to try again.");
            }
          }
        } else {
          alert("Please type in a valid input! Click 'Start Game' to try again.");
        }
      };
  } else if (response === "blue") {
      response = alert("After taking the blue pill you begin to feel sleepy and you lay your head down to rest. After a couple of hours you wake up in your bedroom as if nothing ever happened.");
  } else {
      alert("Please type in a valid input! Click 'Start Game' to try again.");
  }

    var change = document.getElementById("toggle");
    if (change.innerHTML = "System Failure")
    {
      change.innerHTML = "Start Game";
    }
  }
