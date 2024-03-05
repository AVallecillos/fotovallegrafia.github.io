var x = -10;
var y = -10;
var r;

function setup(){
	createCanvas(500,500);
	background(255,215,0);
}

function draw(){
	stroke(0, map(y,0,height,10,255));
	strokeWeight(map(y,0,height,1,7));
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