var x = -20;
var y = -20;
var r;

function setup(){
	createCanvas(500,500);
	background(255,215,0);
}

function draw(){
	//stroke(0, map(y,0,height,10,255));
	//strokeWeight(map(y,0,height,1,7));
	r = round(random(0,2));
	if (r == 0){
		//line(x+0,y+0,x+10,y+10);
		noStroke();
		fill(0, map(y,0,height,10,255));
		ellipse(x+10,y+10,20,20);
	}else if (r == 1){
		fill(255,215,0);
		noStroke();
		ellipse(x+10,y+10,20,20);
	}else{
		//line(x+10,y+0,x+0,y+10);
		//noFill();
		//stroke(0, map(y,0,height,10,255));
		noStroke();
		fill(0, map(y,0,height,10,255));
		//strokeWeight(6);
		//ellipse(x+10,y+10,14,14);
		rect(x,y,20,20);
	}
	x = x + 20;
	if (x >= width+20){
		x = -20;
		y = y + 20;		
	}
}