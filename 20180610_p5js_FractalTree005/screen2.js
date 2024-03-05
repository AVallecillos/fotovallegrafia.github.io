var button1;
var img;

function setup(){
	//createCanvas(500,500);
	createCanvas(window.innerWidth,window.innerHeight);
	img = loadImage("LogoAVapp.png");
	button1 = createButton('BACK');
	var density = displayDensity();
  	pixelDensity(density);
}

function draw(){
	background(255,215,0);
	textAlign(CENTER);
	textSize(36);
	text('FRACTAL TREE', width/2, 250);
	textSize(12);
	text('Version 0.05 [2018.07.05]', width/2, 265);
	text('Design and coding by Antonio Vallecillos', width/2, 300);
	text('antoniovallecillos@blogspot.com', width/2, 315);
	text('Twitter: @a_vallecillos', width/2, 330);
	button1.position((windowWidth/2)+(width/2)-90, 20);
  	button1.size(70, 70);
  	button1.mousePressed(back);
  	image(img, width/2, height/2);
  	textAlign(LEFT);
  	debug();
}

function windowResized(){
	resizeCanvas(window.innerWidth,window.innerHeight);
}

function back(){
	window.location.href = "index.html";
}