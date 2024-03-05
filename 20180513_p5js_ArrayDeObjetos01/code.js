var asteroides = [];

function setup(){
	createCanvas(500,500);
	for (var i = 0; i < 100; i++) {
		asteroides.push(new Asteroide());
	}
}

function draw(){
	background(255,215,0);
	translate(width/2, height/2);
	for (var i = 0; i < asteroides.length; i++) {
		asteroides[i].dibujar();
		asteroides[i].mover();
	}
}