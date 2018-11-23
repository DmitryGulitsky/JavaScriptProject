class Level {
  constructor() {
    this.livesNumbers = 3;    // количество жизней у игрока в начале новой игры / переменная значения количества жизней в процессе игры
    this.currentLevel = 0;    // переменная для значения последнего пройденного уровня
    this.killedTargets = 0;   // количество уничтоженных целей игроком, как условие для перехода на следующий уровень
    this.levelLimitKilledTargets = 3;   //  начальное значение достаточного количества уничтоженных целей для перехода на следующий уровень
  }

  statControl() {
    if (this.killedTargets === this.levelLimitKilledTargets) {  // контроль условия количества уничтоженных целей для перехода на следующий уровень

      switchToLevelInfo();    // всплытие сообщение о переходе на следующий уровень
      this.nextLevelDifficulty();   //  вызов функции установки параметров для следующего уровня

    }

    if (this.livesNumbers === 0) {    // контроль лимита жизней игрока, как условие окончания игры
      createPlayerScore(); // отправляем новые данные на сервер
      switchToScores();   // переходим на страницу результатов
    }
  }

  nextLevelDifficulty(){    // задаем параметры сложности для очередного уровня
    this.currentLevel++;   // добавляем значение текущего уровня

    targets.targetsNumber += 10;    // добавляем количество челей на игровом поле

    this.levelLimitKilledTargets *= 2;    // добавляем условие количества уничтоженных целей для перехода на следующий уровень

    this.livesNumbers++;    // добавляем игроку одну жизнь
  }

  renderMessage(){

    this.removeMessage();   // удаляем предыдущее сообщение о переходе на новый уровень

    let levelContainer = $(`#levelMessageContainer`);
    let currentLevelMessage = $(
      `<div id="currentLevelMessage" class="pages" style="width: 40%; top: 45%; left: 30%; padding: 30px;">LEVEL ${this.currentLevel} completed!
press PLAY to continue</div>`
    );

    $(levelContainer).append(currentLevelMessage);

    this.showMessage();   // задаем плавное появление сообщения о переходе на новый уровень
  }

  showMessage() {
    $('#currentLevelMessage').show('slow');
  }

  hideMessage() {
    $('#currentLevelMessage').hide('slow')
    .queue(this.removeMessage)    // устанавливаем порядок выполнения функция
  }
  removeMessage() {
    $('#currentLevelMessage').remove();
  }
}

var level = new Level();
