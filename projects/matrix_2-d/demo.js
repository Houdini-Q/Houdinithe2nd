

var canvas = document.getElementById('space_box');
// var canvas = document.querySelector('.c')
var c = canvas.getContext('2d');

// var matrix = ["゠", "ァ", "ア", "ィ", "イ", "ゥ", "ウ", "ェ", "エ", "ォ", "オ", "カ", "ガ", "キ", "ギ", "ク", "グ", "ケ", "ゲ", "コ", "ゴ", "サ", "ザ", "シ", "ジ", "ス", "ズ", "セ", "ゼ", "ソ", "ゾ", "タ", "ダ", "チ", "ヂ", "ッ", "ツ", "ヅ", "テ", "デ", "ト", "ド", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "バ", "パ", "ヒ", "ビ", "ピ", "フ", "ブ", "プ", "ヘ", "ベ", "ペ", "ホ", "ボ", "ポ", "マ", "ミ", "ム", "メ", "モ", "ャ", "ヤ", "ュ", "ユ", "ョ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ヮ", "ワ", "ヰ", "ヱ", "ヲ", "ン", "ヴ", "ヵ", "ヶ", "ヷ", "ヸ", "ヹ", "ヺ", "・", "ー", "ヽ", "ヾ", "ヿ"];

var innerWidth = window.innerWidth - 20,
    innerHeight = window.innerHeight - 20,
    radius = 1,
    starsIndex = 0,
    stars = [],
    TWO_PI = Math.PI*2,
    centerX = innerWidth/2,
    centerY = innerHeight/2,
    focalLength = 100,
    starRadius = null,
    starX = null,
    starY = null,
    numStars = 2000,
    mouse = {},
    starX_dir = 0,
    starY_dir = 0;

// var text = matrix[Math.floor(Math.random() * matrix.length)]
  // stars.push(text);

    canvas.width = innerWidth;
    canvas.height = innerHeight;


// Move the stars with mouse pointer

window.addEventListener('mousemove', function(e){
  mouse.x = e.x;
  mouse.y = e.y;

  if(mouse.x < centerX){
    starX_dir += 5;
  }else{
    starX_dir += -5;
  }

  if(mouse.y < centerY){
    starY_dir += 5;
  }else{
    starY_dir += -5;
  }

});

// Zoom in/out into the Space on mouse scroll
canvas.addEventListener('mousewheel', function(e){
  if(e.deltaY < 0){
    focalLength *= 1.1;
  }else{
    focalLength /= 1.1;
  }

  if(focalLength >= innerWidth){
    focalLength = innerWidth - 20;
  }else if(focalLength < 100){
    focalLength = 100;
  }

}, false);


// Function for create new start
function star(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.radius = radius;
    this.color = "rgba(0, 255, 70, 1)";
    starsIndex++;
    stars[starsIndex] = this;
    this.id = starsIndex;


    // Animate Stars
    this.update = function(){
      starX = (this.x - centerX) * (focalLength / this.z);
      starX += centerX;

      starY = (this.y - centerY) * (focalLength / this.z);
      starY += centerY;

      starRadius = radius * (focalLength / this.z);

      starX += starX_dir;
      starY += starY_dir;

      this.z += -10;

      if(this.z <= 0){
         this.z = parseInt(innerWidth);
      }

      this.draw();

    }

    // Function for draw star
    this.draw = function(){
        c.beginPath();
        // c.font = '20px Georgia';
        c.arc(starX,starY,starRadius, TWO_PI, false);
        // c.fillText(stars, x, y, z);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }

}

// X,Y,Z values
var s;
for(s = 0; s < numStars; s++){
    x = Math.random() * innerWidth;
    y = Math.random() * innerHeight;
    z = Math.random() * innerWidth;
    new star(stars,x,y,z);
}

// Function for animate canvas objects
function animate(){
   requestAnimationFrame(animate);
    c.fillStyle = "#000";
    c.fillRect(0,0,innerWidth,innerHeight);

    for( var i in stars){
      stars[i].update();
    }
}

animate();
