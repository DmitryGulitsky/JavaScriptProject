var canvas,
  ctx,
  width,
  height;

function init(){

  console.log('start init');

  canvas = document.getElementById('canvas');
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;
  ctx = canvas.getContext('2d');

  window.onkeydown = keyLogger.keyDownListener;
  window.onkeyup = keyLogger.keyUpListener;

player.x = width/2;   // размещение игрока в центре поля
player.y = height/2;

  setInterval(function(){
    updateGame(24/1000);
    renderGame();
  },10);

}

function stopGame() {

}

function updateGame(dt){
  bullets.update(dt);
  targets.update(dt);
  player.update(dt);
  //score.update(dt);
}
function renderGame(){
  renderBackground();
  player.render(ctx);
  bullets.render(ctx);
  targets.render(ctx);
  score.render(ctx);
}
function renderBackground(){
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = "#c6c6c6";
  ctx.fillRect(0,0,width,height);
}