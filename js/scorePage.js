class ScorePage {
  constructor() {

  }

  render(){
    let scoreContainer = $(
      `<div  id="scoreContainer" class="pages"></div>`
    );
    $(`#menuContainer`).append(scoreContainer);
  }

  showAllScores() {    // функция для вывода таблицы на страницу

    let allScores = scoreStorage.getValue();  // получаем данные о результатах игр с сервера

    let sortArray = [];   // создаем массив, в котором данные будут отсортированы по количеству набранных очков

    console.log(allScores);
    console.log(sortArray);

    for (let key in allScores) {      // копируем данные с результатами в массив sortArray
      sortArray.push(allScores[key]);
    }

    function compareScore(scoreA, scoreB) {   // сортируем объекты по значению .score
      return scoreB.score - scoreA.score;
    }
    sortArray.sort(compareScore);

    function renderScoreTable(n) {    // функция добавления списка результатов на страницу
      if (n.name) {
        let scoreNewLine = `<p style="border-bottom: 2px solid black; clear: both"><span style="float: left;">${n.name}</span>  <span style="float: right;">${n.score}</span></p>`;
        $('#scoreContainer').append(scoreNewLine);
      }
    }

    let scorePageTitle = `<p style="border-bottom: 2px solid black;">Best scores: </p>`;
    $('#scoreContainer').append(scorePageTitle);

    $.map(sortArray, renderScoreTable);   // фунцкция вызывается для каждого элемента отсортированного массива

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
