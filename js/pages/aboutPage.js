'use strict';

// здесь создается содержимое страницы About

class AboutPage {
  constructor() {

  }

  render() {

    let aboutContainer = $(
      `<div  id="aboutContainer" class="pages">This game was created as a final project following the course "Developing Web Applications for JavaScript by Instinctools" by student Dmitry Gulitsky under the guidance of a teacher Alexander Stashkevich in 2018. Grodno</div>`
    );
    $(`#menuContainer`).append(aboutContainer);
  }

  show() {
    $('#aboutContainer').show('slow');
  }

  hide() {
    $('#aboutContainer').hide('slow');
  }
}

let aboutPage = new AboutPage();
