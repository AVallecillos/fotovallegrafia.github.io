function Asteroide () {
	this.x;
	this.y;
	this.z = random(width);

	this.dibujar = function() {
		fill(0);
		noStroke();
		this.ax = map(this.x / this.z, 0, 1, 0, width);
		this.ay = map(this.y / this.z, 0, 1, 0, height);
		this.r = map(this.z, 0, width, 25, 0);
		rect(this.ax-this.r/2, this.ay-this.r/2, this.r, this.r);
	}

	this.mover = function() {
		this.z = this.z - 10;
		if (this.z < 1) {
			this.x = random(-width/4, width/4);
			this.y = random(-height/4, height/4);
			this.z = width;
		}
	}
}