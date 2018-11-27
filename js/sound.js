'use strict';

// здесь создаем звуки в игре

class Sound{
  constructor(src){
   this.sound = $(`<audio src=${src} preload="auto" controls="none" style="display: none"></audio>`);
  $(`mainMenu`).append(this.sound);
}
  play(){
    this.sound.trigger('play');
  }
  stop(){
    this.sound.trigger('pause');
  }
}

let shotSound = new Sound('./sounds/shot.mp3');
let bangSound = new Sound('./sounds/bang.mp3');
let startPageSound = new Sound('./sounds/startPageSound.mp3');
let excellentSound = new Sound('./sounds/ExcellentSoundEffect.mp3');
let fightSound = new Sound('./sounds/FightSoundEffect.mp3');

let musicSound = new Sound('./sounds/gameplay-music.mp3');
$(musicSound).attr('loop', 'loop');

let menuMusicSound = new Sound('./sounds/menu-music.mp3');
$(menuMusicSound).attr('loop', 'loop');
