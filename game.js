var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400. {backgroundColor: 0x000033});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();
