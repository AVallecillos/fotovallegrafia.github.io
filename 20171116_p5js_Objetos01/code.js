var cuadrado;

function setup() {
  createCanvas(500, 500);
  background(255,215,0);
  cuadrado = new Poligono();
}

function draw(){
	background(255,215,0,10);
	cuadrado.mover();
	cuadrado.dibujar();
}

function Poligono(){
	this.x;
	this.y;
	this.lado = 15;
	this.centroX = random(0 + this.lado, width - this.lado);
	this.centroY = random(0 + this.lado, height - this.lado);
	this.alpha = 0;

	this.mover = function(){
		this.x = this.centroX + cos(this.alpha)*25;
		this.y = this.centroY + sin(this.alpha)*25;
		this.alpha = this.alpha + (2*PI/360)*5;
	}

	this.dibujar = function(){
		rectMode(CENTER);
		fill(255,0,0);
		rect(this.x, this.y, this.lado, this.lado);
	}
}