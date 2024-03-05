var circulos = [];

function setup(){
	createCanvas(500,500);
	background(255,215,0);
	for (var i = 0; i < 100; i++) {
		circulos.push(new Circulo());
	}
}

function draw(){
	background(255,215,0,25);
	for (var i = 0; i < circulos.length; i++) {
		circulos[i].dibujar();
		circulos[i].mover();
	}
}

function Circulo () {
	this.x = width/2 + random(-50,50);
	this.y = height/2 + random(-50,50);
	this.d = random(300,350);
	this.s = random(0,2*PI);

	this.dibujar = function() {
		noFill();
		stroke(0);
		strokeWeight(1);
		arc(this.x, this.y, this.d, this.d, this.s, this.s + PI/4);
	}

	this.mover = function() {
		this.s = this.s + -PI/128;
		this.d = this.d + random(-1,1);
	}
}