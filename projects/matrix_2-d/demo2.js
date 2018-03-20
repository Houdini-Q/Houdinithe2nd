
var canvas = document.getElementById("space_box");
var c = canvas.getContext("2d");
console.log("Got it");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var font_size = 20;
var columns = canvas.width/font_size;
var drops = 100;
var size = 1;
var fl = canvas.width;
var centerX = canvas.width/2;
var centerY = canvas.height/2;
var x = Math.random() * canvas.width;
var y = Math.random() * canvas.height;
var z = Math.random() * canvas.width;

for (var i = 0; i < drops; i++) {
  matrix = new Matrix();
}

c.fillStyle = "rgba(0, 0, 0, 1)";
c.fillRect(0, 0, canvas.width, canvas.height);



var matrix = ["゠", "ァ", "ア", "ィ", "イ", "ゥ", "ウ", "ェ", "エ", "ォ", "オ", "カ", "ガ", "キ", "ギ", "ク", "グ", "ケ", "ゲ", "コ", "ゴ", "サ", "ザ", "シ", "ジ", "ス", "ズ", "セ", "ゼ", "ソ", "ゾ", "タ", "ダ", "チ", "ヂ", "ッ", "ツ", "ヅ", "テ", "デ", "ト", "ド", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "バ", "パ", "ヒ", "ビ", "ピ", "フ", "ブ", "プ", "ヘ", "ベ", "ペ", "ホ", "ボ", "ポ", "マ", "ミ", "ム", "メ", "モ", "ャ", "ヤ", "ュ", "ユ", "ョ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ヮ", "ワ", "ヰ", "ヱ", "ヲ", "ン", "ヴ", "ヵ", "ヶ", "ヷ", "ヸ", "ヹ", "ヺ", "・", "ー", "ヽ", "ヾ", "ヿ"];

var text = matrix[Math.floor(Math.random() * matrix.length)];

function Matrix() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.z = Math.random() * canvas.width;
}

this.draw = function() {

  x = Math.random() * canvas.width;
  y = Math.random() * canvas.height;
  z = Math.random() * canvas.width;

for (var i = 0; i < drops; i++) {
  matrix = new Matrix();
}

  var x, y, s;
  x = (this.x - centerX) * (fl/this.z);
  x = x + centerX;

  y = (this.y - centerY) * (fl/this.z);
  y = y + centerY;

  s = size * (fl/this.z);

  c.font = '20px Georgia';
  c.fillStyle = "rgba(0, 255, 70, 1)";
  c.fillText(text, x, y, z);
  c.fill();


  }


this.draw();
