let canvas,
  ctx,
  width,
  height,
  playingIntervalID;

function init(){

  console.log('start init');

  let canvasContainer = document.getElementById('canvasContainer');
  canvas = document.getElementById('canvas');

  canvasContainer.style.display = 'block';

  width = window.innerWidth;
  height = window.innerHeight;

  ctx = canvas.getContext('2d');
  //ctx.clearRect(0, 0, canvas.width, canvas.height);

  canvas.width = width;
  canvas.height = height;

  window.onkeydown = keyLogger.keyDownListener;
  window.onkeyup = keyLogger.keyUpListener;

  player.x = width / 2;   // размещение игрока в центре поля
  player.y = height / 2;

  playingIntervalID = setInterval(function(){
    updateGame(24/1000);
    renderGame();
  },10);

}

function stopGame() {
  clearInterval(playingIntervalID);
  $('#canvasContainer').show('slow');
  musicSound.stop();
}

function updateGame(dt){

  level.statControl();  // контроль игры

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
}