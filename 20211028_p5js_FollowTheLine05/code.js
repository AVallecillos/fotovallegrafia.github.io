var circuito;
var rgba, r, g, b, a;
var uno;
var dos;
var tres;
var cuatro;
var hierba;
var t;
var clock;

function preload(){
  circuito = loadImage("images/Circuito01.png");
}

function setup() {
  createCanvas(500, 600);
  //createCanvas(window.innerWidth, window.innerHeight);
  //createCanvas(windowWidth, windowHeight);
  uno = new Coche(width/2+10, 440, 2.5, color(255,0,0));
  dos = new Coche(width/2+15, 460, 1.7, color(0,255,0));
  tres = new Coche(width/2+30, 440, 1.5, color(0,0,255));
  cuatro = new Coche(width/2+35, 460, 1.3, color(255,255,0));  
  cinco = new Coche(width/2+50, 440, 1.1, color(255,0,255));  
  seis = new Coche(width/2+55, 460, 1.9, color(0,255,255)); 
  hierba = color(255, 215, 0);
  t = 5;
  clock = 0;
}

function draw(){
	t = t + 1;
	clock = clock + 1;
	background(hierba);
	imageMode(CENTER);
 	image(circuito, width/2, 250);
  rgba = get(mouseX, mouseY);
  r = subset(rgba, 0, 1);
  g = subset(rgba, 1, 1);
  b = subset(rgba, 2, 1);
  a = subset(rgba, 3, 1);
	//debug();
	marcador();

	uno.dibujar();
	uno.mover();

	dos.dibujar();
	dos.mover();

	tres.dibujar();
	tres.mover();

	cuatro.dibujar();
	cuatro.mover();

	cinco.dibujar();
	cinco.mover();

	seis.dibujar();
	seis.mover();

	if(t >= 4){
		uno.medir();
		uno.sentido();
		dos.medir();
		dos.sentido();
		tres.medir();
		tres.sentido();
		cuatro.medir();
		cuatro.sentido();
		cinco.medir();
		cinco.sentido();
		seis.medir();
		seis.sentido();
		t = 0;
	}
}

function marcador(){
	const numeros = [uno.laps, dos.laps, tres.laps, cuatro.laps, cinco.laps, seis.laps];
	let arreglo = numeros.sort(function(a, b){return b - a});
	let unop = arreglo.indexOf(uno.laps) + 1;
	let dosp = arreglo.indexOf(dos.laps) + 1;
	let tresp = arreglo.indexOf(tres.laps) + 1;
	let cuatrop = arreglo.indexOf(cuatro.laps) + 1;
	let cincop = arreglo.indexOf(cinco.laps) + 1;
	let seisp = arreglo.indexOf(seis.laps) + 1;
	
	translate(10, height - 105);
	fill(0);
	text(arreglo, 15, 4);
	resetMatrix();

	translate(10, height - 90);
	fill(uno.c);
	stroke(0);
	strokeWeight(1);
	triangle(0,5,0,-5,12,0);
	noStroke();
	fill(0);
	text("Position: " + unop + ". Laps: " + uno.laps + ". Speed: " + uno.v, 15, 4);
	resetMatrix();

	translate(10, height - 75);
	fill(dos.c);
	stroke(0);
	strokeWeight(1);
	triangle(0,5,0,-5,12,0);
	noStroke();
	fill(0);
	text("Position: " + dosp + ". Laps: " + dos.laps + ". Speed: " + dos.v, 15, 4);
	resetMatrix();

	translate(10, height - 60);
	fill(tres.c);
	stroke(0);
	strokeWeight(1);
	triangle(0,5,0,-5,12,0);
	noStroke();
	fill(0);
	text("Position: " + tresp + ". Laps: " + tres.laps + ". Speed: " + tres.v, 15, 4);
	resetMatrix();

	translate(10, height - 45);
	fill(cuatro.c);
	stroke(0);
	strokeWeight(1);
	triangle(0,5,0,-5,12,0);
	noStroke();
	fill(0);
	text("Position: " + cuatrop + ". Laps: " + cuatro.laps + ". Speed: " + cuatro.v, 15, 4);
	resetMatrix();

	translate(10, height - 30);
	fill(cinco.c);
	stroke(0);
	strokeWeight(1);
	triangle(0,5,0,-5,12,0);
	noStroke();
	fill(0);
	text("Position: " + cincop + ". Laps: " + cinco.laps + ". Speed: " + cinco.v, 15, 4);
	resetMatrix();

	translate(10, height - 15);
	fill(seis.c);
	stroke(0);
	strokeWeight(1);
	triangle(0,5,0,-5,12,0);
	noStroke();
	fill(0);
	text("Position: " + seisp + ". Laps: " + seis.laps + ". Speed: " + seis.v, 15, 4);
	resetMatrix();

	noStroke();
}

function debug(){
	fill(0);
	text("MOUSE:", 10, 20);
	text("Position: " + round(mouseX) + " " + round(mouseY), 10, 35);
	text("Color (RGBA): " + rgba, 10, 50);
	text("Red: " + r, 10, 65);
	text("Green: " + g, 10, 80);
	text("Blue: " + b, 10, 95);
	text("Alpha: " + a, 10, 110);

	text("RED: " + uno.laps + " laps", 200, 20);
	text("Left G: " + uno.l, 200, 35);
	text("Right G: " + uno.r, 200, 50);
	text("Speed: " + uno.v, 200, 65);

	text("GREEN: " + dos.laps + " laps", 300, 20);
	text("Left G: " + dos.l, 300, 35);
	text("Right G: " + dos.r, 300, 50);
	text("Speed: " + dos.v, 300, 65);

	text("BLUE: " + tres.laps + " laps", 400, 20);
	text("Left G: " + tres.l, 400, 35);
	text("Right G: " + tres.r, 400, 50);
	text("Speed: " + tres.v, 400, 65);

	text("YELLOW: " + cuatro.laps + " laps", 200, 100);
	text("Left G: " + cuatro.l, 200, 115);
	text("Right G: " + cuatro.r, 200, 130);
	text("Speed: " + cuatro.v, 200, 145);

	text("PURPLE: " + cinco.laps + " laps", 300, 100);
	text("Left G: " + cinco.l, 300, 115);
	text("Right G: " + cinco.r, 300, 130);
	text("Speed: " + cinco.v, 300, 145);

	text("CYAN: " + seis.laps + " laps", 400, 100);
	text("Left G: " + seis.l, 400, 115);
	text("Right G: " + seis.r, 400, 130);
	text("Speed: " + seis.v, 400, 145);
}

/*
function windowResized(){
  resizeCanvas(window.innerWidth,window.innerHeight);
}
*/