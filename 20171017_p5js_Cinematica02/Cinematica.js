var canvas;
var bFuego;
var bPausa;
var div;
var texto;

var newton;
var manzana;

var x;
var x0 = 0;
var vx = 0;
var vx0 = 25;
var ax = 0;
var ax0 = 0;

var y;
var y0 = 500;
var vy = 0;
var vy0 = -97;
var ay = 0;
var ay0 = 9.81;

var t = 100;

function preload(){
	newton = loadImage("files/IsaacNewtonB05.jpg");
	manzana = loadImage("files/AppleA01.gif");
}

function setup() {
	texto = createDiv('<h1 style="font-size:24px; text-align:center; color:grey;">CINEMÁTICA</h1>');
	texto.style("font-family:sans-serif; font-size:15px; width:500px; margin-left:auto; margin-right:auto; background-color:white");
	texto = createDiv('<p style="text-align:justify; color:grey;"> Cinemática es una aplicación orientada al estudio del movimiento de un objeto en lanzamiento libre. Puedes descargarte una versión para dispositivos android en el siguiente <a target="_blank" href="https://play.google.com/store/apps/details?id=appinventor.ai_fotovallegrafia.Cinematica&feature=more_from_developer#?t=W251bGwsMSwyLDEwMiwiYXBwaW52ZW50b3IuYWlfZm90b3ZhbGxlZ3JhZmlhLkNpbmVtYXRpY2EiXQ.." style="text-decoration:none; color:#000000">enlace</a> o visitar la página de desarrollo en <a target="_blank" href="http://fotovallegrafia.blogspot.com.es/p/aplicaciones-android-cinematica.html" style="text-decoration:none; color:#000000">fotovallegrafía</a> para más información.</p>');
	texto.style("font-family:sans-serif; font-size:15px; width:500px; margin-left:auto; margin-right:auto; background-color:white");
	div = createDiv('');
	div.style("height:10px");
	canvas = createCanvas(500,500);
	div = createDiv('');

	bFuego = createButton('¡Fuego!');
	bFuego.style("width: 100px");

	bPausa = createButton('Pausa');
	bPausa.style("width: 100px");

	texto = createDiv('<h4 style="text-align:center; color:grey;">&copy; 2016 Antonio Vallecillos - <a target="_blank" href="https://twitter.com/fotovallegrafia" style="text-decoration:none; color:#000000">@fotovallegrafia</a></h4>');
	texto.style("font-family:sans-serif; font-size:15px; width:500px; margin-left:auto; margin-right:auto; background-color:white");
}

function draw() {
	imageMode(CORNER);
	image(newton,0,0,width,height);
	imageMode(CENTER);
	x = 0.5 * ax0 * pow(t, 2) + vx0 * t + x0;
	y = 0.5 * ay0 * pow(t, 2) + vy0 * t + y0;
	image(manzana, x, y-12, 25,25);
	//strokeWeight(15);
	//point(x, y-10);
	
	bFuego.mousePressed(fuego);
	bPausa.mousePressed(pausa);
	
	seguir();

}

function mousePressed(){
}

function fuego(){
	t = 0;
}

function seguir(){
	t = t + 0.1;
}

function pausa(){

}