class AboutPage {
  constructor() {

  }
  render() {
    let aboutContainer = document.createElement('div');
    aboutContainer.id = 'aboutContainer';
    container.appendChild(aboutContainer);

    aboutContainer.innerHTML = 'This game was created as a final project following' +
      ' the course "Developing Web Applications for JavaScript by Instinctools" by student' +
      ' Dmitry Gulitsky under the guidance of a teacher Alexander Stashkevich in 2018. Grodno';

    aboutContainer.style.display = 'none';
    aboutContainer.style.textAlign = 'center';
    aboutContainer.style.width = 80 + '%';
    aboutContainer.style.position = 'absolute';
    aboutContainer.style.left = '10%';
    aboutContainer.style.top = '15%';
    aboutContainer.style.padding = '5%';
    aboutContainer.style.fontFamily = '\'Cabin Sketch\', cursive';
    aboutContainer.style.font = '30px solid white';
    aboutContainer.style.color = 'white';
    aboutContainer.style.textShadow = '3px 3px 0 rgba(0,0,0,0.2)';
    aboutContainer.style.backgroundColor = '#3C5ABC';
    aboutContainer.style.border = '2px solid black';
    aboutContainer.style.borderRadius = '50px';
  }
  show() {
    $('#aboutContainer').show('slow');
  }
  hide() {
    $('#aboutContainer').hide('slow');
  }
}

let aboutPage = new AboutPage();
