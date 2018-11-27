'use strict';

// здесь задаем управление игроком по событиям

class KeyLogger {

  constructor() {
    this.keyStatus = {up: false, down: false, left: false, right: false, fire: false};
  }

  keyDownListener(e) {  // определение кода отжатой клавиши на клавиатуре или кнопки мыши
    let key = e.keyCode ? e.keyCode : e.which;
    switch (key) {

      case 87: // клавиша "w"
      case 38: // клавиша "up"
        keyLogger.keyStatus.up = true;
        break;
      case 83:  // клавиша "s"
      case 40:  // клавиша "down"
        keyLogger.keyStatus.down = true;
        break;
      case 65:  // клавиша "a"
      case 37:  // клавиша "left"
        keyLogger.keyStatus.left = true;
        break;
      case 68:  // клавиша "w"
      case 39:  // клавиша "up"
        keyLogger.keyStatus.right = true;
        break;
      case 32:  // клавиша "space"
        keyLogger.keyStatus.fire = true;
        break;

      default:
        console.log("Key:" + key); // вывод в консоль кода неназначенной клавиши, чтобы упростить расширение функционала управления игры с клавиатуры
        return true;
    }
    return false;
  };

  keyUpListener(e) {  // определение кода отжатой клавиши на клавиатуре или кнопки мыши

    let key = e.keyCode ? e.keyCode : e.which;
    switch (key) {

      case 87: // клавиша "w"
      case 38: // клавиша "up"
        keyLogger.keyStatus.up = false;
        break;
      case 83:   // клавиша "s"
      case 40:   // клавиша "down"
        keyLogger.keyStatus.down = false;
        break;
      case 65:   // клавиша "a"
      case 37:   // клавиша "left"
        keyLogger.keyStatus.left = false;
        break;
      case 68:   // клавиша "d"
      case 39:   // клавиша "right"
        keyLogger.keyStatus.right = false;
        break;
      case 32:  // клавиша "space"
        keyLogger.keyStatus.fire = false;
        break;
      default:
        console.log("Key:" + key);// вывод в консоль кода неназначенной клавиши, чтобы упростить расширение функционала управления игры с клавиатуры
        return true;
    }
    return false;
  };
}

let keyLogger = new KeyLogger();
