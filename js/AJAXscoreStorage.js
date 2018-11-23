
// здесь задается связь с сервером данных

let scoreStorage = new AJAXStorage();

function createPlayerScore() {    // функция запускается, когда у игрока закончились жизни

  const scoreInfo = {     // объект для хранения имени и счета текущего сеанса игры
    name: score.playerName,
    score: score.currentScore
  }

  const lineName = Math.random();     // задаем уникальный ключ для объекта с данными текущей сессии
  scoreStorage.addValue(lineName, scoreInfo);
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
