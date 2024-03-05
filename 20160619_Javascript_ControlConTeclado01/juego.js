var canvas = null;
var ctx = null;
var lastPress = null;
var pause = true;

var x = 0;
var y = 0;
var dir = 0;

var KEY_ENTER = 13;
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;

window.requestAnimationFrame = (function (){
	return window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		function (callback) {
			window.setTimeout(callback, 17);
		};
}());

document.addEventListener('keydown', function(evt){
	lastPress = evt.which;
}, false);

function paint(ctx) {
	// Limpiar el canvas
	ctx.fillStyle = '#000';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	// Dibujar un cuadrado
	ctx.fillStyle = '#0F0';
	ctx.fillRect(x, y, 10, 10);
	
	// Debug última tecla pulsada
	ctx.fillStyle = '#FFF';
	ctx.fillText('Codigo de la ultima tecla pulsada: ' + lastPress, 10, 15);
	
	ctx.fillText('Direccion: ' + dir, 10, 25);
	ctx.fillText('Pulsa las teclas de flecha para controlar la direccion', 10, canvas.height-10);
	ctx.fillText('Pulsa Enter para comenzar / pausar el juego', 10, canvas.height-20);
	
	// Escribe PAUSA
	if (pause) {
		ctx.textAlign = 'center';
		ctx.fillText('PAUSA', canvas.width/2, 75);
		ctx.textAlign = 'left';
	}
}

function act() {
	// Cambio de dirección
	if (lastPress == KEY_UP) {
		dir = 0;
	}
	if (lastPress == KEY_RIGHT) {
		dir = 1;
	}
	if (lastPress == KEY_DOWN) {
		dir = 2;
	}
	if (lastPress == KEY_LEFT){
		dir = 3;
	}
	
	if (!pause) {
		
		// Mover el cuadrado
		if (dir == 0) {
			y = y - 10;
		}
		if (dir == 1) {
			x = x + 10;
		}
		if (dir == 2) {
			y = y + 10;
		}
		if (dir == 3) {
			x = x - 10;
		}
		
		// Si se sale de la pantalla
		if (x > canvas.width) {
			x = 0;
		}
		if (y > canvas.height) {
			y = 0;
		}
		if (x < 0) {
			x = canvas.width;
		}
		if (y < 0) {
			y = canvas.height;
		}
	}
	
	// Pausa
	if (lastPress == KEY_ENTER) {
		pause = !pause;
		lastPress = null;
	}
}

function repaint(){
	window.requestAnimationFrame(repaint);
	paint(ctx);
}

function run() {
	setTimeout(run, 20);
	act();
}

function init() {
	// Canvas y content
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	
	//Iniciar el juego
	run();
	repaint();
}

window.addEventListener('load', init, false);