class Score{
  constructor() {
    this.currentScore = 0;    // стартовое значение игрового счета игрока
    this.maxScore = 0;    // переменная для хранения максимального значения игрового счета
  }
  countPlus() {    // увеличение игрового счета
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
  }

  render(ctx){
    let scoreX = width * 0.9;
    let scoreY = height * 0.1;
    let scoreMaxY = height * 0.15;
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'normal 27px Arial';
    ctx.fillText('Score:' + this.currentScore, scoreX, scoreY);
    ctx.fillText('Max:  ' + this.maxScore, scoreX, scoreMaxY);
    ctx.stroke();
  }
}

let score = new Score();

//function Score(){
//  this.currentScore = 0;    // стартовое значение игрового счета игрока
//  this.maxScore = 0;    // переменная для хранения максимального значения игрового счета

//  this.countPlus = function(){    // увеличение игрового счета
//    this.currentScore += 100;
//
//    if (this.currentScore > this.maxScore) {    // сохранение максимально набранных очков за сессию
//      this.maxScore = this.currentScore;
//    }
//  }

//  this.countMinus = function(){ // уменьшение игрового счета
//    this.currentScore -= 10;
//  }
//
//  this.countMegaMinus = function(){ // уменьшение игрового счета
//    this.currentScore -= 1000;
//  }
//
//  this.render = function(ctx){
//    let scoreX = width * 0.9;
//    let scoreY = height * 0.1;
//    let scoreMaxY = height * 0.15;
//    ctx.beginPath();
//    ctx.fillStyle = 'white';
//    ctx.textAlign = 'center';
//    ctx.textBaseline = 'middle';
//    ctx.font = 'normal 27px Arial';
//    ctx.fillText('Score:' + this.currentScore, scoreX, scoreY);
//    ctx.fillText('Max:  ' + this.maxScore, scoreX, scoreMaxY);
//    ctx.stroke();
//  }
//}