x = 0;
y = 0;
a = 50;
b = 50;

function setup(){
  createCanvas(500,500);
  //w = round(window.innerWidth/a)*a
	//h = round(window.innerHeight/b)*b
  background(255,255,255);
}

function draw(){
	//background(255,200,0);
	//noStroke();
	stroke(255);
	fill(round(random(0,1))*255);
	ellipse(x + a/2, y + b/2, a-5, b-5);
	noStroke();
	fill(round(random(0,1))*255);
	ellipse(x + a/2, y + b/2, a-25, b-25);
	x = x + a;
	if (x >= width - a){
		x = 0;
		y = y + b;
	}
	if (y >= height - b){
		y = 0;
	}
}
