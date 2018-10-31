var score = new Score();

function Score(){
  this.currentScore = 0;    // стартовое значение игрового счета игрока
  this.maxScore = 0;    // переменная для хранения максимального значения игрового счета

  this.countPlus = function(){    // увеличение игрового счета
    this.currentScore += 100;

    if (this.currentScore > this.maxScore) {    // сохранение максимально набранных очков за сессию
      this.maxScore = this.currentScore;
    }
  }

  this.countMinus = function(){ // уменьшение игрового счета
    this.currentScore -= 10;
  }

  this.countMegaMinus = function(){ // уменьшение игрового счета
    this.currentScore -= 1000;
  }

  this.render = function(ctx){
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'normal 27px Arial';
    ctx.fillText('Score:' + this.currentScore, 900, 25);
    ctx.fillText('Max:  ' + this.maxScore, 900, 75);
    ctx.stroke();
    }
}