'use strict';

// здесь происходит подсчет очков и количества жизней в игре и отображение их на экране

class Score {
  constructor() {
    this.playerName;    // переменная со значением имени игрока
    this.currentScore = 0;    // стартовое значение игрового счета игрока
    this.maxScore = 0;    // переменная для хранения максимального значения игрового счета
  }

  countPlus() {    // увеличение игрового счета после уничтожения цели
    this.currentScore += 100;

    if (this.currentScore > this.maxScore) {    // сохранение максимально набранных очков за сессию
      this.maxScore = this.currentScore;
    }
  }

  countMinus() { // уменьшение игрового счета при выстреле
    this.currentScore -= 10;
  }

  countMegaMinus() { // уменьшение игрового счета при столкновении с целью
    this.currentScore -= 300;
    level.livesNumbers--;   // уменьшение количества жизней на 1
  }

  clearScore() {
    this.currentScore = 0;    // стартовое значение игрового счета игрока
    this.maxScore = 0;    // переменная для хранения максимального значения игрового счета
  };

  render() {     // отрисовка текущего счета игры и количества жизней
    let scoreX = width * 0.9;
    let scoreY = height * 0.1;
    let scoreMaxY = height * 0.2;
    let scoreLivesY = height * 0.3;

    $(`#canvas`).drawText({   // рисуем текущий счет
      text: `Score: ${this.currentScore}`,
      fontSize: 27,
      x: scoreX, y: scoreY,
      fillStyle: 'white',
    }).drawText({   // рисуем максимальный счет за сессию
      text: `Max: ${this.maxScore}`,
      fontSize: 27,
      x: scoreX, y: scoreMaxY,
      fillStyle: 'white',
    }).drawText({   // рисуем количество жизней
      text: `Lives: ${level.livesNumbers}`,
      fontSize: 27,
      x: scoreX, y: scoreLivesY,
      fillStyle: 'white',
    });
  }
}

let score = new Score();
