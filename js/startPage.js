var startPage = new StartPage();

function StartPage(){
  this.render = function(){

    var startPageContainer = document.getElementById('startPageContainer');

    var startContainer = document.createElement('form');
    startPageContainer.appendChild(startContainer);
    startContainer.id = 'slick-login';

    var loginText = document.createElement('input');
    startContainer.appendChild(loginText);
    loginText.setAttribute('type', 'text');
    loginText.setAttribute('name', 'username');
    loginText.setAttribute('class', 'placeholder');
    loginText.setAttribute('placeholder', 'ENTER YOUR NAME HERE');

    var loginSubmit = document.createElement('input');
    startContainer.appendChild(loginSubmit);
    loginSubmit.setAttribute('type', 'submit');
    loginSubmit.setAttribute('value', 'PRESS to START');
    loginSubmit.addEventListener('mousedown', hide);

    function hide() {
      startContainer.style.display = 'none';
      switchToRules();
      mainMenu.show();
    }
  }
}