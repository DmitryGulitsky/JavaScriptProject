var rulesPage = new RulesPage();

function RulesPage(){
  this.render = function(){

    rulesContainer = document.createElement('div');

    container.appendChild(rulesContainer);

    rulesContainer.innerHTML = '\n' +
      'At the beginning of the game, the player appears in the center of the screen. Goals appear at the top of the screen. The goal of the game is to destroy the targets by pressing the space bar, moving with the help of the arrows or the keys W,A,S,D';

    rulesContainer.style.display = 'none';
    rulesContainer.style.textAlign = 'center';
    rulesContainer.style.width = 80 + '%';
    rulesContainer.style.position = 'absolute';
        rulesContainer.style.left = '5%';
    rulesContainer.style.top = '15%';
    rulesContainer.style.padding = '5%';

    rulesContainer.style.font = '30px solid black';
    rulesContainer.style.backgroundColor = 'blue';
    rulesContainer.style.border = '2px solid black';
    rulesContainer.style.borderRadius = '50px';


    }

  this.show = function() {
    rulesContainer.style.display = 'block';
  }

  this.hide = function() {
    rulesContainer.style.display = 'none';
  }
  }