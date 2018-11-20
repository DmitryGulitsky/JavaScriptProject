class ScorePage {
  constructor() {

  }

  render(){
    let scoreContainer = document.createElement('div');
    scoreContainer.id = 'scoreContainer';
    container.appendChild(scoreContainer);

    //scoreContainer.innerHTML = 'Its score page';

    scoreContainer.style.display = 'none';
    scoreContainer.style.textAlign = 'center';
    scoreContainer.style.width = 80 + '%';
    scoreContainer.style.position = 'absolute';
    scoreContainer.style.left = '10%';
    scoreContainer.style.top = '15%';
    scoreContainer.style.padding = '5%';
    scoreContainer.style.fontFamily = '\'Cabin Sketch\', cursive';
    scoreContainer.style.font = '30px solid black';
    scoreContainer.style.backgroundColor = '#3C5ABC';
    scoreContainer.style.border = '2px solid black';
    scoreContainer.style.borderRadius = '50px';
  }
  show(){
    document.getElementById('scoreContainer').style.display = 'block';
  }
  hide(){
    document.getElementById('scoreContainer').style.display = 'none';
    while (document.getElementById('scoreContainer').firstChild) {   // очищаем список результатов
      document.getElementById('scoreContainer').removeChild(document.getElementById('scoreContainer').firstChild);
    }
  }
}

let scorePage = new ScorePage();
