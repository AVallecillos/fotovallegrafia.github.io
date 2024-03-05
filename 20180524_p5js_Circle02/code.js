var circulos = [];

function setup(){
	createCanvas(500,500);
	background(255,215,0);
	for (var i = 0; i < 100; i++) {
		circulos.push(new Circulo());
	}
}

function draw(){
	background(255,215,0,50);
	for (var i = 0; i < circulos.length; i++) {
		circulos[i].dibujar();
		circulos[i].mover();
	}
}

function Circulo () {
	this.x = width/2 + random(-50,50);
	this.y = height/2 + random(-50,50);
	this.d = random(250,400);
	this.s = random(0,2*PI);
	this.arc = random(PI/32,PI/2);
	this.vel = random(PI/256,PI/32);

	this.dibujar = function() {
		noFill();
		stroke(0);
		strokeWeight(1);
		arc(this.x, this.y, this.d, this.d, this.s, this.s + this.arc);
	}

	this.mover = function() {
		this.s = this.s - this.vel;
		this.d = this.d + random(-2,2);
	}
}