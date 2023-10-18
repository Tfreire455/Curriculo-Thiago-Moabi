
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [115, 246, 360, 45, 300, 175];
let velocidadeCarros =[3, 5, 4.2, 6, 5.5, 2];
let larguraCarro = 45;
let alturaCarro = 30;



function mostraCarro (){
  for (let i = 0; i < Carros.length; i++)
    image(Carros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro)

}


function movimentaCarro() {
  
  for (let i = 0; i < velocidadeCarros.length; i++ ) {
  xCarros[i] -= velocidadeCarros[i];
  }
}

function posicaoInicialDoCarro(){
  for (let i = 0; i < xCarros.length; i++) {
  if (PassouATela(xCarros[i])) {
    xCarros[i] = 600;
  }
  }
  }

function PassouATela (xCarro){
  return xCarro < -30;
  
}