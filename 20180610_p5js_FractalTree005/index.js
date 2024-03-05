var button1;
var button2;

function setup(){
	//createCanvas(500,500);
	createCanvas(window.innerWidth,window.innerHeight);
	button1 = createButton('GO');
	button2 = createButton('ABOUT');
	var density = displayDensity();
  	pixelDensity(density);

}

function draw(){
	background(255,215,0);
	textAlign(CENTER);
	textSize(36);
	text('FRACTAL TREE', width/2, 250);
	textSize(12);
	text('Press the "GO" button and enjoy', width/2, 265);
	button1.position((windowWidth/2)+(width/2)-90, 20);
	button2.position((windowWidth/2)+(width/2)-90, 110);
  	button1.size(70, 70);
  	button2.size(70, 70);
  	button1.mousePressed(go);
  	button2.mousePressed(about);
  	textAlign(LEFT);
  	debug();
}

function windowResized(){
	resizeCanvas(window.innerWidth,window.innerHeight);
}

function go(){
	window.location.href = "screen1.html";
}

function about(){
	window.location.href = "screen2.html";
}

function closeWindow(){
	var myWindow = window.open("", "_self");
	myWindow.close();
}

function leave(){
	var myWindow = window.open("", "_self");
	myWindow.document.write("");
	setTimeout (function() {myWindow.close();},1000);
}

function cierra(){
	window.open('','_parent','');
	window.close();
}