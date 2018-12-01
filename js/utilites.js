'use strict';

// полезные штуки хранятся тут

class Utils{
  constructor(){

  }
  getTime () {  // возвращает текущее время
    return (new Date()).getTime();
  };

  getARGBString(a, r, g, b) {  // генератор рандомного цвета в rgba
    return "rgba(" +
      Math.floor(255 * r) + "," +
      Math.floor(255 * g) + "," +
      Math.floor(255 * b) + "," +
      Math.floor(255 * a) + ")";
  };
}

const utils = new Utils();

function enterNameValidation(value, elem, args) {
  // value - что введено в поле, args - что задано аргументом правила валидации, т.е. 20
  // 1. текст не должен быть слишком длинным
  if (value.length >= args) {
    return false;
  }
  // 2. должно состоять из большой буквы и множества маленьких
  return /[А-ЯЁа-яёA-Za-z0-9]+$/.test(value);
}

$.validator.addMethod('enter_name', enterNameValidation,
  'Enter your name using letters and numbers');

const sparanWrap = (word) => {
  return [...word].map(letter => `<span>${letter}</span>`).join('');
}

$(window).on('load', function () {
  $('#wrap_preloader').delay(1000).fadeToggle(1000);
});