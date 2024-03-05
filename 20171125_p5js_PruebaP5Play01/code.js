var alien;
var secuenciaInvader;

function preload(){
  secuenciaInvader = loadAnimation(
    "images/SpriteAlien04a.png",
    "images/SpriteAlien04b.png",
    "images/SpriteAlien04c.png",
    "images/SpriteAlien04d.png",
    "images/SpriteAlien04e.png",
    "images/SpriteAlien04f.png",
    "images/SpriteAlien04g.png",
    "images/SpriteAlien04h.png"
    );
}

function setup() {
  createCanvas(500, 500);
  alien = createSprite(width/2, height/2,40,25);
  alien.addAnimation("default", secuenciaInvader);
  alien.rotateToDirection = false;
  alien.maxSpeed = 2;
  alien.friction = 0.05;
}

function draw() {
  background(255,215,0);
  if (mouseIsPressed) {
    alien.attractionPoint(0.5, mouseX, mouseY);
  }
  drawSprites();
}