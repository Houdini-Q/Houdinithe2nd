var canvas = document.querySelector(".c");
var c = canvas.getContext("2d");

//making the canvas full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = "゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿ";
//converting the string into an array of single characters
matrix = matrix.split("");

var font_size = 13;
var columns = canvas.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = Math.random(1)*-30;

// Z, Y, X values
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var z = Math.random() * innerWidth;

//drawing the characters
function drawMatrix() {
	//Black BG for the canvas
	//translucent BG to show trail
	c.fillStyle = "rgba(0, 0, 0, 0.05)";
	c.fillRect(0, 0, canvas.width, canvas.height);

	c.fillStyle = "rgba(0, 255, 40, 1)"; //green text
	c.font = font_size + "px arial";

	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{

		//a random chinese character to print
		var text = matrix[Math.floor(Math.random()*matrix.length)];
		// x = i*font_size, y = value of drops[i]*font_size
		c.fillText(text, i*font_size, drops[i]*font_size);

		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > canvas.height && Math.random(0) > .975)
			drops[i] = 0;

		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(drawMatrix, 33);
