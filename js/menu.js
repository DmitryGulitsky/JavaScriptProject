let container = document.getElementById('menuContainer');

class MainMenu {
  constructor() {
  }

  render() {
    let menuItems = ['Play', 'Scores', 'Rules', 'About']; // хранилище пунктов меню с названиями страниц
    let menuOptions = [];

    for (let i = 0; i < menuItems.length; i++) {
      container.style.display = 'none';
      menuOptions[i] = document.createElement('div');

      container.appendChild(menuOptions[i]);
      menuOptions[i].id = `menu${menuItems[i]}`;

      menuOptions[i].innerHTML = menuItems[i];

      menuOptions[i].style.textAlign = 'center';
      menuOptions[i].style.width = 100 / menuItems.length + '%';
      menuOptions[i].style.position = 'absolute';
      menuOptions[i].style.left = 100 / menuItems.length * i + '%';
      menuOptions[i].style.padding = '0.5% 0';
      menuOptions[i].style.fontFamily = '\'Cabin Sketch\', cursive';
      menuOptions[i].style.font = '30px solid black ';
      menuOptions[i].style.backgroundColor = '#3C5ABC';
      menuOptions[i].style.border = '2px solid black';
      menuOptions[i].style.borderRadius = '50px';

      menuOptions[i].addEventListener('mouseover', function (event) {
        event.target.style.opacity = 0.5;
        event.target.style.cursor = 'pointer';
      });
      menuOptions[i].addEventListener('mouseout', function (event) {
        event.target.style.opacity = 0.8;
        event.target.style.cursor = 'default';
      });


      if (i === 0) {
        menuOptions[i].addEventListener('mousedown', switchToPlay);
      }

      if (i === 1) {
        menuOptions[i].addEventListener('mousedown', switchToScores);
      }

      if (i === 2) {
        menuOptions[i].addEventListener('mousedown', switchToRules);
      }

      if (i === 3) {
        menuOptions[i].addEventListener('mousedown', switchToAbout);
      }
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
