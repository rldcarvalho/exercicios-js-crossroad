//código do ator
let xAtor = 200;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (yAtor < 366){
      yAtor += 3;
    }

  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor+15, 20);
    if(colisao){
      colidiu();
      somDaColisao.play();
      if(meusPontos > 0){
        meusPontos -= 1;
      }
    }
  }
}

function colidiu(){
      xAtor = 200;
      yAtor = 366;
}

function incluiPontos(){
  textSize(25);
  textAlign(CENTER);
  fill(color(255,240,60))
  text(meusPontos, width / 5 , 28);
}

function marcaPontos(){
  if (yAtor < 5){
    colidiu();
    somDosPontos.play();
    meusPontos += 1;
  }
}