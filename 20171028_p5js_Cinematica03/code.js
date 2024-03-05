var lienzo;
var div;
var t = 0;
var x;
var y;
var px0 = 0;
var py0 = 500;
var vx0 = 25;
var vy0 = -95;
var ax0 = 0;
var ay0 = 9.81;
var newton;
var manzana;
var movimiento = 0;

function preload(){
	newton = loadImage("files/IsaacNewtonB05.jpg");
  manzana = loadImage("files/AppleA01.gif");
}

function setup(){
	lienzo = createCanvas(500,500);
	div = createElement('div', 'Antonio Vallecillos 2017');
	div.style("font-family", "sans-serif");
  div.style("color", "grey");
  div.style("font-size", "12px");
  div.style("padding", "5px");
}

function draw(){
	background(255,215,0);
	imageMode(CORNER);
	image(newton, 0, 0, 500, 500);
	x = 0.5 * ax0 * t * t + vx0 * t + round(px0);
	y = 0.5 * ay0 * t * t + vy0 * t + round(py0);
	vx = ax0 * t + vx0;
	vy = ay0 * t + vy0;
	noFill();
	rect(0,0,499,499);
	imageMode(CENTER);
	image(manzana, x, y-2, 25, 25);
	debug();
	if (movimiento == 1) {
		t = t + 0.1;
	}
}

function fpx0() {
	px0 = document.getElementById("px0").value;
}

function fpy0() {
	py0 = document.getElementById("py0").value;
}

function fvx0() {
	vx0 = document.getElementById("vx0").value;
}

function fvy0() {
	vy0 = document.getElementById("vy0").value;
}

function fax0() {
	ax0 = document.getElementById("ax0").value;
}

function fay0() {
	ay0 = document.getElementById("ay0").value;
}

function ffuego(){
	t = 0;
	movimiento = 1;
}

function fpausa(){
	movimiento = 0;
}

function debug(){
	fill(128, 0, 0);
	text("px0 = " + round(px0), 10, 15);
	text("py0 = " + round(py0), 10, 25);
	text("vx0 = " + round(vx0), 10, 35);
	text("vy0 = " + round(vy0), 10, 45);
	text("ax0 = " + round(ax0), 10, 55);
	text("ay0 = " + ay0, 10, 65);
	text("x = " + round(x), 80, 15);
	text("y = " + round(y), 80, 25);
	text("vx = " + round(vx), 80, 35);
	text("vy = " + round(vy), 80, 45);
	text("ax = " + round(ax0), 80, 55);
	text("ay = " + ay0, 80, 65);
}