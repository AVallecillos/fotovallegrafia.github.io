window.addEventListener('load',init,false);

var canvas=null;
var contexto=null;
var x;
var y;

function init(){
    canvas=document.getElementById('canvas');
    canvas.style.background='#000';
    contexto=canvas.getContext('2d');
    definirvariables();
	run();
}

function definirvariables(){
	x=0;
	y=50*canvas.height/100-5;
}

function run(){
    requestAnimationFrame(run);
    act();
    paint(contexto);
}

function act(){
    x+=2;
    if(x>canvas.width)
        x=0;
}

function paint(contexto){
    contexto.clearRect(0,0,canvas.width,canvas.height);
    contexto.fillStyle='#0f0';
    contexto.fillRect(x,y,10,10);
}

window.requestAnimationFrame=(function(){
    return window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame || 
        function(callback){window.setTimeout(callback,17);};
})();
