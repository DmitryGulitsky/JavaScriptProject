'use strict';

// здесь создаем механику и отрисовку каждой пули

class Bullets {
  constructor() {
    this.objects = [];  // объект для хранения параметров выпущенной пули
    this.maxID = 0;  // начальное значение количества элементов в this.objects, которое будет использоваться для подсчета количества циклов в this.render() и this.update()
    this.init = function (bullet) {
      bullet.vx = bullet.v * Math.cos(bullet.angle);
      bullet.vy = bullet.v * Math.sin(bullet.angle);
    }
  }

  pushObj(bullet) {
    // функция, куда передаются значения {x = player.x, y = player.y, angle = player.angle, v = 200}

    shotSound.play();  // звук выстрела при появлении пули

    score.countMinus();    // уменьшение счета преред исчезанием цели

    this.init(bullet);

    let id = -1; // задается начальное значение -1, чтобы далее через преинкремент обращаться к нулевому элементу массива this.objects[] и не запускать циклы в this.render() и this.update()

    while (this.objects[++id] != undefined) ;
    this.objects[id] = bullet;    //добавляем объект с параметрами пули в empty место массива
    if (id > this.maxID) {   //увеличиваем значение для максимального количество ячеек, чтобы циклы в this.render() и this.update охватывали все элементы
      this.maxID = id;
    }
    //console.log(this.maxID);
    //console.log(bullets.objects);
  }

  update(dt) {  // обновляем местоположение каждой пули в координатной плосксти
    for (let i = 0; i <= this.maxID; i++) {
      if (this.objects[i] == undefined) continue;

      let obj = this.objects[i];

      obj.x += obj.vx * dt;
      obj.y += obj.vy * dt;

      if (   // удаляем элемент объекта this.objects, если вылетает за пределы игрового поля
        obj.x < 0 || obj.y < 0 ||
        obj.x > width || obj.y > height ||
        obj.remove) {
        delete this.objects[i];
      }
    }
  }

  render() {  // отрисовка каждой пули

    for (let i = 0; i < this.maxID; i++) {
      if (this.objects[i] === undefined) continue;

      let obj = this.objects[i];

      $(`#canvas`).drawArc({
        fillStyle: '#ff7974',
        x: obj.x, y: obj.y,
        radius: 3,
      });
    }
  }

  getMinInfo(o) { //рассчет столкновения пули и цели
    let dist = 99999; //расстояние, предполагаемо большее суммы двух радиусов
    let obj;
    for (let i = 0; i <= this.maxID; i++) {
      if (this.objects[i] == undefined) continue;
      let d = Math.sqrt(
        (o.x - this.objects[i].x) * (o.x - this.objects[i].x) +
        (o.y - this.objects[i].y) * (o.y - this.objects[i].y)
      );
      if (d < dist) {
        dist = d;
        obj = this.objects[i];
      }
    }
    return {dist: dist, object: obj};
  }
}

let bullets = new Bullets();
