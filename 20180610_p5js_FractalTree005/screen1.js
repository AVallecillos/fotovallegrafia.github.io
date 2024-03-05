var slider1;
var slider2;
var slider3;
var button1;

function setup(){
	//createCanvas(500,500);
	createCanvas(window.innerWidth,window.innerHeight);
	slider1 = createSlider(100, 300, 120, 1);
	slider2 = createSlider(2/3, 3/4, 12/17, 0.0001);
	slider3 = createSlider(0, 3*PI/4, PI/8, PI/512);
	button1 = createButton('BACK');
	var density = displayDensity();
  	pixelDensity(density*1);
}

function draw(){
	background(255,215,0);
	textSize(12);
	textAlign(RIGHT);
	text('LENGTH', (windowWidth/2)-(width/2)+100, 32);
	text('COMPLEXITY', (windowWidth/2)-(width/2)+100, 62);
	text('ANGLE', (windowWidth/2)-(width/2)+100, 92);

	longitud = slider1.value();
	relacion = slider2.value();
	angulo = slider3.value();

	stroke(0);
	strokeWeight(3);
	push();
	translate(width/2, height);
	rama(longitud);

	slider1.position((windowWidth/2)-(width/2)+110, 20);
	slider1.size(width-220, 10);
	slider2.position((windowWidth/2)-(width/2)+110, 50);
	slider2.size(width-220, 10);
	slider3.position((windowWidth/2)-(width/2)+110, 80);
  	slider3.size(width-220, 10);
  	button1.position((windowWidth/2)+(width/2)-90, 20);
  	button1.size(70, 70);
  	button1.mousePressed(back);
  	pop();
  	debug();
}

function windowResized(){
	resizeCanvas(window.innerWidth,window.innerHeight);
}

function rama(longitud){
	line(0, 0, 0, -longitud);
	translate(0, -longitud);
	if (longitud > 8) {
		push();
		rotate(angulo);
		rama(longitud * relacion);
		pop();
		push();
		rotate(-angulo);
		rama(longitud * relacion);
		pop();
	}
}

function back(){
	window.location.href = "index.html";
}

function closeWindow(){
	var myWindow = window.open("", "_self");
	myWindow.close();
}