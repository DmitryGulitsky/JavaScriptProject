'use strict';

// здесь мы создаем стартовую страницу, делаем валидацию формы, создаем в фоне остальные страницы приложения при успешной валидации

class StartPage {
  constructor() {
    this.startPageIntervalID = setInterval(spaceBackground.renderBackground, 10);
  }

  render() {

    let canvasContainer = $(
      `<div id="canvasContainer" style="position: absolute;"><canvas id="canvas" style="background:#000;"></canvas></div>
       <div id="levelMessageContainer"></div>
       <div id="menuContainer"></div>`
    );
    $(`#game`).append(canvasContainer);

    $('#canvasContainer').show('slow');

    $(`#canvas`)
      .attr(`width`, window.innerWidth)
      .attr(`height`, window.innerHeight);

    $(document).ready(function () {    // подключаем lettering к заголовку к классом
      $(`.title`).lettering();
    });

    let startPageContainer = $(
      `<div  id="startPageContainer"></div>`
    );

    $(`body`)
      .mousemove(spaceBackground.spaceMove)
      .prepend(startPageContainer);

    spaceBackground.createStar();

    let logoTextContainer = $(
      `<h1></h1>`);

    let startContainer = $(
      `<form id="slick-login" style="display: none" action="javascript: startPage.loginSubmit();"></form>`
    );

    $('#startPageContainer')
      .append(logoTextContainer)
      .append(startContainer);

    let line1 = $(
      `<span class="title jump">crazy</span>`);

    let line2 = $(
      `<span class="title jump">balls</span>`);

    let line3 = $(
      `<span class="title jump">in space</span>`);

    $('h1').append(line1)
      .append(line2)
      .append(line3);

    $('#slick-login').slideDown(2000).validate({
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

    let loginText = $(
      `<input id="loginText" type="text" name="username" autocomplete="on" placeholder="ENTER YOUR NAME HERE">`
    );
    $(startContainer).append(loginText);

    let loginSubmit = $(
      `<input id="loginSubmit" type="submit" value="PRESS to START">`
    );
    $(startContainer).append(loginSubmit);

    let startPageBallImageContainer = $(
      `<div id="startPageBallImageContainer" class="button"></div>`
    );
    $(startPageContainer).append(startPageBallImageContainer);

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
