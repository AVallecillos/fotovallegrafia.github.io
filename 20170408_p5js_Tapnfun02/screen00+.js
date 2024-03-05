function setup() {
  var h1 = createElement('h1','SETTINGS');
  var h2 = createElement('h2','SOUND');
  var sound = createRadio();
  sound.option("ENABLED (not available for mobile phones)");
  sound.option("DISABLED (works in all devices)");
  
  createCanvas(300,300);
}

function draw() {
  background(255,200,0);
}