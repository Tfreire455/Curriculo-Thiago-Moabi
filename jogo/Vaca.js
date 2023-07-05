let yVaca = 420;
let xVaca = 55;
let meusPontos = 0;

function mostraVaca() {
  image(vaca, xVaca, yVaca, 25, 25);
}

function movimentaVaca() {
  if (keyIsDown(UP_ARROW)) {
    yVaca -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yVaca += 3;
  }
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

  for (let i = 0; i < Carros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      larguraCarro,
      alturaCarro,
      xVaca,
      yVaca,
      30
    );
    if (colisao) {
      colidiu();
      somDaColisao.play();
      if (meusPontos > 0) {
        meusPontos -= 1;
      }
    }
  }
}

function colidiu() {
  yVaca = 420;
}

function Ponto() {
  fill(17, 40, 161);
  textSize(23);
  textAlign(CENTER);
  text(meusPontos, width / 2, 26);
}

function marcaPonto() {
  if (yVaca <= 12) {
    meusPontos += 1;
    somDoPonto.play();
  }
}

function posicaoInicial() {
  if (yVaca == 12) {
    yVaca = 420;
  }
}
