window.onhashchange = renderNewState;
function renderNewState() {
  const hash = window.location.hash;
  let state = decodeURIComponent(hash.substr(1));

  if (state === '') {
    state = {page: 'start'};
  } else {
    state = JSON.parse(state);
  }

  switch (state.page) {

    case 'start':
      startPage.render();
      scorePage.hide();
      rulesPage.hide();
      aboutPage.hide();
      //menuMusicSound.play(); // звук музыки в меню
      break;

    case 'play':
      init();
      musicSound.play();  // запускаем музыку в игре
      menuMusicSound.stop(); // звук музыки в меню
      rulesPage.hide();
      scorePage.hide();
      aboutPage.hide();
      level.hideMessage();
      break;

    case 'scores':
      stopGame();
      scorePage.show();
      rulesPage.hide();
      aboutPage.hide();
      menuMusicSound.play(); // звук музыки в меню
      break;

    case 'rules':
      stopGame();
      rulesPage.show();
      scorePage.hide();
      aboutPage.hide();
      menuMusicSound.play(); // звук музыки в меню
      break;

    case 'about':
      stopGame();
      aboutPage.show();
      rulesPage.hide();
      scorePage.hide();
      menuMusicSound.play(); // звук музыки в меню
      break;

    case 'levelInfo':
      level.renderMessage();
      stopGame();
      aboutPage.hide();
      rulesPage.hide();
      scorePage.hide();
      menuMusicSound.play(); // звук музыки в меню

      break;
  }
}
function switchToState(state) {
  location.hash = encodeURIComponent(JSON.stringify(state));
}
var switchToStart = function switchToStart() {
  switchToState({page: 'start'});
}
var switchToPlay = function switchToPlay() {
  switchToState({page: 'play'});
}
var switchToScores = function switchToScores() {
  switchToState({page: 'scores'});
}
var switchToRules = function switchToRules() {
  switchToState({page: 'rules'});
}
var switchToAbout = function switchToAbout() {
  switchToState({page: 'about'});
}
var switchToLevelInfo = function switchToLevelInfo() {
  switchToState({page: 'levelInfo'});
}

renderNewState();
