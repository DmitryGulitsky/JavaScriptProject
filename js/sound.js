'use strict';

// здесь создаем звуки в игре

function Sound(src) {
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

let shotSound = new Sound('./sounds/shot.mp3');
let bangSound = new Sound('./sounds/bang.mp3');
let startPageSound = new Sound('./sounds/startPageSound.mp3');
let excellentSound = new Sound('./sounds/ExcellentSoundEffect.mp3');
let fightSound = new Sound('./sounds/FightSoundEffect.mp3');

let musicSound = new Sound('./sounds/gameplay-music.mp3');
musicSound.sound.setAttribute('loop', 'loop');

let menuMusicSound = new Sound('./sounds/menu-music.mp3');
menuMusicSound.sound.setAttribute('loop', 'loop');
