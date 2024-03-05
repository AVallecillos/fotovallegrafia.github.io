function Coche(x,y,v,c){
	this.x = x;
	this.y = y;
	this.v = v;
	this.c = c;
	this.angulo = 180*(2*PI/360);
	this.l;
	this.m;
	this.r;
	this.f;
	this.t = 0;
	this.meta;
	this.laps = 0;
	this.sensorlx = 30;
	this.sensorm = 30;
	this.sensorly = 15;
	this.sensorf = -10;

	this.dibujar = function(){
		translate(this.x, this.y);
		rotate(this.angulo);
		fill(this.c);
		stroke(0);
		strokeWeight(1);
		triangle(0,5,0,-5,12,0);
		stroke(this.c);
		strokeWeight(2);
		//point(40, -15);
		//point(40, 0);
		//point(40, +15);
		noStroke();
		resetMatrix();
	}

	this.medir = function(){
		this.l = subset(get(this.x +this.sensorlx*cos(this.angulo)-this.sensorly*cos(this.angulo+(PI/2)), this.y +this.sensorlx*sin(this.angulo)-this.sensorly*sin(this.angulo+(PI/2))), 1, 1);
		this.m = subset(get(this.x +this.sensorm*cos(this.angulo), this.y +this.sensorm*sin(this.angulo)), 1, 1);
		this.r = subset(get(this.x +this.sensorlx*cos(this.angulo)+this.sensorly*cos(this.angulo+(PI/2)), this.y +this.sensorlx*sin(this.angulo)+this.sensorly*sin(this.angulo+(PI/2))), 1, 1);
		this.f = subset(get(this.x +this.sensorf*cos(this.angulo), this.y +this.sensorf*sin(this.angulo)), 1, 1);
	}

	this.mover = function(){
		if(this.l != "215" && this.m != "215" && this.r != "215"){
			this.v = v;
			this.angulo = this.angulo + 0*(2*PI/360); //sigue recto
		}

		if(this.l == "215" && this.m != "215" && this.r != "215"){
			this.v = v;
			this.angulo = this.angulo + 2*(2*PI/360); //gira a la derecha
		}

		if(this.l == "215" && this.m == "215" && this.r != "215"){
			this.v = v;
			this.angulo = this.angulo + 5*(2*PI/360); //gira mucho a la derecha
		}

		if(this.l != "215" && this.m != "215" && this.r == "215"){
			this.v = v;
			this.angulo = this.angulo - 2*(2*PI/360); //gira a la izquierda
		}

		if(this.l != "215" && this.m == "215" && this.r == "215"){
			this.v = v;
			this.angulo = this.angulo - 5*(2*PI/360); //gira mucho a la izquierda
		}

		if(this.l == "215" && this.m == "215" && this.r == "215"){
			this.v = 0;
			this.angulo = this.angulo - 5*(2*PI/360); //para
		}
		this.x = this.x + cos(this.angulo)*this.v;
		this.y = this.y + sin(this.angulo)*this.v;
	}

	this.sentido = function(){
		if(clock > 100 && this.m == "150"){
			this.meta = 0;
		}
		if(this.meta == "0" && (this.m == "140" || this.l == "140" || this.r == "140")){
			this.meta = 1;
		}
		if(this.meta == "0" && (this.m == "130" || this.l == "130" || this.r == "130")){
			this.meta = -1;
			this.angulo = this.angulo - 180*(2*PI/360);
		}
		if(this.meta == "1" && (this.m == "130" || this.l == "130" || this.r == "130")){
			this.meta = 2;
			this.laps = this.laps + 1;
		}
	}
}