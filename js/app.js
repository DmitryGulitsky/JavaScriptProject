'use strict';

// здесь объеденяется отрисовка Canvas элементов

let canvas,
  width,
  height,
  playingIntervalID;

const init = () => {

  $(`#canvasContainer`).remove();

  console.log('start init');

  let canvasContainer = $(
    `<div id="canvasContainer" style="position: absolute;"><canvas id="canvas" style="background:#000;"></canvas></div>
     <div id="levelMessageContainer"></div>
     <div id="menuContainer"></div>`
  );
  $(`#game`).append(canvasContainer);

  $('#canvasContainer').show('slow');

  width = window.innerWidth;
  height = window.innerHeight;

  $(`#canvas`)
    .attr(`width`, width)
    .attr(`height`, height);

  window.onkeydown = keyLogger.keyDownListener;
  window.onkeyup = keyLogger.keyUpListener;

  player.x = width / 2;   // размещение игрока в центре поля
  player.y = height / 2;

  startPage.clearBackground();

  playingIntervalID = setInterval(function(){
    updateGame(0.07);
    renderGame();
  },10);

  buttonControl.render();


};

const stopGame = () => {
  clearInterval(playingIntervalID);
  $(`#canvasContainer`).hide('slow');
  musicSound.stop();
};

const updateGame = (dt) => {

  level.statControl();  // контроль игры

  bullets.update(dt);
  targets.update(dt);
  player.update(dt);
};
const renderGame = () => {
  renderBackground();
  player.render();
  bullets.render();
  targets.render();
  score.render();
};
