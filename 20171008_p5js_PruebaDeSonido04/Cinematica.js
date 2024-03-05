var img;

function preload(){
	img = loadImage("files/AppleA01.gif");
}

function setup() {
	mySound = loadSound('files/Sonido_01.mp3');
	createCanvas(500,500);
	background(255,215,0);
}

function draw() {
	//line(0,0,width,height);
	//line(width,0,0,height);
	imageMode(CENTER);
	image(img, width/2, height/2 - 8, 50, 50);
}

function mousePressed(){
	mySound.setVolume(1);
	mySound.play();
}