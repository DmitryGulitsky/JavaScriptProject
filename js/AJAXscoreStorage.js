let scoreStorage = new AJAXStorage();

function createPlayerScore() {

  let scoreInfo = {
    name: score.playerName,
    score: score.currentScore
  }

  let lineName = Math.random();

  scoreStorage.addValue(lineName, scoreInfo);
}

function showAllScores() {    // функция ждя вывода таблицы на страницу

  let allScores = scoreStorage.getValue();

  let sortArray = [];

  console.log(allScores);

  for (let key in allScores) {
    sortArray.push(allScores[key]);
  }

  console.log(sortArray);

  //for (let scoreObjectPlayerName in allScores) {
  //  sortArray.push([scoreObjectPlayerName, allScores[scoreObjectPlayerName]]);
  //}

  //sortArray.sort(function(a, b) {
  //  return b[1] - a[1];
  //});

  function compareScore(personA, personB) {
    return personB.score - personA.score;
  }

  sortArray.sort(compareScore);



  console.log(sortArray);

  function renderScoreTable(n) {
    if (n.name) {
      let scoreNewLine = `<p style="border-bottom: 2px solid black; clear: both"><span style="float: left;">${n.name}</span>  <span style="float: right;">${n.score}</span></p>`;
      $('#scoreContainer').append(scoreNewLine);
    }
  }


  let scorePageTitle = `<p style="border-bottom: 2px solid black;">Best scores: </p>`;
  $('#scoreContainer').append(scorePageTitle);

  $.map(sortArray, renderScoreTable);

}

function AJAXStorage() {

  let self = this;
  self.hashStorage = {};

  let AjaxHandlerScript = 'http://fe.it-academy.by/AjaxStringStorage2.php';

  $.ajax(
    {
      url: AjaxHandlerScript,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {f: 'READ', n: 'GULITSKY_SPACE_BALL_STORAGE'},
      success: DataLoadedRead,
      error: ErrorHandler
    }
  );

  function DataLoadedRead(data) {
    if (data !== ' ') {
      self.hashStorage = JSON.parse(data.result);
    } else if (data === undefined) {
      $.ajax(
        {
          url: AjaxHandlerScript,
          type: 'POST',
          cache: false,
          dataType: 'json',
          data: {
            f: 'INSERT',
            n: 'GULITSKY_SPACE_BALL_STORAGE',
            v: JSON.stringify(self.hashStorage)},
          success: DataLoadedInsert,
          error: ErrorHandler
        }
      );

      function DataLoadedInsert(data) {
        console.log('Score upload complete');
      }
    }
  }

  self.addValue = function(key, value) {
    self.hashStorage[key] = value;

    addValueOnTheServer(self.hashStorage);

  }

  self.getValue = function () {
      return self.hashStorage;
  }

  self.getKeys = function () {
    let keys = [];
    for (let key in self.hashStorage) {
      keys.push('' + key);
    }
    return keys;
  };

  function addValueOnTheServer(hash) {
    let password = Math.random();

    $.ajax(
      {
        url: AjaxHandlerScript,
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {f: 'LOCKGET', n: 'GULITSKY_SPACE_BALL_STORAGE', p: password},
        success: DataLoadedLockget,
        error: ErrorHandler
      }
    );

    function DataLoadedLockget(data) {
      $.ajax(
        {
          url: AjaxHandlerScript,
          type: 'POST',
          cache: false,
          dataType: 'json',
          data: {
            f: 'UPDATE',
            n: 'GULITSKY_SPACE_BALL_STORAGE',
            p: password,
            v: JSON.stringify(hash)
          },
          success: DataLoadedUpdate,
          error: ErrorHandler
        }
      );
      function DataLoadedUpdate() {
        console.log('Score upload complete');
      }
    }
  }

  function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
    alert(StatusStr + '' + ErrorStr);
  }
}
