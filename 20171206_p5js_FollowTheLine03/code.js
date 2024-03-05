var circuito;
var rgba, r, g, b, a;
var uno;
var dos;
var tres;
var cuatro;
var hierba;
var t;

function preload(){
  circuito = loadImage("images/Circuito04.png");
}

function setup() {
  createCanvas(500, 500);
  //createCanvas(window.innerWidth, window.innerHeight);
  //createCanvas(windowWidth, windowHeight);
  uno = new Coche(width/2+30, height/2+163, 2.6, color(255,0,0));
  dos = new Coche(width/2+30, height/2+163, 2.5, color(0,255,0));
  tres = new Coche(width/2+30, height/2+163, 2.4, color(0,0,255));
  cuatro = new Coche(width/2+30, height/2+163, 2.3, color(255,255,0));  
  cinco = new Coche(width/2+30, height/2+163, 2.2, color(255,0,255));  
  seis = new Coche(width/2+30, height/2+163, 2.1, color(0,255,255)); 
  hierba = color(0, 120, 30);
  t = 5;
}

function draw(){
	t = t + 1;
	background(hierba);
	imageMode(CENTER);
 	image(circuito, width/2, height/2);
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

	if(t >= 5){
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
	translate(width/2-240, height/2-240);
	fill(uno.c);
	triangle(0,5,0,-5,12,0);
	fill(255);
	text(uno.laps + " Laps. Speed: " + uno.v, 15, 4);
	resetMatrix();

	translate(width/2-240, height/2-225);
	fill(dos.c);
	triangle(0,5,0,-5,12,0);
	fill(255);
	text(dos.laps + " Laps. Speed: " + dos.v, 15, 4);
	resetMatrix();

	translate(width/2-240, height/2-210);
	fill(tres.c);
	triangle(0,5,0,-5,12,0);
	fill(255);
	text(tres.laps + " Laps. Speed: " + tres.v, 15, 4);
	resetMatrix();

	translate(width/2-240, height/2-195);
	fill(cuatro.c);
	triangle(0,5,0,-5,12,0);
	fill(255);
	text(cuatro.laps + " Laps. Speed: " + cuatro.v, 15, 4);
	resetMatrix();

	translate(width/2-240, height/2-180);
	fill(cinco.c);
	triangle(0,5,0,-5,12,0);
	fill(255);
	text(cinco.laps + " Laps. Speed: " + cinco.v, 15, 4);
	resetMatrix();

	translate(width/2-240, height/2-165);
	fill(seis.c);
	triangle(0,5,0,-5,12,0);
	fill(255);
	text(seis.laps + " Laps. Speed: " + seis.v, 15, 4);
	resetMatrix();
}

/*
function debug(){
	fill(255);
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

	text("YELLOW: " + cuatro.laps + " laps", 200, 450);
	text("Left G: " + cuatro.l, 200, 465);
	text("Right G: " + cuatro.r, 200, 480);
	text("Speed: " + cuatro.v, 200, 495);

	text("PURPLE: " + cinco.laps + " laps", 300, 450);
	text("Left G: " + cinco.l, 300, 465);
	text("Right G: " + cinco.r, 300, 480);
	text("Speed: " + cinco.v, 300, 495);

	text("CYAN: " + seis.laps + " laps", 400, 450);
	text("Left G: " + seis.l, 400, 465);
	text("Right G: " + seis.r, 400, 480);
	text("Speed: " + seis.v, 400, 495);
}
*/

function windowResized(){
  resizeCanvas(window.innerWidth,window.innerHeight);
}