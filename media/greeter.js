// alerts a greeting based on name.

alert('Welcome to my petty page!');

var name = prompt('What is your name?');

var checkName = function() {
  if (name === "" || name === "null") {
    name = prompt('What is your name, for real this time?');
    checkName();
  } else {
    alert('Hello ' + name + ".");
  }
}

checkName(); // kicks off the name-checking the first time

var age = prompt('How old are you ' + name + '?');

var checkAge = function() {
  if (!parseInt(age, 10)) {
    age = prompt ("C'mon, just tell us your age!");
    checkAge();
  } // Check to see if input is not a number
  else {
    alert('Great ' + name + '! You are ' + age + ' years old!');
  }
}

checkAge();

alert("Okay, so now it's time for a little knock, knock joke...");

alert("Knock-knock!");

alert("Who's there?");

alert("Nanna...");

alert("Nanna who???");

alert("Nanna yo business!");
