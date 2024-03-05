var button;

function setup(){
	//createCanvas(500,500);
	createCanvas(window.innerWidth,window.innerHeight);
	button = createButton('GO');
  	
}

function draw(){
	background(255,215,0);
	textAlign(CENTER);
	textSize(24);
	text('FRACTAL TREE', width/2, 220);
	textSize(12);
	text('Desing and coding by Antonio Vallecillos', width/2, 235);
	text('Press de upper right button and enjoy', width/2, 250);
	button.position((windowWidth/2)+(width/2)-50, 12);
  	button.mousePressed(go);
}

function windowResized(){
	resizeCanvas(window.innerWidth,window.innerHeight);
}

function go(){
	window.location.href = "screen1.html";
}