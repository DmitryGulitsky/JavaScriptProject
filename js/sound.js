'use strict';

// здесь создаем звуки в игре

class Sound {
  constructor(src) {
    this.sound = $(`<audio src=${src} preload="auto" controls="none" style="display: none"></audio>`);
    $(`mainMenu`).append(this.sound);
  }

  play() {
    this.sound.trigger('play');
  }

  stop() {
    this.sound.trigger('pause');
  }
}

const shotSound = new Sound('./sounds/shot.mp3');
const bangSound = new Sound('./sounds/bang.mp3');
const startPageSound = new Sound('./sounds/startPageSound.mp3');
const excellentSound = new Sound('./sounds/ExcellentSoundEffect.mp3');
const fightSound = new Sound('./sounds/FightSoundEffect.mp3');

const musicSound = new Sound('./sounds/gameplay-music.mp3');
$(musicSound).attr('loop', 'loop');

const menuMusicSound = new Sound('./sounds/menu-music.mp3');
$(menuMusicSound).attr('loop', 'loop');
