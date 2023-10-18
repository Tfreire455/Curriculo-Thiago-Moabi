let imagemEstrada;
let vaca;
let carroVerde;
let carroPreto;
let carroAmarelo;

let trilhaSonora;
let somDoPonto;
let somDaColisao;

function preload(){
  
  imagemEstrada = loadImage("imagem/estrada.png");
  vaca = loadImage("imagem/ator-1.png")
  carroVerde = loadImage("imagem/carro-1.png")
  carroPreto = loadImage("imagem/carro-2.png")
  carroAmarelo = loadImage("imagem/carro-3.png")
  Carros = [carroVerde, carroPreto, carroAmarelo, carroVerde, carroPreto, carroAmarelo]
  
  
  trilhaSonora = loadSound("sons/trilha.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  somDaColisao = loadSound("sons/colidiu.mp3");
  
}