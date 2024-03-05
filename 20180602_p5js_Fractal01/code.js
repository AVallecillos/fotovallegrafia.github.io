var slider;

function setup(){
	createCanvas(500,500);
	slider = createSlider(0, 3*PI/4, PI/8, PI/512);
	slider.position((windowWidth/2)-(width/2)+10, 10);
}

function draw(){
	background(255,215,0);
	angulo = slider.value();
	stroke(0);
	strokeWeight(1);
	translate(width/2, height);
	rama(140);
}

function rama(longitud){
	line(0, 0, 0, -longitud);
	translate(0, -longitud);
	if (longitud > 4) {
		push();
		rotate(angulo);
		rama(longitud * 0.667);
		pop();
		push();
		rotate(-angulo);
		rama(longitud * 0.667);
		pop();
	}
}