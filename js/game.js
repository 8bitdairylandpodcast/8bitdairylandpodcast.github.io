//http://www.somethinghitme.com/2013/04/16/creating-a-canvas-platformer-tutorial-part-tw/

(function() {
    var requestAnimationFrame = window.requestAnimationFrame 
      || window.mozRequestAnimationFrame 
      || window.webkitRequestAnimationFrame 
      || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

//draw canvas
var canvas = document.getElementById("level-canvas"),
    ctx = canvas.getContext("2d"),
    width = $('.header-lvl').innerWidth(),
    height = window.innerHeight - 20,
    player = {
      x : width/2,
      y : height - 5,
      width : 5,
      height : 5,
      speed: 3,
      velX: 0,
      velY: 0,
      jumping : false
    },
    keys = [];
 
canvas.width = width;
canvas.height = height;

friction = 0.8;
gravity = 0.3;


var hearts = [];

//hearts
hearts.push({
  x: 20,
  y: 20,
  width: 100,
  height: 100
});


// frame animations
function update(){

  // check keys
  if (keys[38]) {
      // up arrow
  }
  if (keys[39]) {
      // right arrow
      if (player.velX < player.speed) {                         
          player.velX++;                  
      }          
  }          
  if (keys[37]) {                 
       // left arrow                  
      if (player.velX > -player.speed) {
          player.velX--;
      }
  }
  if (keys[38]) {
    // up arrow or space
    if(!player.jumping){
      player.jumping = true;
      player.velY = -player.speed*2;
    }
  }
  
  player.velX *= friction;
  player.velY += gravity;  

  player.x += player.velX;
  player.y += player.velY;


  if (player.x >= width-player.width) {
    player.x = 0;
  } else if (player.x <= 0) {
      player.x = width-player.width;
  }

  if(player.y >= height-player.height){
      player.y = height - player.height;
      player.jumping = false;
  }

  // draw player
  ctx.clearRect(0,0,width,height);
  ctx.fillStyle = "red";
  ctx.fillRect(player.x, player.y, player.width, player.height);
  
  requestAnimationFrame(update);
}



window.addEventListener("load", function(){
  update();
});

document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
});
 
document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
});
