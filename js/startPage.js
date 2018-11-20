let startPage = new StartPage();

function StartPage(){

  this.submitPlayerName;

  this.render = function(){

    let startPageContainer = document.getElementById('startPageContainer');

    let startContainer = document.createElement('form');
    startPageContainer.appendChild(startContainer);
    startContainer.id = 'slick-login';

    let logoTextContainer = document.createElement('h1');
    startPageContainer.appendChild(logoTextContainer);
    let line1 = document.createElement('span');
    line1.className = 'title';
    line1.innerHTML = 'crazy';
    let line2 = document.createElement('span');
    line2.className = 'title';
    line2.innerHTML = 'balls';
    let line3 = document.createElement('span');
    line3.className = 'title';
    line3.innerHTML = 'in space';
    logoTextContainer.appendChild(line1);
    logoTextContainer.appendChild(line2);
    logoTextContainer.appendChild(line3);

    let loginText = document.createElement('input');
    startContainer.appendChild(loginText);
    loginText.setAttribute('type', 'text');
    loginText.setAttribute('name', 'username');
    loginText.setAttribute('class', 'placeholder');
    loginText.setAttribute('placeholder', 'ENTER YOUR NAME HERE');

    let loginSubmit = document.createElement('input');
    startContainer.appendChild(loginSubmit);
    loginSubmit.setAttribute('type', 'submit');
    loginSubmit.setAttribute('value', 'PRESS to START');
    loginSubmit.addEventListener('click', function() {
      this.submitPlayerName = loginText.value;
      score.playerName = loginText.value;

      startPageContainer.remove();

      switchToRules();
      mainMenu.show();
    });
  }
}

