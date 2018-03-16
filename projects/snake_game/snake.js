

var button = document.getElementById('Start');

  button.addEventListener('click', function(e) {
      e.preventDefault();
      startGame(e);
    });


function startGame(e) {

var score = 0;              // Score
var gameover = true;        // Game is over
var gameovertime = 1;       // How long we have been game over
var gameoverdelay = 0.5;    // Waiting time after game over

var draw = function(snakeToDraw, apple) {
  var drawableSnake = { color: "green", pixels: snakeToDraw };
  var drawableApple = { color: "red", pixels: [apple] };
  var drawableObjects = [drawableSnake, drawableApple];
  CHUNK.draw(drawableObjects);
}

var moveSegment = function(segment) {
  switch(segment.direction) {
    case "down":
      return { top: segment.top + 1, left: segment.left };
    case "up":
      return { top: segment.top - 1, left: segment.left };
    case "right":
      return { top: segment.top, left: segment.left + 1 }
    case "left":
      return { top: segment.top, left: segment.left - 1 }
    default:
      return segment;
  }
}

var segmentFurtherForwardThan = function(index, snake) {
  return snake[index - 1] || snake[index];
}

var moveSnake = function(snake) {
  return snake.map(function(oldSegment, segmentIndex) {
    var newSegment = moveSegment(oldSegment);
    newSegment.direction = segmentFurtherForwardThan(segmentIndex, snake).direction;
    return newSegment;
  });
}

var growSnake = function(snake) {
  var tipOfTailIndex = snake.length - 1;
  var tipOfTail = snake[tipOfTailIndex];
  snake.push({ top: tipOfTail.top, left: tipOfTail.left });
  return snake;
}

var ate = function(snake, otherThing) {
  var head = snake[0];
  return CHUNK.detectCollisionBetween([head], otherThing);
}

var advanceGame = function() {
  var newSnake = moveSnake(snake);

  if (ate(newSnake, snake)) {
    CHUNK.endGame();
    CHUNK.flashMessage("Whoops! You ate yourself!");
    gameover = true;
  }

  if (ate(newSnake, [apple])) {
    newSnake = growSnake(newSnake);
    apple = CHUNK.randomLocation();
    score++;
  }

  if (ate(newSnake, CHUNK.gameBoundaries())) {
    CHUNK.endGame();
    CHUNK.flashMessage("Whoops! You hit a wall!");
    gameover = true;
  }

  // Draw the snake
    function drawSnake() {
        // Loop over every snake segment
        for (var i=0; i<snake.segments.length; i++) {
            var segment = snake.segments[i];
            var segx = segment.x;
            var segy = segment.y;
            var tilex = segx*level.tilewidth;
            var tiley = segy*level.tileheight;

            // Sprite column and row that gets calculated
            var tx = 0;
            var ty = 0;

            if (i == 0) {
                // Head; Determine the correct image
                var nseg = snake.segments[i+1]; // Next segment
                if (segy < nseg.y) {
                    // Up
                    tx = 3; ty = 0;
                } else if (segx > nseg.x) {
                    // Right
                    tx = 4; ty = 0;
                } else if (segy > nseg.y) {
                    // Down
                    tx = 4; ty = 1;
                } else if (segx < nseg.x) {
                    // Left
                    tx = 3; ty = 1;
                }
            } else if (i == snake.segments.length-1) {
                // Tail; Determine the correct image
                var pseg = snake.segments[i-1]; // Prev segment
                if (pseg.y < segy) {
                    // Up
                    tx = 3; ty = 2;
                } else if (pseg.x > segx) {
                    // Right
                    tx = 4; ty = 2;
                } else if (pseg.y > segy) {
                    // Down
                    tx = 4; ty = 3;
                } else if (pseg.x < segx) {
                    // Left
                    tx = 3; ty = 3;
                }
            } else {
                // Body; Determine the correct image
                var pseg = snake.segments[i-1]; // Previous segment
                var nseg = snake.segments[i+1]; // Next segment
                if (pseg.x < segx && nseg.x > segx || nseg.x < segx && pseg.x > segx) {
                    // Horizontal Left-Right
                    tx = 1; ty = 0;
                } else if (pseg.x < segx && nseg.y > segy || nseg.x < segx && pseg.y > segy) {
                    // Angle Left-Down
                    tx = 2; ty = 0;
                } else if (pseg.y < segy && nseg.y > segy || nseg.y < segy && pseg.y > segy) {
                    // Vertical Up-Down
                    tx = 2; ty = 1;
                } else if (pseg.y < segy && nseg.x < segx || nseg.y < segy && pseg.x < segx) {
                    // Angle Top-Left
                    tx = 2; ty = 2;
                } else if (pseg.x > segx && nseg.y < segy || nseg.x > segx && pseg.y < segy) {
                    // Angle Right-Up
                    tx = 0; ty = 1;
                } else if (pseg.y > segy && nseg.x > segx || nseg.y > segy && pseg.x > segx) {
                    // Angle Down-Right
                    tx = 0; ty = 0;
                }
            }

            // Draw the image of the snake part
            context.drawImage(tileimage, tx*64, ty*64, 64, 64, tilex, tiley,
                              level.tilewidth, level.tileheight);
        }
    }

  if (gameover) {
    gameovertime = 0;
  }

  snake = newSnake;
  draw(snake, apple);

  // Initialize the score
  score = 0;

  // Initialize variables
  gameover = false;
}

function newGame() {

  CHUNK.clear();
  advanceGame();

  // Initialize the score
  score = 0;

  // Initialize variables
  gameover = false;
}

var changeDirection = function(direction) {
  snake[0].direction = direction;
}

var apple = CHUNK.randomLocation();
var snake = [{ top: 1, left: 0, direction: "down" }, { top: 0, left: 0, direction: "down" }];



CHUNK.executeNTimesPerSecond(advanceGame, 2);
CHUNK.onArrowKey(changeDirection);
}
