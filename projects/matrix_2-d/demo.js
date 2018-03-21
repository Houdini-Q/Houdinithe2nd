
var canvas = document.getElementById('space_box');
var c = canvas.getContext('2d');

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

var innerWidth = window.innerWidth - 0,
    innerHeight = window.innerHeight - 0,
    symbolsIndex = 0,
    symbols = [],
    centerX = innerWidth/2,
    centerY = innerHeight/2,
    focalLength = 2000,
    symbolX = null,
    symbolY = null,
    numSymbols = 400,
    mouse = {},
    symbolX_dir = 0,
    symbolY_dir = 0;

  var FPS = 30;
  var isPlaying = true;

    canvas.width = innerWidth;
    canvas.height = innerHeight;


// Move the stars with mouse pointer

window.addEventListener('mousemove', function(e){
  mouse.x = e.x;
  mouse.y = e.y;

  if (mouse.x < centerX) {
    symbolX_dir += 5;
  } else {
    symbolX_dir += -5;
  }

  if (mouse.y < centerY) {
    symbolY_dir += 5;
  } else {
    symbolY_dir += -5;
  }

});

// Zoom in/out into the Space on mouse scroll
canvas.addEventListener('mousewheel', function(e) {
  if (e.deltaY < 0) {
    focalLength *= 1.1;
  } else {
    focalLength /= 1.1;
  }

  if(focalLength >= innerWidth){
    focalLength = innerWidth - 20;
  } else if (focalLength < 100) {
    focalLength = 100;
  }

}, false);


// Function for create new star
function symbol(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.color = "rgba(0, 255, 50, 1)";
    symbolsIndex++;
    symbols[symbolsIndex] = this;
    this.id = symbolsIndex;

    // Animate Stars
    this.update = function(){
      symbolX = (this.x - centerX) * (focalLength / this.z);
      symbolX += centerX;

      symbolY = (this.y - centerY) * (focalLength / this.z);
      symbolY += centerY;



      symbolX += symbolX_dir;
      symbolY += symbolY_dir;

      this.z += -10;

      if(this.z <= 0){
         this.z = parseInt(innerWidth);
       }
      this.draw();
    }

    // Function for draw star
    this.draw = function(){

      var matrix = ["゠", "ァ", "ア", "ィ", "イ", "ゥ", "ウ", "ェ", "エ", "ォ", "オ", "カ", "ガ", "キ", "ギ", "ク", "グ", "ケ", "ゲ", "コ", "ゴ", "サ", "ザ", "シ", "ジ", "ス", "ズ", "セ", "ゼ", "ソ", "ゾ", "タ", "ダ", "チ", "ヂ", "ッ", "ツ", "ヅ", "テ", "デ", "ト", "ド", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "バ", "パ", "ヒ", "ビ", "ピ", "フ", "ブ", "プ", "ヘ", "ベ", "ペ", "ホ", "ボ", "ポ", "マ", "ミ", "ム", "メ", "モ", "ャ", "ヤ", "ュ", "ユ", "ョ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ヮ", "ワ", "ヰ", "ヱ", "ヲ", "ン", "ヴ", "ヵ", "ヶ", "ヷ", "ヸ", "ヹ", "ヺ", "・", "ー", "ヽ", "ヾ", "ヿ"];

      var text = matrix[Math.floor(Math.random() * matrix.length)];

        c.font = '20px Georgia';
        c.fillStyle = this.color;
        c.fillText(text, symbolX, symbolY);
        c.fillStyle = this.color;
        c.fillText(text, symbolX, symbolY);
        c.fillStyle = this.color;
        c.fillText(text, symbolX, symbolY);
  }
}

// X,Y,Z values
var s;
for(s = 0; s < numSymbols; s++){
    x = Math.random() * innerWidth;
    y = Math.random() * innerHeight;
    z = Math.random() * innerWidth;
    new symbol(x,y,z);
}

function animate() {
    if (isPlaying) setTimeout(animate, 1000 / FPS);
    c.fillStyle = "rgba(0, 0, 0, 0.20)";
    c.fillRect(0,0,innerWidth,innerHeight);





    for( var i in symbols){
      symbols[i].update();
    }
}

animate();
