var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0xe6b5eb});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var star = new PIXI.Sprite(PIXI.Texture.fromImage("Star_Guy.png"));
var square = new PIXI.Sprite(PIXI.Texture.fromImage("Square_Man.png"));
var circle = new PIXI.Sprite(PIXI.Texture.fromImage("circle_dude.png"));
var bill = new PIXI.Sprite(PIXI.Texture.fromImage("bill_cipher.png"));

var starText = ["Oh, I'm sorry - I'm to cool to hang out with you."];
var squareText = ["I don't hang out with people who don't have at least 4 corners."];
var circleText = ["..."];
var speech = "";

stage.addChild(bill);
bill.position.x = 200;
bill.position.y = 200;

stage.addChild(star);
star.position.x = 295;
star.position.y = 295;

stage.addChild(circle);
circle.position.x = 45;
circle.position.y = 270;

stage.addChild(square);
square.position.x = 180;
square.position.y = 90;

function keydownEventHandler(e)
{

  var key = e.keyCode;
  var duration = 100;
  var leaveText = "You're not allowed to leave.";
  var billX;
  var billY;

  if (key == 87 || key == 38)
  { // W key
    if (bill.position.y - 10 > 0)
    {
      billY = bill.position.y - 10;
    }
    else
    {
      speech = leaveText;
    }
  }

  if (key == 83 || key == 40)
  { // S key
    if (bill.position.y + 10 < 380)
    {
      billY = bill.position.y + 10;
    }
    else
    {
      speech = leaveText;
    }
  }

  if (key == 65 || key == 37)
  { // A key
    if (bill.position.x - 10 > 0)
    {
      billX = bill.position.x - 10;
    }
    else
    {
      speech = leaveText;
    }
  }

  if (key == 68 || key == 39)
   { // D key
     if (bill.position.x + 10 < 380)
     {
       billX = bill.position.x + 10;
     }
     else
     {
       speech = leaveText;
     }
  }

  createjs.Tween.get(bill.position).to({x: billX, y: billY}, duration);
}

document.addEventListener('keydown', keydownEventHandler);

function animate()
{
  requestAnimationFrame(animate);

  //document.getElementById("billpos").innerHTML = "Bill position: " + bill.position.x + ", " + bill.position.y;

  var buffer = 25;

  if (bill.position.x >= square.position.x - buffer &&
    bill.position.x <= square.position.x + buffer &&
    bill.position.y >= square.position.y - buffer &&
    bill.position.y <= square.position.y + buffer)
  {
    square.position.x = Math.floor(Math.random() * 300) + 50;
    square.position.y = Math.floor(Math.random() * 300) + 50;

    speech = "Square: " + squareText[0];
  }

  if (bill.position.x >= star.position.x - buffer &&
    bill.position.x <= star.position.x + buffer &&
    bill.position.y >= star.position.y - buffer &&
    bill.position.y <= star.position.y + buffer)
  {
    star.position.x = Math.floor(Math.random() * 300) + 50;
    star.position.y = Math.floor(Math.random() * 300) + 50;

    speech = "Star: " + starText[0];
  }

  if (bill.position.x >= circle.position.x - buffer &&
    bill.position.x <= circle.position.x + buffer &&
    bill.position.y >= circle.position.y - buffer &&
    bill.position.y <= circle.position.y + buffer)
  {
    circle.position.x = Math.floor(Math.random() * 300) + 50;
    circle.position.y = Math.floor(Math.random() * 300) + 50;

    speech = "Circle: " + circleText[0];
  }

  document.getElementById("speechtext").innerHTML = speech;

  renderer.render(stage);
}
animate();
