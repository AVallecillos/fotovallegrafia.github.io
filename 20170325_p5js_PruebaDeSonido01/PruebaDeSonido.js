var sonido = -1;
var mySound;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
}

function draw(){
  background(255,215,0);
  textSize(20);
  textAlign(CENTER);
  fill(255,0,0);
  if(sonido == -1){
    text('SOUND DISABLED',window.innerWidth/2,window.innerHeight/2);
  }else{
    text('SOUND ENABLED',window.innerWidth/2,window.innerHeight/2);
  }
}

function windowResized(){
  resizeCanvas(window.innerWidth,window.innerHeight);
}

function mousePressed(){
  if(mouseX > window.innerWidth/2-90 && mouseX < window.innerWidth/2+90 && mouseY > window.innerHeight/2-30 && mouseY < window.innerHeight/2+10){
    sonido = sonido * -1;
    mySound = loadSound('files/Sonido_01.mp3');
  }
  if(sonido == 1){
    mySound.setVolume(1);
    mySound.play();
  }
}