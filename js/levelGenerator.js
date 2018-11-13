var level = new Level();


var levelContainer = document.getElementById('levelMessageContainer');
var currentLevelMessage = document.createElement('div');

levelContainer.appendChild(currentLevelMessage);


level.renderMessage();

function Level(){
  this.livesNumbers = 3;
  this.currentLevel = 1;

  this.killedTargets = 0;
  this.levelLimitKilledTargets = 2;

  this.statControl = function() {
    if (this.killedTargets === this.levelLimitKilledTargets) {  // контроль лимита уничтоженных целей на текущем уровне
      console.log('next level ' + this.currentLevel);
      stopGame();
      this.nextLevelDifficulty();
      this.showMessage();
      console.log('next level ' + this.currentLevel);
    }

    if (this.livesNumbers === 0) {    // контроль лимита жизней игрока
      switchToScores();
    }

  }

  this.nextLevelDifficulty = function(){
    this.currentLevel += 1;
    targets.targetsNumber += 10;
    targets.targetsV += 30;

    this.levelLimitKilledTargets += 10;

    this.livesNumbers++;
  }

  this.renderMessage = function(){



    currentLevelMessage.innerHTML = 'LEVEL ' + this.currentLevel + ' press PLAY to continue';
    currentLevelMessage.style.display = 'none';
    currentLevelMessage.style.position = 'absolute';
    currentLevelMessage.style.width = '100%';
    currentLevelMessage.style.top = 45 + '%';
    currentLevelMessage.style.textAlign = 'center';
    currentLevelMessage.style.fontFamily = '\'Cabin Sketch\', cursive';
    currentLevelMessage.style.font = '30px solid black ';
    currentLevelMessage.style.backgroundColor = 'white';
  }

  this.showMessage = function() {
    currentLevelMessage.style.display = 'block';
  }

  this.hideMessage = function() {
    currentLevelMessage.style.display = 'none';
  }
}