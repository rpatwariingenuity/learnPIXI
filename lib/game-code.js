"use strict";
var app = new PIXI.Application({
    width: 256,
    height: 256
});
document.body.appendChild(app.view);
app.renderer.backgroundColor = 0x061639;
app.renderer.autoResize = true;
app.renderer.view.style.position = "absolute";
app.renderer.resize(window.innerWidth, window.innerHeight);
