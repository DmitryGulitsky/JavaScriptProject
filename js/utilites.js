let utils = new Utils();

function Utils(){  // полезные утилиты

  this.getTime = function(){  // возвращает текущее время
    return (new Date()).getTime();
  };

  this.getARGBString = function(a,r,g,b){  // функция рандомного цвета в rgba
    return "rgba("+
      Math.floor(255*r)+","+
      Math.floor(255*g)+","+
      Math.floor(255*b)+","+
      Math.floor(255*a)+")";
  };
}

function enterNameValidation(value, elem, args) {
  // value - что введено в поле, args - что задано аргументом правила валидации, т.е. 20
  // 1. текст не должен быть слишком длинным
  if (value.length >= args) {
    return false;
  }
  // 2. должно состоять из большой русской буквы и множества маленьких
  return /[А-ЯЁа-яёA-Za-z0-9]+$/.test(value);
}

$.validator.addMethod('enter_name', enterNameValidation,
  'Enter your name using letters and numbers');

//const heading = document.querySelector('.jump');
//heading.innerHTML = sparanWrap(heading.textContent);

function sparanWrap(word) {
  return [...word].map(letter => `<span>${letter}</span>`).join('');
}