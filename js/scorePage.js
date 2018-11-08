var scorePage = new ScorePage();

function ScorePage(){
  this.render = function(){

    scoreContainer = document.createElement('div');

    container.appendChild(scoreContainer);

    scoreContainer.innerHTML = '\n' +
      'Its score page';

    scoreContainer.style.display = 'none';
    scoreContainer.style.textAlign = 'center';
    scoreContainer.style.width = 80 + '%';
    scoreContainer.style.position = 'absolute';
    scoreContainer.style.left = '5%';
    scoreContainer.style.top = '15%';
    scoreContainer.style.padding = '5%';

    scoreContainer.style.font = '30px solid black';
    scoreContainer.style.backgroundColor = 'blue';
    scoreContainer.style.border = '2px solid black';
    scoreContainer.style.borderRadius = '50px';
  }

  this.show = function() {
    scoreContainer.style.display = 'block';
  }

  this.hide = function() {
    scoreContainer.style.display = 'none';
  }

}