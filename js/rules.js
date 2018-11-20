class RulesPage {
  constructor() {
  }
  render(){
   let rulesContainer = document.createElement('div');
    rulesContainer.id = 'rulesContainer';
    container.appendChild(rulesContainer);
   rulesContainer.innerHTML = 'Hello, destroyer of crazy space balls! If you are ready and fearless, then read next. After pressing the play button, you will appear in the center of the screen. Crazy space balls appear at the top of the screen. Your purpose is to destroy the cosmic balls by pressing the spacebar, moving with the arrow keys or the W, A, S, D keys. After each shot you lose 10 points, after destroying the ball you get 100 points. After moving to the next level you get an extra life. Good luck, man! It will be useful for you today!';
   rulesContainer.style.display = 'none';
    rulesContainer.style.textAlign = 'center';
    rulesContainer.style.width = 80 + '%';
    rulesContainer.style.position = 'absolute';
    rulesContainer.style.left = '10%';
    rulesContainer.style.top = '15%';
    rulesContainer.style.padding = '5%';
    rulesContainer.style.fontFamily = '\'Cabin Sketch\', cursive';
    rulesContainer.style.font = '30px solid black';
    rulesContainer.style.backgroundColor = '#3C5ABC';
    rulesContainer.style.border = '2px solid black';
    rulesContainer.style.borderRadius = '50px';
  }
  show() {
     document.getElementById('rulesContainer').style.display = 'block';
   }
  hide() {
     document.getElementById('rulesContainer').style.display = 'none';
   }
}

var rulesPage = new RulesPage();
