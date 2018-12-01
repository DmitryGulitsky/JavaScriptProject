'use strict';

// здесь создается содержимое страницы About

class AboutPage {
  constructor() {

  }

  render() {
    this.aboutContainer = $(
      `<div  id="aboutContainer" class="pages">This game was created as a final project following the course "Developing Web Applications for JavaScript by Instinctools" by student Dmitry Gulitsky under the guidance of a teacher Alexander Stashkevich in 2018. Grodno</div>`
    );
    $(`#menuContainer`).append(this.aboutContainer);
  }

  show() {
    if (!$("div").is("#aboutContainer")){
      mainMenu.render();
      mainMenu.show();
      this.render();
      rulesPage.render();
      scorePage.render();
      $(`#aboutContainer`).css(`display`,`block`);
    } else {
      $('#aboutContainer').show('slow');
    }
  }

  hide() {
    $('#aboutContainer').hide('slow');
  }
}

const aboutPage = new AboutPage();
