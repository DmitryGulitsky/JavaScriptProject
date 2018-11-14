var scoreStorage = new AJAXStorage('lsScore');

function createPlayerScore() {
  var newName = score.playerName;
  var newScore = score.currentScore;

  var scoreInfo = {
    name: newName,
    score: newScore
  }

  var lineName = Math.random();

  scoreStorage.addValue(lineName, scoreInfo);
}

function showAllScores() {

  var allScores = scoreStorage.getValue();

  var sortArray = [];

  console.log(allScores);

  for (var key in allScores) {
    sortArray.push(allScores[key]);
  }

  console.log(sortArray);

  var comparsion = 0;

  for (var key in sortArray) {
    console.log(comparsion);
    if (parseInt(sortArray[key].score) <= comparsion) {
      scoreContainer.appendChild(document.createElement('p')).innerHTML =  sortArray[key].name + '    -------   ' + sortArray[key].score;
      comparsion = parseInt(sortArray[key].score);
    } else if (parseInt(sortArray[key].score) >= comparsion) {

      scoreContainer.insertBefore(document.createElement('p'),scoreContainer.firstChild).innerHTML =  sortArray[key].name + '    -------   ' + sortArray[key].score;
    }

  }

}

function AJAXStorage() {
  var self = this;

  self.hashStorage = {};



  var AjaxHandlerScript = 'http://fe.it-academy.by/AjaxStringStorage2.php';

  $.ajax(
    {
      url: AjaxHandlerScript,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {f: 'READ', n: 'GULITSKY_SPACE_STORAGE'},
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
          data: {f: 'INSERT', n: 'GULITSKY_SPACE_STORAGE', v: JSON.stringify(self.hashStorage)},
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
    var keys = [];
    for (var key in self.hashStorage) {
      keys.push('' + key);
    }
    return keys;
  };

  function addValueOnTheServer(hash) {
    var password = Math.random();

    $.ajax(
      {
        url: AjaxHandlerScript,
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {f: 'LOCKGET', n: 'GULITSKY_SPACE_STORAGE', p: password},
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
          data: {f: 'UPDATE', n: 'GULITSKY_SPACE_STORAGE', p: password, v: JSON.stringify(hash)},
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
