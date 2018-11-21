'use strict';

class StartPage {
  constructor() {

  }
  render(){

    let startPageContainer = $(
      `<div  id="startPageContainer"></div>`
    );

    $(`body`).prepend(startPageContainer);

    let logoTextContainer = $(
      `<h1></h1>>`);
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
    //score.playerName = $(`loginText`).val();

    $(`#startPageContainer`).remove();

    switchToRules();
    mainMenu.show();
  }
}

let startPage = new StartPage();
