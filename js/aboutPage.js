var aboutPage = new AboutPage();

function AboutPage(){
  this.render = function(){

    aboutContainer = document.createElement('div');

    container.appendChild(aboutContainer);

    aboutContainer.innerHTML = 'This game was created as a final project following' +
      ' the course "Developing Web Applications for JavaScript by Instinctools" by student' +
      ' Dmitry Gulitsky under the guidance of a teacher Alexander Stashkevich in 2018. Grodno';

    aboutContainer.style.display = 'none';
    aboutContainer.style.textAlign = 'center';
    aboutContainer.style.width = 80 + '%';
    aboutContainer.style.position = 'absolute';
    aboutContainer.style.left = '5%';
    aboutContainer.style.top = '15%';
    aboutContainer.style.padding = '5%';
    aboutContainer.style.fontFamily = '\'Cabin Sketch\', cursive';
    aboutContainer.style.font = '30px solid black';
    aboutContainer.style.backgroundColor = 'blue';
    aboutContainer.style.border = '2px solid black';
    aboutContainer.style.borderRadius = '50px';
  }

  this.show = function() {
    aboutContainer.style.display = 'block';
  }

  this.hide = function() {
    aboutContainer.style.display = 'none';
  }
}
