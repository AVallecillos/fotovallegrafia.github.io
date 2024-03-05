var rojo;
var verde;
var azul;
var amarillo;
var cyan;
var magenta;
var naranja;
var gris;
var blanco;
var negro;
var mySound;

function preload() {
  mySound = loadSound('files/Sonido_01.mp3');
}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  rojo = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(255,0,0),0,color(0,0,0));
  verde = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(0,255,0),1,color(0,0,0));
  azul = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(0,0,255),2,color(255,255,255));
  amarillo = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(255,255,0),3,color(0,0,0));
  cyan = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(0,255,255),4,color(0,0,0));
  magenta = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(255,0,255),5,color(0,0,0));
  naranja = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(255,128,0),6,color(0,0,0)); 
  gris = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(128,128,128),7,color(0,0,0));
  blanco = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(255,255,255),8,color(0,0,0));
  negro = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(0,0,0),9,color(255,255,255));
}

function draw(){
  background(255,215,0);
  
  tituloApp();
  debug();
  
  rojo.dibujar();
  rojo.mover();
  verde.dibujar();
  verde.mover();
  azul.dibujar();
  azul.mover();
  amarillo.dibujar();
  amarillo.mover();
  cyan.dibujar();
  cyan.mover();
  magenta.dibujar();
  magenta.mover();
  naranja.dibujar();
  naranja.mover();
  gris.dibujar();
  gris.mover();
  blanco.dibujar();
  blanco.mover();
  negro.dibujar();
  negro.mover();
}

function windowResized(){
  resizeCanvas(window.innerWidth,window.innerHeight);
}

function mousePressed(){
  rojo.tap();
  verde.tap();
  azul.tap();
  amarillo.tap();
  cyan.tap();
  magenta.tap();
  naranja.tap();
  gris.tap();
  blanco.tap();
  negro.tap();
  
  mySound.setVolume(1);
  mySound.play();
}

function tituloApp(){
  textSize(12);
  fill(100);
  strokeWeight(0);
  textAlign(CENTER);
  text('TAP `N FUN v0.03 [FEB-04-2017]',window.innerWidth/2,30);
  text('Design & coding: Antonio Vallecillos @fotovallegrafia',window.innerWidth/2,45);
  strokeWeight(1);
  stroke(100);
  line(0,50,window.innerWidth,50);
} 

function debug(){
  textSize(12);
  var p = [10,25,40,55,70,85,100,115,130,145,160,175,190,205];
  fill(100);
  strokeWeight(0);
  textAlign(LEFT);
  text('Debug:',10,window.innerHeight-p[8]);
  text('p[0] = ' + p[0],10,window.innerHeight-p[7]);
  text('Frame Rate: ' + frameRate().toFixed(0) + ' frames per second', 10,window.innerHeight-p[6]);
  text('width = ' + width + ' px',10,window.innerHeight-p[5]);
  text('height = ' + height + ' px',10,window.innerHeight-p[4]);  
  text('displayWidth = ' + displayWidth + ' px',10,window.innerHeight-p[3]);
  text('displayHeight = ' + displayHeight + ' px',10,window.innerHeight-p[2]);
  text('window.innerWidth = ' + window.innerWidth + ' px',10,window.innerHeight-p[1]);
  text('window.innerHeight = ' + window.innerHeight + ' px',10,window.innerHeight-p[0]);
}

function Circulo(extx,exty,extdiametro,extv,extcolor,extid,extidcolor) {
  this.x = extx;
  this.y = exty;
  this.diametro = extdiametro;
  this.velocidad = extv;
  this.angulo = random(0,2*PI);
  this.ccolor = extcolor;
  this.sw = 5;
  this.visible = 1;
  this.borde = 0;
  this.id = extid;
  this.idcolor = extidcolor;
  
  this.dibujar = function(ccolor) {
    strokeWeight(this.sw);
    stroke(this.borde);
    fill(this.ccolor);
    ellipse(this.x,this.y,this.diametro,this.diametro);
    
    fill(this.idcolor);
    stroke(this.idcolor);
    textAlign(CENTER);
    strokeWeight(2);
    textSize(40);
    text(this.id,this.x,this.y+14);
  }

  this.mover = function() {
    if(this.x >= width-this.sw-this.diametro/2){
      this.angulo = this.angulo + random(PI-PI/4, PI+PI/4);
      this.x = this.x-1;
    }else if(this.x <= this.sw+this.diametro/2){
      this.angulo = this.angulo + random(PI-PI/4, PI+PI/4);
      this.x = this.x+1;
    }else if(this.y >= height-this.sw-this.diametro/2){
      this.angulo = this.angulo + random(PI-PI/4, PI+PI/4);
      this.y = this.y-1;
    }else if(this.y <= this.sw+this.diametro/2){
      this.angulo = this.angulo + random(PI-PI/4, PI+PI/4);
      this.y = this.y+1;    
    }else{
      this.angulo = this.angulo + random(-PI/16,PI/16);
      this.x = this.x + cos(this.angulo)*this.velocidad;
      this.y = this.y + sin(this.angulo)*this.velocidad;
    }
  }
  
  this.tap = function(){
    if(this.x-this.diametro/2 <= mouseX && mouseX <= this.x+this.diametro/2 && this.y-this.diametro/2 <= mouseY && mouseY <= this.y+this.diametro/2){
      this.ccolor = color(255,200,0,50);
      this.borde = color(0,50);
      this.idcolor = color(0,50);
      this.velocidad = 0;
    }
  }

}