class ScorePage {
  constructor() {

  }

  render(){
    let scoreContainer = $(
      `<div  id="scoreContainer" class="pages"></div>`
    );
    $(`#menuContainer`).append(scoreContainer);
  }
  show(){
      $('#scoreContainer').show('slow');
  }
  hide(){
    $('#scoreContainer').hide('slow');
    while (document.getElementById('scoreContainer').firstChild) {   // очищаем список результатов
      document.getElementById('scoreContainer').removeChild(document.getElementById('scoreContainer').firstChild);
    }
  }
}

let scorePage = new ScorePage();
