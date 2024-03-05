var fondo;
var pulpo;
var pulpoX;
var pulpoY;
var canvas;
var x, y;
var text;

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

function setup() {  
  fondo = createImg("files/fondo_01.jpg");
  fondo.size(window.innerWidth,window.innerHeight);
  fondo.position(0,0);
  
  pulpo = createImg("files/Pulpo_01.png");
  if (window.innerWidth < window.innerHeight){
    pulpoX = window.innerWidth;
    pulpoY = window.innerWidth;
  }else{
    pulpoX = window.innerHeight;
    pulpoY = window.innerHeight;
  }
  pulpo.size(pulpoX,pulpoY);
  pulpo.position(window.innerWidth-pulpoX,window.innerHeight-pulpoY);
  
  canvas = createCanvas(window.innerWidth,window.innerHeight);
  canvas.position(0,0);
  
  text = createElement('h1', 'PRUEBA');
  text.position(0,-15);
  
  rojo = new Circulo(100,100,50,3,color(255,0,0),0,color(0,0,0));

  //rojo = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(255,0,0),0,color(0,0,0));
  /*verde = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(0,255,0),1,color(0,0,0));
  azul = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(0,0,255),2,color(255,255,255));
  amarillo = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(255,255,0),3,color(0,0,0));
  cyan = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(0,255,255),4,color(0,0,0));
  magenta = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(255,0,255),5,color(0,0,0));
  naranja = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(255,128,0),6,color(0,0,0)); 
  gris = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(128,128,128),7,color(0,0,0));
  blanco = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(255,255,255),8,color(0,0,0));
  negro = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,random(1,3),color(0,0,0),9,color(255,255,255));
*/}

function windowResized() {
  fondo.size(window.innerWidth,window.innerHeight);
  fondo.position(0,0);
  
  if (window.innerWidth < window.innerHeight){
      pulpoX = window.innerWidth;
      pulpoY = window.innerWidth;
    }else{
      pulpoX = window.innerHeight;
      pulpoY = window.innerHeight;
    }
    pulpo.size(pulpoX,pulpoY);
    pulpo.position(window.innerWidth-pulpoX,window.innerHeight-pulpoY);
  
  canvas = createCanvas(window.innerWidth,window.innerHeight);
  canvas.position(0,0);
}

function draw() {
  canvas = createCanvas(window.innerWidth,window.innerHeight);
  
  rojo.dibujar();
  rojo.mover();
  /*verde.dibujar();
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
  negro.mover();*/
}

function mousePressed(){
  rojo.tap();
  /*verde.tap();
  azul.tap();
  amarillo.tap();
  cyan.tap();
  magenta.tap();
  naranja.tap();
  gris.tap();
  blanco.tap();
  negro.tap();*/
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
    this.x = this.x+1;
/*    if(this.x >= width-this.sw-this.diametro/2){
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
    }*/
  }
  
  /*this.tap = function(){
    if(this.x-this.diametro/2 <= mouseX && mouseX <= this.x+this.diametro/2 && this.y-this.diametro/2 <= mouseY && mouseY <= this.y+this.diametro/2){
      this.ccolor = color(255,200,0,50);
      this.borde = color(0,50);
      this.idcolor = color(0,50);
      this.velocidad = 0;
    }
  }
*/
}