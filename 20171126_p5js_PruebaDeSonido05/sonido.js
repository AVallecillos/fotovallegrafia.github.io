var manzana;
var sonidoCrash;

function preload(){
	manzana = loadImage('files/AppleA01.gif');
}

function setup() {
	soundFormats('mp3', 'ogg');
	sonidoCrash = loadSound('files/Sonido01.mp3');
	createCanvas(window.innerWidth,window.innerHeight);
	//createCanvas(500,500);
}

function draw() {
	background(255,215,0);
	line(0,0,width,height);
	line(width,0,0,height);
	imageMode(CENTER);
	image(manzana, width/2, height/2 - 8, 50, 50);
}

function windowResized(){
  resizeCanvas(window.innerWidth,window.innerHeight);
}

function mousePressed(){
	if (sonidoCrash.isPlaying()){

	}else{
		sonidoCrash.setVolume(1);
		sonidoCrash.play();
	}
}