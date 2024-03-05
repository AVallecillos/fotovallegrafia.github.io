var specimens = 0;
var maximo = 5000;
var speed = 1;
var controles = -1;
var creaBicho = 1;
var numero = -1;
var aviso = 1;
var pointer = 100;
var pantallaX, pantallaY;
var iniControl1X, iniControl1Y;
var iniControl2X, iniControl2Y;
var iniControl3X, iniControl3Y;
var iniControl4X, iniControl4Y;
var iniControl5X, iniControl5Y;
var iniControl6X, iniControl6Y;
var i;

var hormigas = [];

function setup() {
	frameRate(300);
  createCanvas(500,500);
  pantallaX = width;
  pantallaY = height;
	iniControl1X = width-40;
  iniControl1Y = 5;
  iniControl2X = iniControl1X;
  iniControl2Y = iniControl1Y+40;
  iniControl3X = iniControl2X;
  iniControl3Y = iniControl2Y+40;
  iniControl4X = iniControl3X;
  iniControl4Y = iniControl3Y+40;  
  iniControl5X = iniControl4X;
  iniControl5Y = iniControl4Y+40;
  iniControl6X = iniControl5X;
  iniControl6Y = iniControl5Y+40;

	bichoX = width/2;
  bichoY = height/2;

  for (i=0; i<maximo; i++) {
    hormigas[i] = new Bicho(bichoX, bichoY, speed);
  }
}

function draw() {
  background(255, 200, 0);
  marcadorPermanente();
  if (controles == 1){
    marcador();
  }
  tap();

  for (i = 0; i < specimens; i++) {
    hormigas[i].mover();
    hormigas[i].dibujar();
  }
}

function marcadorPermanente(){
  var iniTituloX = 5;  
  var iniTituloY = 5;
  
  noFill();
  stroke(0, 100);
  rect (iniTituloX, iniTituloY, pantallaX-10-40, 35);
  fill(0, 100);
  textAlign(CENTER);
  textSize(12);
  text ("MARABUNTA v0.24 [DEC-24-2016] - A GAME OF LIFE", (pantallaX-10-40)/2, 20);
  text ("DESIGN AND PROGRAMMING: ANTONIO VALLECILLOS @fotovallegrafia", (pantallaX-10-40)/2, 35);
  
  noFill();
  stroke(0, 100);
  if (controles == 1){
    fill (255,0,0,100);
  }
  rect (iniControl1X, iniControl1Y, 35, 35);
  fill(0, 100);
  textAlign(CENTER);
  textSize(10);
  text ("CTRL", iniControl1X+18, iniControl1Y+22);
  
  if (specimens == 0){
    textAlign(CENTER);
    textSize(18);
    fill(255,0,0);
    if (aviso == 1) {
      text ("TAP THE SCREEN ANYWHERE", width/2, height/2-20);
      text ("SO THAT A NEW SPECIMEN IS BORN", width/2, (height/2));
    }
    textSize(12);
  }
}

function marcador() {
  var iniGameX = 5;
  var iniGameY = 45;
  var iniDebugX = 5;
  var iniDebugY = 135;
  
  noFill();
  stroke(0,100);
  rect (iniGameX, iniGameY, 150, 85);
  fill(0, 100);
  line (iniGameX, iniGameY+20, iniGameX+150, iniGameY+20);
  textAlign(LEFT);
  textSize(12);
  text ("GAME PARAMETERS:", 10, 60);
  text ("TIME = " + round(millis()/1000), 10, 80);
  text ("SPECIMENS = " + specimens, 10, 95);
  text ("SPEED = " + speed, 10, 110);
  text ("LIFE = CHON", 10, 125);
  stroke(0, 100);
  
  noFill();
  rect (iniDebugX, iniDebugY, 150, 40);
  fill(0, 100);
  line (iniDebugX, iniDebugY+20, iniDebugX+150, iniDebugY+20);
  textAlign(LEFT);
  textSize(12);
  text ("DEBUG:", iniDebugX+5, iniDebugY+15);
  text ("FRAME RATE = " + round(frameRate()), iniDebugX+5, iniDebugY+35);
  
  noFill();
  if (creaBicho == 1){
    textSize(10);
    fill(255,0,0);
    textAlign(CENTER);
    text ("TAP THE SCREEN", iniControl2X+18-65, iniControl2Y+22); 
    fill (255,0,0,100);
  }
  rect (iniControl2X, iniControl2Y, 35, 35);
  fill(0, 100);
  textAlign(CENTER);
  textSize(10);
  text ("BUG+", iniControl2X+18, iniControl2Y+22);
  
  noFill();
  if (creaBicho == 0){
    if (specimens > 0){
      textSize(10);
      fill(255,0,0);
      textAlign(CENTER);
      text ("TAP THE SCREEN", iniControl3X+18-65, iniControl3Y+22); 
    }
    fill (255,0,0,100);
  }
  rect (iniControl3X, iniControl3Y, 35, 35);
  fill(0, 100);
  textAlign(CENTER);
  textSize(10);
  text ("BUG-", iniControl3X+18, iniControl3Y+22);
  
  noFill();
  rect (iniControl4X, iniControl4Y, 35, 35);
  fill(0, 100);
  textAlign(CENTER);
  textSize(10);
  text ("VEL+", iniControl4X+18, iniControl4Y+22);

  noFill();
  rect (iniControl5X, iniControl5Y, 35, 35);
  fill(0, 100);
  textAlign(CENTER);
  textSize(10);
  text ("VEL-", iniControl5X+18, iniControl5Y+22);  

  noFill();
  if (numero == 1){
    fill (255,0,0,100);
  }
  rect (iniControl6X, iniControl6Y, 35, 35);
  fill(0, 100);
  textAlign(CENTER);
  textSize(10);
  text ("NUM", iniControl6X+18, iniControl6Y+22); 
}

function tap(){
  pointer = pointer + 1;
  if (pointer < 5) {
    ellipseMode(CENTER);
    noStroke();
    fill(255,0,0,3);
    for (var a = 10; a < 76; a++){
    ellipse(mouseX, mouseY, a, a);
    }
  }
}

function mousePressed(){
  aviso = 0;
  pointer = 0;
  if (iniControl1X <= mouseX && mouseX <= iniControl1X+35 && iniControl1Y <= mouseY && mouseY <= iniControl1Y+35) {
    controles = controles*-1;
  }else if (iniControl2X <= mouseX && mouseX <= iniControl2X+35 && iniControl2Y <= mouseY && mouseY <= iniControl2Y+35 && controles == 1) {
    creaBicho = 1;
  }else if (iniControl3X <= mouseX && mouseX <= iniControl3X+35 && iniControl3Y <= mouseY && mouseY <= iniControl3Y+35 && controles == 1) {
    creaBicho = 0;
  }else if (iniControl4X <= mouseX && mouseX <= iniControl4X+35 && iniControl4Y <= mouseY && mouseY <= iniControl4Y+35 && controles == 1) {
    speed = speed + 1;
  }else if (iniControl5X <= mouseX && mouseX <= iniControl5X+35 && iniControl5Y <= mouseY && mouseY <= iniControl5Y+35 && controles == 1) {
    if(speed>0){
      speed = speed - 1;
    }
  }else if (iniControl6X <= mouseX && mouseX <= iniControl6X+35 && iniControl6Y <= mouseY && mouseY <= iniControl6Y+35 && controles == 1) {
    numero = numero * -1;
  }else if(specimens<maximo && creaBicho == 1){
    specimens = specimens+1;
    hormigas[i].nacer();
  }else if(specimens>0 && creaBicho == 0){
    specimens = specimens-1;
    hormigas[i].nacer();
  }
}

function Bicho(xpos, ypos, vel) {
  this.x = xpos;
  this.y = ypos;
  this.velocidad = vel;
  this.angulo = random(0, 2*PI);

  this.nacer = function(){
    this.x = mouseX;
    this.y = mouseY;
  }

  this.dibujar = function() {
    applyMatrix();
    translate(this.x,this.y);
    fill(0,125,0,255);
    if (numero == 1){
      textAlign(LEFT);
      text (i+1,8,4);
    }
    rotate(this.angulo);
    fill(0);
    strokeWeight(1);
    stroke(0,0,0);
    line(-5,0,0,0);
    noStroke();
    triangle(0,-3,0,4,8,1);
    resetMatrix();
  }

  this.mover = function(){
    if (speed > 0){
      if (this.x >= pantallaX-1){
        this.angulo = this.angulo + random(PI-PI/4, PI+PI/4);
        this.x = this.x-1;
      } else if (this.x <= 0){
        this.angulo = this.angulo + random(PI-PI/4, PI+PI/4);
        this.x = this.x+1;
      } else if (this.y >= pantallaY-1){
        this.angulo = this.angulo + random(PI-PI/4, PI+PI/4);
        this.y = this.y-1;
      } else if (this.y <= 0){
        this.angulo = this.angulo + random(PI-PI/4, PI+PI/4);
        this.y = this.y+1;
      } else {      
        this.angulo = this.angulo + random(-PI/12,PI/12);
      }
      this.velocidad = speed;
      this.x = this.x + cos(this.angulo)*this.velocidad;
      this.y = this.y + sin(this.angulo)*this.velocidad;
    }
  }
}