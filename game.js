var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400. {backgroundColor: 0x000033});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var playground = new PIXI.Container();
playground.position.x = 200;
playground.position.y = 200;
stage.addChild(playground);

var bill = new PIXI.Sprite(PIXI.Texture.fromImage("bill_cipher.png"));
var circle = new PIXI.Sprite(PIXI.Texture.fromImage("circle_dude.png"));
var square = new PIXI.Sprite(PIXI.Texture.fromImage("Square_Man.png"));
var star = new PIXI.Sprite(PIXI.Texture.fromImage("Star_Guy.png"));

playground.addChild(bill);
bill.position.x = 0;
bill.position.y = 0;

playground.addChild(circle);
circle.position.x = 30;
circle.position.y = 30;

playground.addChild(square);
square.positon.x = 370;
square.position.y = 30;

playground.addChild(star);
star.position.x = 370;
star.position.y = 0;

function animate() {
  requestAnimationFrame(animate);

  renderer.render(stage);
}

animate();
