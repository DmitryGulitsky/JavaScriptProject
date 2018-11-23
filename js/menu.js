let container = document.getElementById('menuContainer');

class MainMenu {
  constructor() {
  }

  render() {
    let menuItemsArray = ['Play', 'Scores', 'Rules', 'About']; // массив названий пунктов меню
    let menuItemLength = menuItemsArray.length;
    let counter = 0;
    function createMenuItems(i) {

      let menuItem = $(`<div id="menu${i}" class="pages" style="display: none; width: ${(100 / menuItemLength)}%; left: ${(100 / menuItemLength * counter)}%; top: 0; padding: 0.5% 0;">${i}</div>`);

      counter++;

      $(`#menuContainer`).append(menuItem);

      $(`#menu${i}`)
        .mouseover(overButton)
        .mouseout(outButton)

      function overButton() {
        $(`#menu${i}`)
          .animate({'opacity': `0.5`}, 300)
          //.animate({'cursor': `pointer`}, 100)
      }

      function outButton() {
        $(`#menu${i}`)
          .animate({'opacity': `0.8`}, 300)
          //.animate({'cursor': `default`}, 100)
      }
    }

    $.map(menuItemsArray, createMenuItems);

    $(`#menuPlay`).mousedown(menuPlayDown);
    function menuPlayDown() {
      switchToPlay();
    }

    $(`#menuScores`).mousedown(menuScoresDown);
    function menuScoresDown() {
      switchToScores();
    }

    $(`#menuRules`).mousedown(menuRulesDown);
    function menuRulesDown() {
      switchToRules();
    }

    $(`#menuAbout`).mousedown(menuAboutDown);
    function menuAboutDown() {
      switchToAbout();
    }
  }

  show() {
    $('#menuContainer').show('slow');
  }

  hide() {
    $('#menuContainer').hide('slow');
  }
}

let mainMenu = new MainMenu();

mainMenu.render();

scorePage.render(); // создание страниц в фоне
rulesPage.render(); // создание страниц в фоне
aboutPage.render(); // создание страниц в фоне
