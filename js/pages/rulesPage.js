'use strict';

// здесь создаем  страницу Rules

class RulesPage {
  constructor() {

  }

  render() {
    this.rulesContainer = $(
      `<div  id="rulesContainer" class="pages" style="display: none">Hi, ${score.playerName}, destroyer of crazy space balls! If you are ready and fearless, then read next. After pressing the play button, you will appear in the center of the screen. Crazy space balls appear at the top of the screen. Your purpose is to destroy the cosmic balls by pressing the spacebar, moving with the arrow keys or the W, A, S, D keys. After each shot you lose 10 points, after destroying the ball you get 100 points. After moving to the next level you get an extra life. Good luck, man! It will be useful for you today!</div>`
    );
    $(`#menuContainer`).append(this.rulesContainer);
  }

  show() {
    if (!$("div").is("#rulesContainer")){
      mainMenu.render();
      mainMenu.show();
      this.render();
      scorePage.render();
      aboutPage.render();
      $(`#rulesContainer`).css(`display`,`block`);
    } else {
      $('#rulesContainer').show('slow');
    }
  }

  hide() {
    $('#rulesContainer').hide('slow');
  }
}

const rulesPage = new RulesPage();
