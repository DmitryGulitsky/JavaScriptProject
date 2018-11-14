var level = new Level();

function Level(){
  this.livesNumbers = 3;
  this.currentLevel = 1;

  this.killedTargets = 0;
  this.levelLimitKilledTargets = 3;

  this.statControl = function() {
    if (this.killedTargets === this.levelLimitKilledTargets) {  // контроль лимита уничтоженных целей на текущем уровне
      console.log('previous level ' + this.currentLevel);
      console.log('lives numbers ' + this.livesNumbers);
      console.log('killed targets ' + this.killedTargets);
      console.log('level limit killed targetsv' + this.levelLimitKilledTargets);
      console.log('target number on screen' + targets.targetsNumber);


      console.log('------------------');
      switchToLevelInfo();
      this.nextLevelDifficulty();
      this.showMessage();
      console.log('next level ' + this.currentLevel);

      console.log('lives numbers ' + this.livesNumbers);
      console.log('killed targets ' + this.killedTargets);
      console.log('level limit killed targetsv' + this.levelLimitKilledTargets);
      console.log('target number on screen' + targets.targetsNumber);

      console.log('------------------');
    }

    if (this.livesNumbers === 0) {    // контроль лимита жизней игрока
      switchToScores();
    }

  }

  this.nextLevelDifficulty = function(){
    this.currentLevel += 1;
    targets.targetsNumber += 10;

    this.levelLimitKilledTargets *= 2;

    this.livesNumbers++;
  }

  this.renderMessage = function(){

    levelContainer = document.getElementById('levelMessageContainer');
    currentLevelMessage = document.createElement('div');

    levelContainer.appendChild(currentLevelMessage);

    currentLevelMessage.innerHTML = 'LEVEL ' + this.currentLevel + ' completed!' +
      '\npress PLAY to continue';
    currentLevelMessage.style.position = 'absolute';
    currentLevelMessage.style.width = '40%';
    currentLevelMessage.style.top = 45 + '%';
    currentLevelMessage.style.left = '40%';
    currentLevelMessage.style.textAlign = 'center';
    currentLevelMessage.style.fontFamily = '\'Cabin Sketch\', cursive';
    currentLevelMessage.style.font = '30px solid black ';
    currentLevelMessage.style.backgroundColor = 'white';
    currentLevelMessage.style.backgroundColor = '#3C5ABC';
    currentLevelMessage.style.border = '2px solid black';
    currentLevelMessage.style.borderRadius = '50px';
    currentLevelMessage.style.padding = '30px';
  }

  this.showMessage = function() {
    currentLevelMessage.style.display = 'block';
  }

  this.hideMessage = function() {
    currentLevelMessage.remove();
  }
}