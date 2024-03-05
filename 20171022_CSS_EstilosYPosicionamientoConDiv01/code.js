var div1;
var div2;
var div3;
var canvas1;

function setup() {
  div1 = createDiv('Esto está escrito en el archivo .js, dentro de la etiqueta div1, con estilo .css');
  div1.class('uno');
  canvas1 = createCanvas(200,300);
  canvas1.class('canvas1')
  canvas1 = background(150);
  div2 = createDiv('Esto está escrito en el archivo .js, dentro de la etiqueta div2, con estilo .css');
  div2.class('uno');
  div3 = createDiv('Esto está escrito en el archivo .js, dentro de la etiqueta div3');
  div3.class('dos');
}

function draw(){
  fill(255);
	ellipse(mouseX,mouseY,20,20);
}