var circuito;
var rgba, r, g, b, a;
var rojo;

function setup() {
  //createCanvas(500, 500);
  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(windowWidth, windowHeight);
  circuito = loadImage("images/Circuito04.png");
  rojo = new Coche(window.innerWidth/2, window.innerHeight/2, 3);
}

function draw(){
	background(0, 180, 50);
	imageMode(CENTER);
	image(circuito, window.innerWidth/2, window.innerHeight/2);
  rgba = get(mouseX, mouseY);
  r = subset(rgba, 0, 1);
  g = subset(rgba, 1, 1);
  b = subset(rgba, 2, 1);
  a = subset(rgba, 3, 1);
	debug();
	rojo.dibujar();
	rojo.mover();
}

function debug(){
	fill(255);
	text("MOUSE:", 10, 20);
	text("Position: " + round(mouseX) + " " + round(mouseY), 10, 35);
	text("Color (RGBA): " + rgba, 10, 50);
	text("Red: " + r, 10, 65);
	text("Green: " + g, 10, 80);
	text("Blue: " + b, 10, 95);
	text("Alpha: " + a, 10, 110);
	text("ROJO:", 200, 20);
	text("Left G: " + rojo.l, 200, 35);
	text("Right G: " + rojo.r, 200, 50);
}

function Coche(x,y,v){
	this.x = x;
	this.y = y;
	this.v = v;
	this.angulo = 0;
	this.l;
	this.r;

	this.dibujar = function(){
		translate(this.x, this.y);
		rotate(this.angulo);
		fill(255,0,0);
		triangle(0,5,0,-5,10,0);
		stroke(255);
		strokeWeight(3);
		point(30, -10);
		point(30, +10);
		stroke(0);
		noStroke();
		this.l = subset(get(this.x +25*cos(this.angulo)-10*cos(this.angulo+(PI/2)), this.y +25*sin(this.angulo)-10*sin(this.angulo+(PI/2))), 1, 1);
		this.r = subset(get(this.x +25*cos(this.angulo)+10*cos(this.angulo+(PI/2)), this.y +25*sin(this.angulo)+10*sin(this.angulo+(PI/2))), 1, 1);
	}

	this.mover = function(){
		if(this.l == "0" && this.r == "0"){
			this.angulo = this.angulo + 0*(2*PI/360);
		}else if(this.l == "180" && this.r == "0"){
			this.angulo = this.angulo + 5*(2*PI/360);
		}else if(this.l == "0" && this.r == "180"){
			this.angulo = this.angulo - 5*(2*PI/360);
		}else if(this.l == "180" && this.r == "180"){
			this.angulo = this.angulo - 2*(2*PI/360);
		}
		this.x = this.x + cos(this.angulo)*this.v;
		this.y = this.y + sin(this.angulo)*this.v;
	}
}