var mainMenu = new MainMenu();
var container = document.getElementById('menuContainer');

  function MainMenu(){
    this.render = function(){
      var menuItems = ['Play', 'Scores', 'Rules', 'Options']; // хранилище пунктов меню с названиями страниц
      var menuOptions = [];

      for (var i = 0; i < menuItems.length; i++) {
        menuOptions[i] = document.createElement('div');

        container.appendChild(menuOptions[i]);
        menuOptions[i].id = menuItems[i];
        menuOptions[i].innerHTML = menuItems[i];

        menuOptions[i].style.textAlign = 'center';
        menuOptions[i].style.width = 100 / menuItems.length + '%';
        menuOptions[i].style.position = 'absolute';
        menuOptions[i].style.left = 100 / menuItems.length * i + '%';
        menuOptions[i].style.padding = '0.5% 0';
        menuOptions[i].style.font = '30px solid black';
        menuOptions[i].style.backgroundColor = 'blue';
        menuOptions[i].style.border = '2px solid black';
        menuOptions[i].style.borderRadius = '50px';


        menuOptions[i].addEventListener('mouseover', function(event){
          event.target.style.opacity = 0.5;
          event.target.style.cursor = 'pointer';
        });
        menuOptions[i].addEventListener('mouseout', function(event){
          event.target.style.opacity = 0.8;
          event.target.style.cursor = 'default';
        });

        if (i === 0) {
          menuOptions[i].addEventListener('mousedown', function(){
            init();
          });
        }
      }
    }
    //this.control = function() {
    //
    //}
  }

mainMenu.render();
mainMenu.control();
