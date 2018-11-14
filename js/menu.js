var mainMenu = new MainMenu();
var container = document.getElementById('menuContainer');

function MainMenu() {
  this.render = function () {
    var menuItems = ['Play', 'Scores', 'Rules', 'About']; // хранилище пунктов меню с названиями страниц
    var menuOptions = [];

    for (var i = 0; i < menuItems.length; i++) {
      container.style.display = 'none';
      menuOptions[i] = document.createElement('div');

      container.appendChild(menuOptions[i]);
      menuOptions[i].id = menuItems[i];
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
  this.show = function () {
    container.style.display = 'block';

  }

  this.hide = function () {
    container.style.display = 'none';
  }

}



  //this.control = function() {
  //
  //}

mainMenu.render();

scorePage.render(); // создание страниц в фоне
rulesPage.render(); // создание страниц в фоне
aboutPage.render(); // создание страниц в фоне
