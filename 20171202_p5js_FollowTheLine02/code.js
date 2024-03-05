var circuito;
var rgba, r, g, b, a;
var uno;
var dos;
var tres;
var hierba;
var t;

function preload(){
  circuito = loadImage("images/Circuito04.png");
}

function setup() {
  //createCanvas(500, 500);
  //createCanvas(window.innerWidth, window.innerHeight);
  createCanvas(windowWidth, windowHeight);
  uno = new Coche(window.innerWidth/2, window.innerHeight/2, 2, color(255,0,0));
  dos = new Coche(window.innerWidth/2, window.innerHeight/2, 2.5, color(255,255,0));
  tres = new Coche(window.innerWidth/2, window.innerHeight/2, 1.5, color(0,0,255));
  hierba = color(0, 120, 30);
  t = 5;
}

function draw(){
	t = t + 1;
	background(hierba);
	imageMode(CENTER);
	image(circuito, window.innerWidth/2, window.innerHeight/2);
  rgba = get(mouseX, mouseY);
  r = subset(rgba, 0, 1);
  g = subset(rgba, 1, 1);
  b = subset(rgba, 2, 1);
  a = subset(rgba, 3, 1);
	debug();

	uno.dibujar();
	uno.mover();

	dos.dibujar();
	dos.mover();

	tres.dibujar();
	tres.mover();

	if(t >= 5){
		uno.medir();
		dos.medir();
		tres.medir();
		t = 0;
	}
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
	text("RED:", 200, 20);
	text("Left G: " + uno.l, 200, 35);
	text("Right G: " + uno.r, 200, 50);
	text("Speed: " + uno.v, 200, 65);
	text("YELLOW:", 300, 20);
	text("Left G: " + dos.l, 300, 35);
	text("Right G: " + dos.r, 300, 50);
	text("Speed: " + dos.v, 300, 65);
	text("BLUE:", 400, 20);
	text("Left G: " + tres.l, 400, 35);
	text("Right G: " + tres.r, 400, 50);
	text("Speed: " + tres.v, 400, 65);
}

function windowResized(){
  resizeCanvas(window.innerWidth,window.innerHeight);
}

function Coche(x,y,v,c){
	this.x = x;
	this.y = y;
	this.v = v;
	this.c = c;
	this.angulo = 0;
	this.l;
	this.r;

	this.dibujar = function(){
		translate(this.x, this.y);
		rotate(this.angulo);
		fill(this.c);
		triangle(0,5,0,-5,10,0);
		stroke(255);
		strokeWeight(3);
		point(30, -10);
		point(30, +10);
		stroke(0);
		noStroke();
		resetMatrix();
	}

	this.medir = function(){
		this.l = subset(get(this.x +25*cos(this.angulo)-10*cos(this.angulo+(PI/2)), this.y +25*sin(this.angulo)-10*sin(this.angulo+(PI/2))), 1, 1);
		this.r = subset(get(this.x +25*cos(this.angulo)+10*cos(this.angulo+(PI/2)), this.y +25*sin(this.angulo)+10*sin(this.angulo+(PI/2))), 1, 1);
	}

	this.mover = function(){
		if(this.l == "0" && this.r == "0"){
			this.angulo = this.angulo + 0*(2*PI/360);
		}else if(this.l !== "0" && this.r == "0"){
			this.angulo = this.angulo + 5*(2*PI/360);
		}else if(this.l == "0" && this.r !== "0"){
			this.angulo = this.angulo - 5*(2*PI/360);
		}else if(this.l !== "0" && this.r !== "0"){
			this.angulo = this.angulo - 2*(2*PI/360);
		}
		this.x = this.x + cos(this.angulo)*this.v;
		this.y = this.y + sin(this.angulo)*this.v;
	}
}