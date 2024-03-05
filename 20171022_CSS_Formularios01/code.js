var div1;
var div2;
var div3;
var canvas1;

var inputX, inputY, botonFuego, texto;

function setup() {
  div1 = createElement('div', 'Esto está escrito en el archivo .js, dentro de la etiqueta div1, con estilo .css');
  div1.class('uno');
  canvas1 = createCanvas(200,300);
  canvas1.class('canvas1')
  canvas1 = background(150);
  div2 = createElement('div', 'Esto está escrito en el archivo .js, dentro de la etiqueta div2, con estilo .css');
  div2.class('uno');

  inputX = createInput(100);
  inputY = createInput(50);
  botonFuego = createButton('¡Fuego!');

  div3 = createElement('div', 'Esto está escrito en el archivo .js, dentro de la etiqueta div3');
  div3.class('dos');
}

function draw(){
  fill(255);
	ellipse(inputX.value(),inputY.value(),20,20);
}