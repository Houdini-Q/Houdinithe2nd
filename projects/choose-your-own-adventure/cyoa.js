

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

$(window).bind("load", function() {
   // code here

  var output = document.querySelector('#begin');

    firstName = prompt("Before we begin this game, for starters I must ask you, what is your first name?") || "Visitor";
    lastName = prompt("What's your last name?") || "";

output.innerHTML = "<p>Welcome to your adventure, " + firstName + " " + lastName + ". Now let us begin!</p>";
});

  function matrix() {

  var response = prompt(firstName + ", you walk into a dim, cozy, fire lit room. There is a comfortable looking leather chair and a wooden table. You are eager to sit down so you do. But once you do you notice on the table that there is a glass of water. And infront of the glass is a red pill, and a blue pill. For some odd reason you are compelled to take one of the pills. If you take the blue pill the adventure simply ends and you are removed from the game. If you take the red pill...well as you should know, you stay in wonderland and you will see how deep the rabbit hole goes. Type 'blue' to take the blue pill, type 'red' to take the red pill.");

  if(response === "red") {
      response = prompt("After taking the red pill you begin to feel fuzzy. Your skin feels hot and your vision becomes blurry. You look at the wall and it begins to fold and twist as your reality bends. You stand up and close your eyes for a moment which somehow works as a rememdy and you regain your grip on reality. But when you look forward the table is gone. There is nothing but two doors. A door on the right and a door on the left. The door on the left has 'The Real World' written on it. The door on the right has 'The Matrix' written on it. Type 'left' to enter the door on the left. Type 'right' to enter the door on the right"); {

        if(response === "left") {
          response = alert("You enter the left door and after your first step you plummet into darkness. The fall causes you to close your eyes and brace for hitting the bottom but you can feel something tugging against the back of your neck. You open your eyes and you have stopped falling. You are now upon the ship called the Exodus. You look around and your best friend has just unplugged you from the matrix. Your friend congratulates you for making it out of the matrix and into the real world unharmed.");
        } else if (response === "right") {
          response = prompt("You enter the door on the right and after your first step the door vanishes from behind you. The space around you is all white and suddenly a table with two weapons appear before you with instructions. The instructions tell you to prepare yourself for a fight against the Agent known as Nero. The two weapons on the table are a Katana, and an Assualt Rifle. Type 'sword' to equip yourself with the katana. Type 'gun' to equip yourself with the assault rifle.");  {

            if(response === "sword") {
              response = prompt();
            } else if (response === "gun") {
              response = prompt();
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
