var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x000033});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var star = new PIXI.Sprite(PIXI.Texture.fromImage("Star_Guy.png"));
var square = new PIXI.Sprite(PIXI.Texture.fromImage("Square_Man.png"));
var circle = new PIXI.Sprite(PIXI.Texture.fromImage("circle_dude.png"));
var bill = new PIXI.Sprite(PIXI.Texture.fromImage("bill_cipher.png"));

var playground = new PIXI.Container();
playground.position.x = 200;
playground.position.y = 200;
stage.addChild(playground);

playground.addChild(bill);
bill.anchor.x = 0.5;
bill.anchor.y = 0.5;
bill.position.x = 0;
bill.position.y = 0;

playground.addChild(star);
star.anchor.x = 0.5;
star.anchor.y = 0.5;
star.position.x = 20;
star.position.y = -30;

playground.addChild(circle);
circle.anchor.x = 0.5;
circle.anchor.y = 0.5;
circle.position.x = 40;
circle.position.y = 30;

playground.addChild(square);
square.anchor.x = 0.5;
square.anchor.y = 0.5;
square.position.x = 35;
square.position.y = -45;

function animate() {
  requestAnimationFrame(animate);

  renderer.render(stage);
}
animate();
