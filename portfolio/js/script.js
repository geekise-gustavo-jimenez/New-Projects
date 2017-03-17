function moveBox(event) {
  var k = event.keyCode;
  var car = document.getElementById('car');
  function upDown() {
    var y2 = parseInt(getComputedStyle(car).top);
    if (k == 38) {
      y2 -= 10;
    }else if (k == 40) {
      y2 += 10;
    }
    return y2;
  }
  function leftRight() {
    var x2 = parseInt(getComputedStyle(car).left);
    if (k == 37) {
      x2 -= 10;
    }else if (k == 39) {
      x2 += 10;
    }
    return x2;
  }

car.style.top = (upDown() + 'px');
car.style.left = (leftRight() + 'px');
};

car.addEventListener('click', function () {
  document.addEventListener('keydown', moveBox);
  document.addEventListener('keydown', function(e) {
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  });
});

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var x = canvas.width/2;
var y = canvas.width - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

// This connects with the arrows
var rightPressed = false;
var leftPressed = false;

// this is for the bricks
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
// this is so they dont touch
var brickPadding = 10;
// theses two prevent them from spawning at the edge
var brickOffSetTop = 30;
var brickOffSetLeft = 30;
var bricks = [];
for(c=0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

function drawBricks() {
    for ( c = 0; c < brickColumnCount; c++) {
        for ( r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status == 1) {
            var brickX = (c*(brickWidth + brickPadding)) + brickOffSetLeft;
            var brickY = (c*(brickHeight + brickPadding)) + brickOffSetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = 'green';
            ctx.fill();
            ctx.closePath();
          }
        }
    }
}

// this makes the ball and removes the previously drawn ball disappear giving the illusion of movement.
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// this one creates the paddle its more of the basic things
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD"
  ctx.fill();
  ctx.closePath();

}



// this part actually moves the ball automatically and senses if it hit past the paddle
// it also draws the orther functions
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    collisionDetection();
    drawPaddle();

    x += dx;
    y += dy;

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert("Ha you lose");
            document.location.reload();
        }
    }

    if(rightPressed) {
    paddleX += 7;
    }
    else if(leftPressed) {
    paddleX -= 7;
    }
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
      paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
      paddleX -= 7;
    }

}

// this is another way to target th arrows
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}


function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
        }
      }
    }
  }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
// this keeps creating the ball so it looks like its moving
setInterval(draw, 10);


// // This is the square
// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.strokeStyle = '#FF0000';
// ctx.stroke();
// ctx.closePath();
// // This is the circle
// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();
// // this is the blue rectangle
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();



// function collisionDetection() {
//   for (var i = 0; i < brickColumnCount; i++) {
//     for (var c = 0; c < ; c++) {
//       var b = bricks[i][r];
//     }
//   }
// }
