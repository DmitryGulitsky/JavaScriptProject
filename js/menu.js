'use strict';

// здесь создаем панель меню вверху экрана

class MainMenu {
  constructor() {
  }

  render() {
    const menuItemsArray = ['Play', 'Scores', 'Rules', 'About']; // массив названий пунктов меню
    const menuItemLength = menuItemsArray.length;
    let counter = 0;

    const createMenuItems = (i) => {

      let menuItem = $(`<div id="menu${i}" class="pages" style="display: block; width: ${(100 / menuItemLength)}%; left: ${(100 / menuItemLength * counter)}%; top: 0; padding: 0.5% 0;">${i}</div>`);

      counter++;

      $(`#menuContainer`).append(menuItem);

      const overButton = () => {
        $(`#menu${i}`)
          .animate({'opacity': `0.5`}, 300)
          .css({'cursor': `pointer`})
      };

      const outButton = () => {
        $(`#menu${i}`)
          .animate({'opacity': `0.8`}, 300)
          .css({'cursor': `default`})
      };

      $(`#menu${i}`)
        .mouseover(overButton)
        .mouseout(outButton);
    };

    $.map(menuItemsArray, createMenuItems);

    const menuPlayDown = () => {
      switchToPlay();
    };

    $(`#menuPlay`).mousedown(menuPlayDown);

    const menuScoresDown = () => {
      switchToScores();
    };

    $(`#menuScores`).mousedown(menuScoresDown);

    const menuRulesDown = () => {
      switchToRules();
    };

    $(`#menuRules`).mousedown(menuRulesDown);

    const menuAboutDown = () => {
      switchToAbout();
    };

    $(`#menuAbout`).mousedown(menuAboutDown);
    //this.show();
  }

  show() {

    $('#menuContainer').show('slow');
  }

  hide() {
    $('#menuContainer').hide('slow');
  }
}

const mainMenu = new MainMenu();
