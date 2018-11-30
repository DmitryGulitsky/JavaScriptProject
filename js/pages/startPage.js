'use strict';

// здесь мы создаем стартовую страницу, делаем валидацию формы, создаем в фоне остальные страницы приложения при успешной валидации

class StartPage {
  constructor() {
    this.startPageIntervalID = setInterval(spaceBackground.renderBackground, 10);
  }

  render() {

    let canvasContainer = $(
      `<div id="canvasContainer" style="position: absolute;"><canvas id="canvas" style="background:#000;"></canvas></div>`
    );

    let levelMessageContainer = $(`<div id="levelMessageContainer"></div>`);

    let menuContainer = $(`<div id="menuContainer"></div>`);

    let startPageContainer = $(
      `<div  id="startPageContainer">
         <h1></h1>
         <form id="slick-login" action="javascript: startPage.loginSubmit()"></form>
       </div>`
    );

    $(`body`)
      .mousemove(spaceBackground.spaceMove)
      .append(startPageContainer)
      .append(canvasContainer)
      .append(levelMessageContainer)
      .append(menuContainer);

    $(`#canvas`)
      .attr(`width`, window.innerWidth)
      .attr(`height`, window.innerHeight);

    $(document).ready(function () {    // подключаем lettering к заголовку к классом
      $(`.title`).lettering();
    });

    spaceBackground.createStar();

    let titleArray = ['crazy','balls','in space'];

    const createTitle = (i) => {
      const line = $(`<span class="title jump">${i}</span>`);
      $('h1').append(line);
    };

    $.map(titleArray, createTitle);
    
    let loginText = $(
      `<input id="loginText" type="text" name="username" autocomplete="on" placeholder="ENTER YOUR NAME HERE">`
    );

    let loginSubmit = $(
      `<input id="loginSubmit" type="submit" value="PRESS to START">`
    );

    $('#slick-login')
      .append(loginText)
      .append(loginSubmit)
      .slideDown(2000)
      .validate({
      rules:
        {
          username: {required: true, enter_name: 20},
        },
      messages:
        {
          username:
            {
              required: 'Enter your name!',
              enter_name: 'Enter your name using less than 20 letters and numbers!'
            },
        },
      errorClass: 'SErrorText',
      errorElement: 'p',
    });

    let startPageBallImageContainer = $(
      `<div id="startPageBallImageContainer" class="button"></div>`
    );
    $(`#startPageContainer`).append(startPageBallImageContainer);

    let startPageBallImage = $(
      `<img id="startPageBallImage" src="img/ball/ball.png" alt="Crazy Ball Image">`
    );
    $(startPageBallImageContainer).append(startPageBallImage);
  }

  loginSubmit() {

    $(`#startPageBallImage`).animate({'width': `100%`}, 6000);

    startPageSound.play();

    setTimeout(function () {

      score.playerName = $(`#loginText`).val();

      $(`#canvasContainer`).remove();

      $(`#startPageContainer`).remove();

      mainMenu.render();  // создание меню

      ScorePage.render(); // создание страниц в фоне
      rulesPage.render(); // создание страниц в фоне
      aboutPage.render(); // создание страниц в фоне

      switchToRules();
    }, 6500)
  }

  clearBackground() {
    clearInterval(this.startPageIntervalID);
  }

  hide() {
    $(`#startPageContainer`).remove();
  }
}

const startPage = new StartPage();
