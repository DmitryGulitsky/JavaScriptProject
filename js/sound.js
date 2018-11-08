function sound(src) {
  this.sound = document.createElement('audio');
  this.sound.src = src;
  this.sound.setAttribute('preload', 'auto');
  this.sound.setAttribute('controls', 'none');
  this.sound.style.display = 'none';
  container.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

shotSound = new sound('./sounds/shot.mp3');
bangSound = new sound('./sounds/bang.mp3');



musicSound = new sound('./sounds/gameplay-music.mp3');
musicSound.sound.setAttribute('loop', 'loop');
