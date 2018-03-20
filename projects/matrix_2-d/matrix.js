var canvas = document.querySelector(".c");
var c = canvas.getContext("2d");

//making the canvas full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var rain = function() {

  if (y >= canvas.height) {
    y = 0;
  } else {
    y += speed;
  }
}
//katakana characters - taken from the unicode charset
var matrix = ["゠", "ァ", "ア", "ィ", "イ", "ゥ", "ウ", "ェ", "エ", "ォ", "オ", "カ", "ガ", "キ", "ギ", "ク", "グ", "ケ", "ゲ", "コ", "ゴ", "サ", "ザ", "シ", "ジ", "ス", "ズ", "セ", "ゼ", "ソ", "ゾ", "タ", "ダ", "チ", "ヂ", "ッ", "ツ", "ヅ", "テ", "デ", "ト", "ド", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "バ", "パ", "ヒ", "ビ", "ピ", "フ", "ブ", "プ", "ヘ", "ベ", "ペ", "ホ", "ボ", "ポ", "マ", "ミ", "ム", "メ", "モ", "ャ", "ヤ", "ュ", "ユ", "ョ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ヮ", "ワ", "ヰ", "ヱ", "ヲ", "ン", "ヴ", "ヵ", "ヶ", "ヷ", "ヸ", "ヹ", "ヺ", "・", "ー", "ヽ", "ヾ", "ヿ"];
var size = 1;
var fl = canvas.width;
var centerX = canvas.width/2;
var centerY = canvas.height/2;



var font_size = 13;
var columns = canvas.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var i = 0; i < columns; i++)
	drops[i] = Math.random(1)*-30;

// Z, Y, X values
var x = Math.random() * canvas.width;
var y = Math.random() * canvas.height;
var z = Math.random() * canvas.width;

//drawing the characters
function drawMatrix() {
	//Black BG for the canvas
	//translucent BG to show trail
	c.fillStyle = "rgba(0, 0, 0, 0.05)";
	c.fillRect(0, 0, canvas.width, canvas.height);

	c.fillStyle = "rgba(0, 255, 40, 1)"; //green text
	c.font = font_size + "px arial";

	var x = Math.random() * canvas.width;
	var y = Math.random() * canvas.height;
	var z = Math.random() * canvas.width;


	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{

		var x, y, s;

		x = (this.x - centerX) * (fl/this.z);
		x = x + centerX;

		y = (this.y - centerY) * (fl/this.z);
		y = y + centerY;

		s = size * (fl/this.z);

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
