var x = -10;
var y = -10;
var r;

function setup(){
	createCanvas(500,500);
	background(0);
	strokeWeight(5);
}

function draw(){
	stroke(map(y,0,500,0,255),map(x,0,500,0,255),map(x+y,0,1000,255,0));
	r = round(random(0,1));
	if (r == 0){
		line(x+0,y+0,x+10,y+10);	
	}else{
		line(x+10,y+0,x+0,y+10);
	}
	x = x + 10;
	if (x >= width+10){
		x = -10;
		y = y + 10;		
	}
}