'use strict';

// здесь задаем логику появления, движения игрока, его отрисовку

let pointerLength = 25;

class Player {
  constructor() {
    this.x = 0;   //начальная позиция игрока по оси X
    this.y = 0;   //начальная позиция игрока по оси Y
    this.vx = 0;  //скорость движения игрока по оси Х
    this.vy = 0;  //скорость движения игрока по оси Y
    this.v = 0;
    this.angle = 0;  //значение угла поворота игрока в радианах
    this.lastShootTime = 0;  //значение времени последнего выстрела, для задержки следующего

    this.stats = {
      size: 10,
      maxV: 100,   //максимальная скорость игрока
      dAngle: 0.03,  //угол поворота за один цикл
      acceleration: 10,  //значение для ускорения и торможения игрока
      shootDelayMs: 100   //время задержки между выстрелами
    };
  }

  update(dt) {
    if (keyLogger.keyStatus.up) {
      this.v += this.stats.acceleration;  // ускорение движения игрока вперед
      if (this.v > this.stats.maxV) // ограничение скорости движения игрока вперед
        this.v = this.stats.maxV;
    }
    if (keyLogger.keyStatus.down) {
      this.v -= this.stats.acceleration;   // ускорение движения игрока назад
      if (this.v < -this.stats.maxV)  // ограничение скорости движения игрока назад
        this.v = -this.stats.maxV;
    }
    if (keyLogger.keyStatus.left) {
      this.angle -= this.stats.dAngle;  // вращение игрока влево
      if (this.angle < 0)  // ограничение интервала вращения в радианах от 0 до 2*PI (от 0 до 360 в градусах)
        this.angle += 2 * Math.PI;
    }
    if (keyLogger.keyStatus.right) {
      this.angle += this.stats.dAngle;
      if (this.angle > 2 * Math.PI)  // ограничение интервала вращения в радианах от 0 до 2*PI (от 0 до 360 в градусах)
        this.angle -= 2 * Math.PI;
    }


    if (!(keyLogger.keyStatus.up || keyLogger.keyStatus.down)) {  // плавное торможение, при ненажатии кнопок 'up' 'down'
      this.v *= 0.99;
    }

    this.vx = this.v * Math.cos(this.angle);    // изменение скорости по оси X, в зависимости от угла поворота игрока
    this.vy = this.v * Math.sin(this.angle);    // изменение скорости по оси Y, в зависимости от угла поворота игрока

    this.x += this.vx * dt;  // изменение коорданаты X положения игрока за еденицу времени
    this.y += this.vy * dt;  // изменение коорданаты Y положения игрока за еденицу времени

    // движение фона под движение игрока

    if (this.x < backgroundSpaceParametres.centerX) {
      backgroundSpaceParametres.starX_dir += 1;

    } else {
      backgroundSpaceParametres.starX_dir += -1;
    }

    if (this.y < backgroundSpaceParametres.centerY) {
      backgroundSpaceParametres.starY_dir += 1;
    } else {
      backgroundSpaceParametres.starY_dir += -1;
    }

    let time = utils.getTime(); // определяется текущий момент времени
    if (keyLogger.keyStatus.fire &&
      time - this.lastShootTime >= this.stats.shootDelayMs) {  // определяется была ли нажата клавиша fire и прошло ли время задержки выстрела
      bullets.pushObj({ // добавляем в объект bullets пулю
        x: this.x,  // задаем начальное положение пули - координаты положения игрока по оси X
        y: this.y,  // задаем начальное положение пули - координаты положения игрока по оси Y
        angle: this.angle,  // задаем направление движения пули - угол, куда направлен игрок
        v: 200  // задаем скорость движения пули
      });
      this.lastShootTime = time;  // устанавливаем время последнего выстрела
    }

    if (this.x - this.stats.size < 0) {  // устанавливаем ограничение передвижения игрока в пределах игрового поля
      this.x = this.stats.size;
    }
    if (this.x + this.stats.size > width) {
      this.x = width - this.stats.size;
    }
    if (this.y - this.stats.size < 0) {
      this.y = this.stats.size;
    }
    if (this.y + this.stats.size > height) {
      this.y = height - this.stats.size;
    }
  }

  getMinInfo(o) {   //рассчет столкновения игрока и цели
    let dist = 99999; //расстояние, предполагаемо большее суммы двух радиусов

    let d = Math.sqrt(
      (o.x - this.x) * (o.x - this.x) +
      (o.y - this.y) * (o.y - this.y)
    );
    if (d < dist) {
      dist = d;
    }

    return {dist: dist};
  }

  render() {// отрисовываем игрока

    $(`#canvas`).drawArc({     // окружность игрока
      fillStyle: '#FF0000',
      strokeStyle: '#333',
      strokeWidth: 4,
      x: this.x, y: this.y,
      radius: this.stats.size
    }).drawLine({
      strokeStyle: '#FF0000',
      strokeWidth: 10,
      rounded: false,
      closed: true,
      x1: this.x, y1: this.y,
      x2: this.x + pointerLength * Math.cos(this.angle), y2: this.y + pointerLength * Math.sin(this.angle),
    });
  }
}

const player = new Player();
