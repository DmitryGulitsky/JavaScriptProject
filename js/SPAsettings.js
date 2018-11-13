window.onhashchange = renderNewState;
function renderNewState() {
  const hash = window.location.hash;
  let state = decodeURIComponent(hash.substr(1));

  if (state === '') {
    state = {page: 'scores'};
  } else {
    state = JSON.parse(state);
  }

  switch (state.page) {
    case 'play':
      init();
      musicSound.play();  // запускаем музыку в игре
      menuMusicSound.stop(); // звук музыки в меню
      rulesPage.hide();
      scorePage.hide();
      optionsPage.hide();
      break;

    case 'scores':
      stopGame();
      scorePage.show();
      rulesPage.hide();
      optionsPage.hide();
      menuMusicSound.play(); // звук музыки в меню
      break;

    case 'rules':
      stopGame();
      rulesPage.show();
      scorePage.hide();
      optionsPage.hide();
      menuMusicSound.play(); // звук музыки в меню
      break;

    case 'options':
      stopGame();
      optionsPage.show();
      rulesPage.hide();
      scorePage.hide();
      menuMusicSound.play(); // звук музыки в меню
      break;
  }
}
function switchToState(state) {
  location.hash = encodeURIComponent(JSON.stringify(state));
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
var switchToOptions = function switchToOptions() {
  switchToState({page: 'options'});
}

renderNewState();
