var utils = new Utils();

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
