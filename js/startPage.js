'use strict';

// здесь мы создаем стартовую страницу, делаем валидацию формы, создаем в фоне остальные страницы приложения при успешной валидации

class StartPage {
  constructor() {

  }
  render(){

    $(document).ready(function() {    // подключаем lettering к заголовку к классом
      $(`.title`).lettering();
    });

    $(document).ready(function() {    // задаем анимацию для букв заголовка
      titleAnimation();
    }, 1000);

    function titleAnimation() {
      var title1 = new TimelineMax();
      title1.staggerFromTo(".title span", 0.5,
        {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
        {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
    }

    let startPageContainer = $(
      `<div  id="startPageContainer"></div>`
    );

    $(`body`).prepend(startPageContainer);

    let logoTextContainer = $(
      `<h1></h1>`);
    $('#startPageContainer').append(logoTextContainer);

    let line1 = $(
      `<span class="title jump">crazy</span>`);

    let line2 = $(
      `<span class="title jump">balls</span>`);

    let line3 = $(
      `<span class="title jump">in space</span>`);

    $('h1').append(line1)
      .append(line2)
      .append(line3);

    let startContainer = $(
      `<form id="slick-login" style="display: none" action="javascript: startPage.loginSubmit();"></form>`
    );
    $('#startPageContainer').append(startContainer);

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

    $(`#slick-login`).validate({
      rules:
        {
          loginText: {required: true, maxlength: 10, minlength: 1},
        },
      errorElement: 'div',
      errorClass: 'SErrorText'
    });

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

    $(startPageBallImage).animate({'width': `100%`}, 4000)
      .mouseover(scaleImg)
      .mouseout(scaleOutImg);

    function scaleImg() {
      $(startPageBallImage).animate
      ({'width': `80%`}, 1000)
    }

    function scaleOutImg() {
      $(startPageBallImage).animate
      ({'width': `100%`}, 1000)
    }
  }

  loginSubmit() {

    score.playerName = $(`#loginText`).val();

    $(`#startPageContainer`).remove();

    mainMenu.render();  // создание меню

    scorePage.render(); // создание страниц в фоне
    rulesPage.render(); // создание страниц в фоне
    aboutPage.render(); // создание страниц в фоне

    switchToRules();
  }
}

let startPage = new StartPage();
