var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0xe6b5eb});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var star = new PIXI.Sprite(PIXI.Texture.fromImage("Star_Guy.png"));
var square = new PIXI.Sprite(PIXI.Texture.fromImage("Square_Man.png"));
var circle = new PIXI.Sprite(PIXI.Texture.fromImage("circle_dude.png"));
var bill = new PIXI.Sprite(PIXI.Texture.fromImage("bill_cipher.png"));

/*
var playground = new PIXI.Container();
playground.position.x = 200;
playground.position.y = 200;
stage.addChild(playground);
*/

stage.addChild(bill);
//bill.anchor.x = 0.5;
//bill.anchor.y = 0.5;
bill.position.x = 200;
bill.position.y = 200;

stage.addChild(star);
//star.anchor.x = 0.5;
//star.anchor.y = 0.5;
star.position.x = -150;
star.position.y = -50;

stage.addChild(circle);
//circle.anchor.x = 0.5;
//circle.anchor.y = 0.5;
circle.position.x = 80;
circle.position.y = 150;

stage.addChild(square);
//square.anchor.x = 0.5;
//square.anchor.y = 0.5;
square.position.x = 100;
square.position.y = 100;

function keydownEventHandler(e)
{

  var key = e.keyCode;

  if (key == 87 || key == 38) { // W key
    bill.position.y -= 5;
  }

  if (key == 83 || key == 40) { // S key
    bill.position.y += 5;
  }

  if (key == 65 || key == 37) { // A key
    bill.position.x -= 5;
  }

  if (key == 68 || key == 39) { // D key
    bill.position.x += 5;
  }
}

document.addEventListener('keydown', keydownEventHandler);

function animate()
{
  requestAnimationFrame(animate);

  document.getElementById("billpos").innerHTML = "Bill position: " + bill.position.x + ", " + bill.position.y;

  var buffer = 25;

  if (bill.position.x >= square.position.x - buffer &&
    bill.position.x <= square.position.x + buffer &&
    bill.position.y >= square.position.y - buffer &&
    bill.position.y <= square.position.y + buffer)
  {
    square.position.x = Math.floor(Math.random() * 300) + 50;
    square.position.y = Math.floor(Math.random() * 300) + 50;

    document.getElementById("squarepos").innerHTML += "\nSquare position: " + square.position.x + ", " + square.position.y;
  }

  renderer.render(stage);
}
animate();
