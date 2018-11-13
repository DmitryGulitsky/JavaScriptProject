var optionsPage = new OptionsPage();

function OptionsPage(){
  this.render = function(){

    optionsContainer = document.createElement('div');

    container.appendChild(optionsContainer);

    optionsContainer.innerHTML = 'Its options page';

    optionsContainer.style.display = 'none';
    optionsContainer.style.textAlign = 'center';
    optionsContainer.style.width = 80 + '%';
    optionsContainer.style.position = 'absolute';
    optionsContainer.style.left = '5%';
    optionsContainer.style.top = '15%';
    optionsContainer.style.padding = '5%';
    optionsContainer.style.fontFamily = '\'Cabin Sketch\', cursive';
    optionsContainer.style.font = '30px solid black';
    optionsContainer.style.backgroundColor = 'blue';
    optionsContainer.style.border = '2px solid black';
    optionsContainer.style.borderRadius = '50px';
  }

  this.show = function() {
    optionsContainer.style.display = 'block';
  }

  this.hide = function() {
    optionsContainer.style.display = 'none';
  }
}
