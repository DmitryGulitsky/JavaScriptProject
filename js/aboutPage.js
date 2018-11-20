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
    aboutContainer.style.font = '30px solid black';
    aboutContainer.style.backgroundColor = '#3C5ABC';
    aboutContainer.style.border = '2px solid black';
    aboutContainer.style.borderRadius = '50px';
  }
  show() {
    document.getElementById('aboutContainer').style.display = 'block';
  }
  hide() {
    document.getElementById('aboutContainer').style.display = 'none';
  }
}

let aboutPage = new AboutPage();
