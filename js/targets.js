var targets = new Targets();
var targetsNumber = 100;

function Targets(){

  this.objects = [];    // объект для хранения параметров цели на игровом поле
  this.maxID = 0;   // начальное значение количества элементов в this.objects, которое будет использоваться для подсчета количества циклов в this.render() и this.update()

  this.init = function(target){
    target.vx = target.v * Math.cos(target.angle);
    target.vy = target.v * Math.sin(target.angle);
    target.hitAnimClock = -1;   // нормальное значение для неотстреленной цели, которое меняется после попадания
    target.scale = 1;   // значение нормального масштаба для цели
    target.currentAlpha = 0;  // значение непрозрачности для отображения цели на экране
    target.maxAlpha = 1;  // значение дня ограничения непрозрачности альфа-канала цели
  }

  this.pushObj = function(target){
    this.init(target);
    var i = -1;
    while(this.objects[++i] != undefined);
    this.objects[i] = target;
    if(this.maxID < i) this.maxID = i;
  };
  this.getSize = function(){    // функция для нахождения empty элемента массива
    var size = 0;
    for(var i = 0;i < this.maxID;i++){
      if(this.objects[i] == undefined) continue;
      size++;
    }
    return size;
  };

  this.update = function(dt){
    for(var i = 0;i < this.maxID;i++){    // обновляем местоположение каждой цели в координатной плосксти
      if(this.objects[i] == undefined) continue;
      var obj = this.objects[i];

      obj.x += obj.vx * dt;
      obj.y += obj.vy * dt;

      // console.log(this.objects[0].currentAlpha); //
      if(obj.currentAlpha != obj.maxAlpha){   // задаем плавность изменения непрозраности цели
        obj.currentAlpha += (obj.maxAlpha - obj.currentAlpha) / 100;
      }

      if(obj.currentAlpha > 0.5){  // исчезание цели при попадании
        var infoBullets = bullets.getMinInfo(obj);   // возвращает объект {dist:dist,object:obj} с сылкой на пулю и ее расстоянием до цели
        if(infoBullets.dist <= obj.size * obj.scale){  // условие, если пуля попадает в радиус цели
          infoBullets.object.remove = true;    // убираем пулю
          bangSound.play();   // звук исчезновения цели
          if(obj.hitAnimClock == -1) {    // изменить значение obj.hitAnimClock для запуска таймера плавного исчезновения цели
            obj.hitAnimClock = 0;
            score.countPlus();    // увеличивание счета преред исчезанием цели
          }
        }
        var infoPlayer = player.getMinInfo(obj);    // возвращает объект {dist:dist} с расстоянием от игрока до цели
        if(infoPlayer.dist <= obj.size * obj.scale){

          if(obj.hitAnimClock == -1) {    // изменить значение obj.hitAnimClock для запуска таймера плавного исчезновения цели

            obj.hitAnimClock = 0;
            score.countMegaMinus();    // увеличивание счета преред исчезанием цели
          }
        }

      }
      if(obj.hitAnimClock != -1){  // исчезание цели с шагом переданного аргумента dt в интервале от 0 до 1
        obj.hitAnimClock += dt;
        if(obj.hitAnimClock >= 1){
          delete this.objects[i];
          continue;
        }
      }

      if(obj.x - obj.size < 0 || obj.x + obj.size > width)  // устанавливаем ограничение передвижения целей в пределах игрового поля
      {
        obj.vx = -obj.vx;
      }
      if(obj.y - obj.size < 0 || obj.y + obj.size > height)
      {
        obj.vy = -obj.vy;
      }
    }

    if(this.getSize() < targetsNumber){  // отрисовка новой цели
      this.pushObj({
        x:Math.random()*width,
        y:15,
        v:100,
        angle:Math.random()*2*Math.PI,
        size:15,
        color:{
          r:Math.random(),
          g:Math.random(),
          b:Math.random(),
        }
      });
    }


  };
  this.render = function(ctx){
    for(var i = 0;i < this.maxID;i++){
      if(this.objects[i] == undefined) continue;
      var obj = this. objects[i];

      obj.scale = 1;
      if(obj.hitAnimClock != -1){
        obj.currentAlpha = 1 - obj.hitAnimClock * 1.5; // изменяем непрозрачность при попадании пули в цель
        if(obj.currentAlpha < 0) {
          obj.currentAlpha = 0;
        }
        obj.scale = 1 + 2 * obj.hitAnimClock; // увеличиваем масштаб цели при попадании в нее пули
        obj.maxAlpha = obj.currentAlpha;
      }
      ctx.fillStyle = utils.getARGBString(
        obj.currentAlpha,
        obj.color.r,
        obj.color.g,
        obj.color.b
      );
      ctx.globalAlpha = obj.currentAlpha;
      ctx.beginPath();
      ctx.arc(obj.x,obj.y,obj.size * obj.scale,0,Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  };
}