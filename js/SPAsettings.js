'use strict';

// здесь задаем настройски SPA

window.onhashchange = renderNewState;

function renderNewState() {
  const hash = window.location.hash;
  let state = decodeURIComponent(hash.substr(1));

  if (state === '') {     // страница по умолчанию
    state = {page: 'start'};
  } else {
    state = JSON.parse(state);
  }

  switch (state.page) {

    case 'start':
      startPage.render();
      addEventListeners();
      rulesPage.hide();
      scorePage.hide();
      aboutPage.hide();
      break;

    case 'play':
      init();
      menuMusicSound.stop(); // звук музыки в меню
      rulesPage.hide();
      scorePage.hide();
      aboutPage.hide();
      mainMenu.hide();
      level.hideMessage();
      musicSound.play();  // запускаем музыку в игре
      fightSound.play();  // звук fight
      break;

    case 'scores':
      stopGame();
      scorePage.show();
      scorePage.showAllScores();  // загружаем AJAX данные с сервера
      rulesPage.hide();
      aboutPage.hide();
      mainMenu.show();
      menuMusicSound.play(); // звук музыки в меню
      break;

    case 'rules':
      stopGame();
      startPage.hide();
      rulesPage.show();
      scorePage.hide();
      aboutPage.hide();
      mainMenu.show();
      menuMusicSound.play();
      break;

    case 'about':
      stopGame();
      aboutPage.show();
      rulesPage.hide();
      scorePage.hide();
      menuMusicSound.play();
      mainMenu.show();
      break;

    case 'levelInfo':
      level.renderMessage();
      stopGame();
      excellentSound.play();    // звук excellent
      aboutPage.hide();
      rulesPage.hide();
      scorePage.hide();
      mainMenu.show();
      menuMusicSound.play(); // звук музыки в меню
      break;
  }
}

function switchToState(state) {
  location.hash = encodeURIComponent(JSON.stringify(state));
}

const switchToStart = function switchToStart() {
  switchToState({page: 'start'});
};
const switchToPlay = function switchToPlay() {
  switchToState({page: 'play'});
};
const switchToScores = function switchToScores() {
  switchToState({page: 'scores'});
};
const switchToRules = function switchToRules() {
  switchToState({page: 'rules'});
};
const switchToAbout = function switchToAbout() {
  switchToState({page: 'about'});
};
const switchToLevelInfo = function switchToLevelInfo() {
  switchToState({page: 'levelInfo'});
};

renderNewState();
