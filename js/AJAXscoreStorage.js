// здесь задается связь с сервером данных

class AJAXStorage {
  constructor() {
    this.hashStorage = {};
    this.AjaxHandlerScript = 'http://fe.it-academy.by/AjaxStringStorage2.php';
  }

  getValue() {
    return this.hashStorage;
  };

  addValue(key, value) {
    const self = this;
    self.hashStorage[key] = value;

    let password = Math.random();

    $.ajax(
      {
        url: this.AjaxHandlerScript,
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {f: 'LOCKGET', n: 'GULITSKY_SPACE_BALL_STORAGE', p: password},
        success: function DataLoadedLockget(data) {
          $.ajax(
            {
              url: scoreStorage.AjaxHandlerScript,
              type: 'POST',
              cache: false,
              dataType: 'json',
              data: {
                f: 'UPDATE',
                n: 'GULITSKY_SPACE_BALL_STORAGE',
                p: password,
                v: JSON.stringify(self.hashStorage)
              },
              success: function DataLoadedUpdate() {
                console.log('Score upload complete');
              },
              error: scoreStorage.ErrorHandler
            }
          );
        },
        error: scoreStorage.ErrorHandler
      }
    );
  };

  readStorage() {
    const self = this;
    $.ajax(
      {
        url: this.AjaxHandlerScript,
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {f: 'READ', n: 'GULITSKY_SPACE_BALL_STORAGE'},
        success: function DataLoadedRead(data) {
          if (data !== ' ') {
            self.hashStorage = JSON.parse(data.result);
          } else if (data === undefined) {
            $.ajax(
              {
                url: this.AjaxHandlerScript,
                type: 'POST',
                cache: false,
                dataType: 'json',
                data: {
                  f: 'INSERT',
                  n: 'GULITSKY_SPACE_BALL_STORAGE',
                  v: JSON.stringify(self.hashStorage)
                },
                success: function DataLoadedInsert() {
                  console.log('Score upload complete');
                },
                error: self.ErrorHandler
              }
            );
          }
        },
        error: self.ErrorHandler
      }
    );
  };

  ErrorHandler() {
    console.log('error');
  };

  createPlayerScore() {    // функция запускается, когда у игрока закончились жизни

    const scoreInfo = {     // объект для хранения имени и счета текущего сеанса игры
      name: score.playerName,
      score: score.currentScore
    };

    const lineName = Math.random();     // задаем уникальный ключ для объекта с данными текущей сессии
    scoreStorage.addValue(lineName, scoreInfo);
  }
}

const scoreStorage = new AJAXStorage();
