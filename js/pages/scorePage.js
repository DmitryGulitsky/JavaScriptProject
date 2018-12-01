'use strict';

// здесь создаем  страницу Scores, вызывая функцию получения дынных с сервера

class ScorePage {
  constructor() {

  }

  render() {
    if (scoreStorage){
      scoreStorage.readStorage();
    }

    this.scoreContainer = $(
      `<div  id="scoreContainer" class="pages"></div>`
    );
    $(`#menuContainer`).append(this.scoreContainer);
  }

  showAllScores() {    // функция для вывода таблицы на страницу

    let allScores = scoreStorage.getValue();  // получаем данные о результатах игр с сервера

    let sortArray = [];   // создаем массив, в котором данные будут отсортированы по количеству набранных очков

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

  show() {
    if (!$(`div`).is(`#scoreContainer`)){
      mainMenu.render();
      mainMenu.show();
      this.render();
      aboutPage.render();
      rulesPage.render();
      $(`#scoreContainer`).css(`display`,`block`);
    } else {
      $('#scoreContainer').show('slow');
    }
  }

  hide() {
    $('#scoreContainer').hide('slow');
    $(`#scoreContainer`).empty();   // удаляем содержимое scoreContainer
  }
}

const scorePage = new ScorePage();
