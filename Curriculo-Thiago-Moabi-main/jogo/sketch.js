
function setup() {
  createCanvas(500, 450);
  trilhaSonora.loop();
}

function draw() {
  background(imagemEstrada);
  mostraVaca();
  mostraCarro();
  movimentaCarro();
  movimentaVaca();
  posicaoInicialDoCarro();
  verificaColisao();
  Ponto();
  marcaPonto();
  posicaoInicial();
  
}


