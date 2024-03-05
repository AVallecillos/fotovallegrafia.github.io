function Coche(x,y,v,c){
	this.x = x;
	this.y = y;
	this.v = v;
	this.c = c;
	this.angulo = 180*(2*PI/360);
	this.l;
	this.m;
	this.r;
	this.t = 0;
	this.gris;
	this.laps = 0;
	this.sensorlx = 30;
	this.sensorm = 15;
	this.sensorly = 8;

	this.dibujar = function(){
		translate(this.x, this.y);
		rotate(this.angulo);
		fill(this.c);
		triangle(0,5,0,-5,12,0);
		stroke(this.c);
		strokeWeight(2);
		//point(20, -5);
		//point(20, +5);
		stroke(0);
		noStroke();
		resetMatrix();
	}

	this.medir = function(){
		this.l = subset(get(this.x +this.sensorlx*cos(this.angulo)-this.sensorly*cos(this.angulo+(PI/2)), this.y +this.sensorlx*sin(this.angulo)-this.sensorly*sin(this.angulo+(PI/2))), 1, 1);
		this.m = subset(get(this.x +this.sensorm*cos(this.angulo), this.y +this.sensorm*sin(this.angulo)), 1, 1);
		this.r = subset(get(this.x +this.sensorlx*cos(this.angulo)+this.sensorly*cos(this.angulo+(PI/2)), this.y +this.sensorlx*sin(this.angulo)+this.sensorly*sin(this.angulo+(PI/2))), 1, 1);
	}

	this.mover = function(){
		if(this.l == "0" && this.r == "0"){
			this.v = v;
			this.angulo = this.angulo + 0*(2*PI/360);
		}else if(this.l != "0" && this.r == "0"){
			this.angulo = this.angulo + 5*(2*PI/360);
		}else if(this.l == "0" && this.r != "0"){
			this.angulo = this.angulo - 5*(2*PI/360);
		}else if(this.l == "120" && this.r == "120"){
			this.v = 1;
			this.angulo = this.angulo - 5*(2*PI/360);
		}else if(this.l == "130" && this.r == "130"){
			this.v = 1;
			this.angulo = this.angulo - 5*(2*PI/360);
		}
		this.x = this.x + cos(this.angulo)*this.v;
		this.y = this.y + sin(this.angulo)*this.v;
	}

	this.sentido = function(){
		if(this.m == "0"){
			this.gris = 0;
		}
		if(this.gris == "0" && (this.m == "100" || this.l == "100" || this.r == "100")){
			this.gris = 1;
		}
		if(this.gris == "0" && (this.m == "50" || this.l == "50" || this.r == "50")){
			this.gris = -1;
			this.angulo = this.angulo - 180*(2*PI/360);
		}
		if(this.gris == "1" && (this.m == "50" || this.l == "50" || this.r == "50")){
			this.gris = 2;
			this.laps = this.laps + 1;
		}
	}
}