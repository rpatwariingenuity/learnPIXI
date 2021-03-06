"use strict";
var app = new PIXI.Application({
    width: 256,
    height: 256,
    antialias: true // for smoothing the sprites
});
document.body.appendChild(app.view);
app.renderer.backgroundColor = 0x061639;
app.renderer.autoResize = true;
app.renderer.view.style.position = "absolute";
app.renderer.resize(window.innerWidth, window.innerHeight);
PIXI.loader.add("images/cat.png").load(setup);
function setup() {
    var catSprite = new PIXI.Sprite(PIXI.loader.resources["images/cat.png"].texture);
    app.stage.addChild(catSprite);
    catSprite.x = 50;
    catSprite.y = 50;
    catSprite.alpha = 0.7;
    requestAnimationFrame(function () {
        moveCatRight(catSprite);
    });
}
function moveCatRight(catSprite) {
    catSprite.x += 10;
    catSprite.y += 2;
    if (catSprite.x + catSprite.width < window.innerWidth - 50) {
        requestAnimationFrame(function () {
            moveCatRight(catSprite);
        });
    }
    else {
        moveCatLeft(catSprite);
    }
}
function moveCatLeft(catSprite) {
    catSprite.x -= 10;
    catSprite.y -= 2;
    if (catSprite.x > 50) {
        requestAnimationFrame(function () {
            moveCatLeft(catSprite);
        });
    }
    else {
        moveCatRight(catSprite);
    }
}
