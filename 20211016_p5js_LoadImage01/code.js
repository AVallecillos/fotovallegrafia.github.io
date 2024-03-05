let img;
  
function preload() {
  img = loadImage('images/Circuito04.png');
}
  
function setup() {
  createCanvas(500, 500);
  background(255,0,0);
  text("The image would be loaded below:", 20, 20);
  image(img, 20, 40, 100, 100);
}