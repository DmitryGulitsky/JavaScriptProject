class Score {
  constructor() {
    this.playerName;
    this.currentScore = 0;    // стартовое значение игрового счета игрока
    this.maxScore = 0;    // переменная для хранения максимального значения игрового счета

    //this.levelTargetLimit = 10;

  }

  finalResult() {

  }

  countPlus(){    // увеличение игрового счета
    this.currentScore += 100;

    if (this.currentScore > this.maxScore) {    // сохранение максимально набранных очков за сессию
      this.maxScore = this.currentScore;
    }
  }

  countMinus(){ // уменьшение игрового счета
    this.currentScore -= 10;
  }

  countMegaMinus(){ // уменьшение игрового счета
    this.currentScore -= 1000;
    level.livesNumbers--;
  }

  render(){
    let scoreX = width * 0.9;
    let scoreY = height * 0.1;
    let scoreMaxY = height * 0.2;
    let scoreLivesY = height * 0.3;

    $(`#canvas`).drawText({
      text: `Score: ${this.currentScore}`,
      fontFamily: 'cursive',
      fontSize: 27,
      x: scoreX, y: scoreY,
      fillStyle: 'white',
      strokeStyle: 'blue',
      strokeWidth: 1
    }).drawText({
      text: `Max: ${this.maxScore}`,
      fontFamily: 'cursive',
      fontSize: 27,
      x: scoreX, y: scoreMaxY,
      fillStyle: 'white',
      strokeStyle: 'blue',
      strokeWidth: 1
    }).drawText({
      text: `Lives: ${level.livesNumbers}`,
      fontFamily: 'cursive',
      fontSize: 27,
      x: scoreX, y: scoreLivesY,
      fillStyle: 'white',
      strokeStyle: 'blue',
      strokeWidth: 1
    });
  }
}

let score = new Score();
