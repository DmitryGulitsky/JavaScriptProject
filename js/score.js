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

  render(ctx){
    let scoreX = width * 0.9;
    let scoreY = height * 0.1;
    let scoreMaxY = height * 0.2;
    let scoreLivesY = height * 0.3;
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'normal 27px Arial';
    ctx.fillText('Score:' + this.currentScore, scoreX, scoreY);
    ctx.fillText('Max:  ' + this.maxScore, scoreX, scoreMaxY);
    ctx.fillText('Lives:  ' + level.livesNumbers, scoreX, scoreLivesY);
    ctx.stroke();
  }
}

let score = new Score();
