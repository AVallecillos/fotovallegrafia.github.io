var rojo;  // Declara el objeto
var azul;

function setup() {
  //createCanvas(300,300);
  //createCanvas(displayWidth,displayHeight);
  //createCanvas(windowWidth,windowHeight); // Funciona pero la ventana es más pequeña que la pantalla del dispositivo (ocupa solo la parte superior de la pantalla).
  createCanvas(window.innerWidth,window.innerHeight); // Funciona pero a 2/3 de la resolución de la pantalla del dispositivo.

  rojo = new Circulo(random(width/3,2*width/3),random(height/3,2*height/3),50,color(255,0,0));  // Crea el objecto
  azul = new Circulo(random(width/3, 2*width/3),random(height/3,2*height/3),50,color(0,0,255));
}

function draw() {
  background(255,200,0);
  fill(100);
  textAlign(CENTER);
  text('CIRCLES v0.04 [JAN-17-2017] - A COLLISION GAME',window.innerWidth/2,20);
  text('Design & coding: Antonio Vallecillos @fotovallegrafia',window.innerWidth/2,35);
  strokeWeight(1);
  line(0,45,width,45);
  textAlign(LEFT);
  text('Debug:',10,window.innerHeight-100);
  text('width = ' + width,10,window.innerHeight-85);
  text('height = ' + height,10,window.innerHeight-70);  
  text('displayWidth = ' + displayWidth,10,window.innerHeight-55);
  text('displayHeight = ' + displayHeight,10,window.innerHeight-40);
  text('window.innerWidth = ' + window.innerWidth,10,window.innerHeight-25);
  text('window.innerHeight = ' + window.innerHeight,10,window.innerHeight-10);
  
  rojo.dibujar();
  rojo.mover();
  rojo.relleno();
  azul.dibujar();
  azul.mover();
  azul.relleno();
}

function windowResized() { // Con esta función conseguimos que la aplicación sea responsive: una vez iniciada la aplicación en un dispositivo, se adapta a los giros de la pantalla. 
  resizeCanvas(window.innerWidth,window.innerHeight);
}

// Clase Circulo
function Circulo(extx,exty,extdiametro,extcolor) { 
  this.x = extx;
  this.y = exty;
  this.diametro = extdiametro;
  this.velocidad = 3;
  this.angulo = 0;
  this.ccolor = extcolor;
  
  this.dibujar = function(ccolor) {
    strokeWeight(2);
    fill(this.ccolor);
    ellipse(this.x,this.y,this.diametro,this.diametro);
  }

  this.mover = function() {
    if(this.x >= width-this.diametro/2){
      this.angulo = this.angulo + random(PI-PI/4, PI+PI/4);
      this.x = this.x-1;
    }else if(this.x <= this.diametro/2){
      this.angulo = this.angulo + random(PI-PI/4, PI+PI/4);
      this.x = this.x+1;
    }else if(this.y >= height-this.diametro/2){
      this.angulo = this.angulo + random(PI-PI/4, PI+PI/4);
      this.y = this.y-1;
    }else if(this.y <= this.diametro/2){
      this.angulo = this.angulo + random(PI-PI/4, PI+PI/4);
      this.y = this.y+1;    
    }else{
      this.angulo = this.angulo + random(-PI/16,PI/16);
      this.x = this.x + cos(this.angulo)*this.velocidad;
      this.y = this.y + sin(this.angulo)*this.velocidad;
    }
  }
  
  this.relleno = function() {
    if(rojo.x-azul.x <= rojo.diametro &&
       azul.x-rojo.x <= rojo.diametro &&
       rojo.y-azul.y <= rojo.diametro &&
       azul.y-rojo.y <= rojo.diametro){
      rojo.ccolor = color(255,255,255);
      azul.ccolor = color(255,255,255);
    }else{
      rojo.ccolor = color(255,0,0);
      azul.ccolor = color(0,0,255);
    }
  }
  
}