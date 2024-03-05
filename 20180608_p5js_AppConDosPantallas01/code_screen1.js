var slider1;
var slider2;
var slider3;
var button;

function setup(){
	//createCanvas(500,500);
	createCanvas(window.innerWidth,window.innerHeight);
	slider1 = createSlider(100, 300, 120, 1);
	slider2 = createSlider(2/3, 3/4, 12/17, 0.0001);
	slider3 = createSlider(0, 3*PI/4, PI/8, PI/512);
	button = createButton('BACK');
}

function draw(){
	background(255,215,0);
	longitud = slider1.value();
	relacion = slider2.value();
	angulo = slider3.value();
	stroke(0);
	strokeWeight(1);
	translate(width/2, height);
	rama(longitud);
	slider1.position((windowWidth/2)-(width/2)+10, 10);
	slider2.position((windowWidth/2)-(width/2)+10, 40);
	slider3.position((windowWidth/2)-(width/2)+10, 70);
  	button.position((windowWidth/2)+(width/2)-66, 12);
  	button.mousePressed(go);
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

function go(){
	window.location.href = "index.html";
}