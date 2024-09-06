// bolinha1
let posicaoXbolinha=200 // fornece a posicao X da bolinha
let posicaoYbolinha=200 //fornece a posicao Y da bolinha
let diametro=100
let cor
// bolinha2
let posicaoXbolinha2=100 // fornece a posicao X da bolinha
let posicaoYbolinha2=100 //fornece a posicao Y da bolinha
let diametro2=100
let cor2
function setup() {
  createCanvas(300, 300);
  background('red')
  cor=color(random(0,25,255),random(0,255),random(0,255)) 
  cor2=color(random(0,25,255),random(0,255),random(0,255)) 
}
  
function draw() {
 fill(cor)
  circle(posicaoXbolinha,posicaoYbolinha,diametro)
  fill(cor2)
  circle(posicaoXbolinha2,posicaoYbolinha,diametro2)
  //posicaoXbolinha=posicaoXbolinha+5
  //posicaoYbolinha=posicaoYbolinha+5
  diametro=diametro+1
  diametro2=diametro2+1
  if(mouseIsPressed){
    cor=color(random(0,255),random(0,255),random(0,255))
    cor2=color(random(0,25,255),random(0,255),random(0,255)) 
  diametro=0
    diametro2=0
}
}