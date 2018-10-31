var player = new Player();
var pointerLength = 25;

function Player(){
  this.x = 0;   //начальная позиция игрока по оси X
  this.y = 0;   //начальная позиция игрока по оси Y
  this.vx = 0;  //скорость движения игрока по оси Х
  this.vy = 0;  //скорость движения игрока по оси Y
  this.v = 0;
  this.angle = 0;  //значение угла поворота игрока в радианах
  this.lastShootTime = 0;  //значение времени последнего выстрела, для задержки следующего


  this.stats = {
    maxV:100,   //максимальная скорость игрока
    dAngle:0.03,  //угол поворота за один цикл
    acceleration:10,  //значение для ускорения и торможения игрока
    shootDelayMs:1000   //время задержки между выстрелами
  };


  this.update = function(dt){  // изменение координат положения игрока
    if(keyLogger.keyStatus.up){
      this.v += this.stats.acceleration;  // ускорение движения игрока вперед
      if(this.v > this.stats.maxV) // ограничение скорости движения игрока вперед
        this.v = this.stats.maxV;
    }
    if(keyLogger.keyStatus.down){
      this.v -= this.stats.acceleration;   // ускорение движения игрока назад
      if(this.v < -this.stats.maxV)  // ограничение скорости движения игрока назад
        this.v = -this.stats.maxV;
    }
    if(keyLogger.keyStatus.left){
      this.angle -= this.stats.dAngle;  // вращение игрока влево
      if(this.angle < 0)  // ограничение интервала вращения в радианах от 0 до 2*PI (от 0 до 360 в градусах)
        this.angle += 2*Math.PI;
    }
    if(keyLogger.keyStatus.right){
      this.angle += this.stats.dAngle;
      if(this.angle > 2*Math.PI)  // ограничение интервала вращения в радианах от 0 до 2*PI (от 0 до 360 в градусах)
        this.angle -= 2*Math.PI;
    }


    if(!(keyLogger.keyStatus.up || keyLogger.keyStatus.down)) {  // плавное торможение, при ненажатии кнопок 'up' 'down'
      this.v *= 0.99;
    }

    this.vx = this.v * Math.cos(this.angle);    // изменение скорости по оси X, в зависимости от угла поворота игрока
    this.vy = this.v * Math.sin(this.angle);    // изменение скорости по оси Y, в зависимости от угла поворота игрока

    this.x += this.vx * dt;  // изменение коорданаты X положения игрока за еденицу времени
    this.y += this.vy * dt;  // изменение коорданаты Y положения игрока за еденицу времени

    var time = utils.getTime(); // определяется текущий момент времени
    if(keyLogger.keyStatus.fire &&
      time - this.lastShootTime >= this.stats.shootDelayMs){  // определяется была ли нажата клавиша fire и прошло ли время задержки выстрела
      bullets.bang({ // добавляем в объект bullets пулю
        x:this.x,  // задаем начальное положение пули - координаты положения игрока по оси X
        y:this.y,  // задаем начальное положение пули - координаты положения игрока по оси Y
        angle:this.angle,  // задаем направление движения пули - угол, куда направлен игрок
        v:200  // задаем скорость движения пули
      });
      this.lastShootTime = time;  // устанавливаем время последнего выстрела
    }

    //  if(player.x - player.size < 0 || player.x + player.size > width)
    //  {
    //    player.vx = 0;
    //  }
    //  if(player.y - player.size < 0 || player.y + player.size > height)
    //  {
    //    player.vy = 0;
    //  }

  };

  this.render = function(ctx){   // отрисовываем игрока
    ctx.fillStyle="#FF0000";
    ctx.beginPath();
    ctx.arc(this.x,this.y,10,0,6.28);
    ctx.fill();

    ctx.strokeStyle="#FF0000";
    ctx.beginPath();
    ctx.moveTo(this.x,this.y);  // точка в центре игрока

    ctx.lineTo(
      this.x + pointerLength * Math.cos(this.angle),  // точка на конце пушки
      this.y + pointerLength * Math.sin(this.angle)
    );
    ctx.stroke();
  };

}