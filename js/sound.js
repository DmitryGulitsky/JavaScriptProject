'use strict';

// здесь создаем звуки в игре

class Sound {
  constructor(src, id) {
    this.sound = $(`<audio id="${id}" src=${src} preload="auto" controls="none" style="display: none"></audio>`);
    $(`body`).append(this.sound);
    }

  play() {
    $(window).on('load', function(){
      $(this.sound).trigger('click');
    });
    this.sound.trigger('play');
  }

  stop() {
    this.sound.trigger('pause');
  }
}

const shotSound = new Sound('./sounds/shot.mp3', 'shotSound');
const bangSound = new Sound('./sounds/bang.mp3', 'bangSound');
const startPageSound = new Sound('./sounds/startPageSound.mp3', 'startPageSound');
const excellentSound = new Sound('./sounds/ExcellentSoundEffect.mp3', 'excellentSound');
const fightSound = new Sound('./sounds/FightSoundEffect.mp3', 'fightSound');

let musicSound = new Sound('./sounds/gameplay-music.mp3', 'musicSound');
$(`#musicSound`).attr('loop', 'loop');

let menuMusicSound = new Sound('./sounds/menu-music.mp3', 'menuMusicSound');
$(`#menuMusicSound`).attr('loop', 'loop');