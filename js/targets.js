class Targets {
  constructor() {
    this.targetsNumber = 10;
    this.objects = [];    // объект для хранения параметров цели на игровом поле
    this.maxID = 0;   // начальное значение количества элементов в this.objects, которое будет использоваться для подсчета количества циклов в this.render() и this.update()
  }

  init(target){
    target.vx = target.v * Math.cos(target.angle);
    target.vy = target.v * Math.sin(target.angle);
    target.hitAnimClock = -1;   // нормальное значение для неотстреленной цели, которое меняется после попадания
    target.scale = 1;   // значение нормального масштаба для цели
    target.currentAlpha = 0;  // значение непрозрачности для отображения цели на экране
    target.maxAlpha = 1;  // значение дня ограничения непрозрачности альфа-канала цели
  }

  pushObj(target){
    this.init(target);
    let i = -1;
    while(this.objects[++i] !== undefined);
    this.objects[i] = target;
    if(this.maxID < i) this.maxID = i;
  };
  getSize(){    // функция для нахождения empty элемента массива
    let size = 0;
    for(let i = 0;i < this.maxID;i++){
      if(this.objects[i] === undefined) continue;
      size++;
    }
    return size;
  };

  update(dt){
    for(let i = 0;i < this.maxID;i++){    // обновляем местоположение каждой цели в координатной плосксти
      if(this.objects[i] === undefined) continue;
      let obj = this.objects[i];

      obj.x += obj.vx * dt;
      obj.y += obj.vy * dt;

      // console.log(this.objects[0].currentAlpha); //
      if(obj.currentAlpha !== obj.maxAlpha){   // задаем плавность изменения непрозраности цели
        obj.currentAlpha += (obj.maxAlpha - obj.currentAlpha) / 100;
      }

      if(obj.currentAlpha > 0.5){  // исчезание цели при попадании
        let infoBullets = bullets.getMinInfo(obj);   // возвращает объект {dist:dist,object:obj} с сылкой на пулю и ее расстоянием до цели
        if(infoBullets.dist <= obj.size * obj.scale){  // условие, если пуля попадает в радиус цели
          infoBullets.object.remove = true;    // убираем пулю
          bangSound.play();   // звук исчезновения цели
          if(obj.hitAnimClock === -1) {    // изменить значение obj.hitAnimClock для запуска таймера плавного исчезновения цели
            obj.hitAnimClock = 0;
            score.countPlus();    // увеличивание счета преред исчезанием цели

            level.killedTargets++;  // контроль статистики на уровне

          }
        }
        let infoPlayer = player.getMinInfo(obj);    // возвращает объект {dist:dist} с расстоянием от игрока до цели
        if(infoPlayer.dist <= obj.size * obj.scale){

          if(obj.hitAnimClock === -1) {    // изменить значение obj.hitAnimClock для запуска таймера плавного исчезновения цели

            obj.hitAnimClock = 0;
            score.countMegaMinus();    // увеличивание счета преред исчезанием цели
          }
        }

      }
      if(obj.hitAnimClock !== -1){  // исчезание цели с шагом переданного аргумента dt в интервале от 0 до 1
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

    if(this.getSize() < this.targetsNumber){  // отрисовка новой цели
      this.pushObj({
        x:Math.random()*width,
        y:15,
        v:50,
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
  render(){
    for(let i = 0;i < this.maxID;i++){
      if(this.objects[i] === undefined) continue;
      let obj = this. objects[i];

      obj.scale = 1;
      if(obj.hitAnimClock !== -1){
        obj.scale = 1 + 2 * obj.hitAnimClock; // увеличиваем масштаб цели при попадании в нее пули
      }

      $(`#canvas`).drawArc({
        fillStyle: utils.getARGBString(
            obj.currentAlpha,
            obj.color.r,
            obj.color.g,
            obj.color.b
        ),
        x: obj.x, y: obj.y,
        radius: obj.size * obj.scale,
      });
    }
  };

}

let targets = new Targets();
