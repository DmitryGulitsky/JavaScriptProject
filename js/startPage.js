class StartPage {
  constructor() {
    this.submitPlayerName;
  }
  render(){

    let startPageContainer = document.getElementById('startPageContainer');

    let startContainer = document.createElement('form');
    startContainer.id = 'slick-login';
    startPageContainer.appendChild(startContainer);

    startContainer.style.display = 'none';

    $('#slick-login').slideDown(2000);

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

    let startPageBallImageContainer = document.createElement('div');
    startPageBallImageContainer.className = 'button';
    startPageContainer.appendChild(startPageBallImageContainer);

    let startPageBallImage = document.createElement('img');
    startPageBallImage.id = 'startPageBallImage';
    startPageBallImageContainer.appendChild(startPageBallImage);

    startPageBallImage.setAttribute('src', 'img/ball/ball.png');

    function Test1() {
      $('#startPageBallImage').animate
      ({'width': `100%`}, 6000);
    }
    Test1();
    //startPageSound.sound.play();
  }
}

let startPage = new StartPage();
