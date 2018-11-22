let canvas,
  ctx,
  width,
  height,
  playingIntervalID;

//let canvasContainer = $(
//`<div id="canvasContainer"><canvas id="canvas" style="background:#000;"></canvas></div>`
//);
//$(`#game`).append(canvasContainer);

function init(){

  console.log('start init');

  fightSound.sound.play();

  $('#canvasContainer').show('slow');

  width = window.innerWidth;
  height = window.innerHeight;

  //ctx = canvas.getContext('2d');
  //ctx.clearRect(0, 0, canvas.width, canvas.height);

  $(`#canvas`)
    .attr(`width`, width)
    .attr(`height`, height);

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
  $(`#canvasContainer`).hide('slow');
  $('#canvasContainer').show();
  musicSound.stop();
  excellentSound.sound.play();
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
  $(`#canvas`)
    .attr(`width`, width)
    .attr(`height`, height);
}