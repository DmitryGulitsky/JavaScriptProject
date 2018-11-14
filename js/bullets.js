var bullets = new Bullets();

function Bullets(){
  this.objects = [];  // объект для хранения параметров выпущенной пули
  this.maxID = 0;  // начальное значение количества элементов в this.objects, которое будет использоваться для подсчета количества циклов в this.render() и this.update()
  this.init = function(bullet){
    bullet.vx = bullet.v * Math.cos(bullet.angle);
    bullet.vy = bullet.v * Math.sin(bullet.angle);
  }
  this.pushObj = function(bullet){ // функция, куда передаются значения {x = player.x, y = player.y, angle = player.angle, v = 200}

    shotSound.play();  // звук выстрела при появлении пули

    score.countMinus();    // уменьшение счета преред исчезанием цели

    this.init(bullet);

    var id = -1; // задается начальное значение -1, чтобы далее через преинкремент обращаться к нулевому элементу массива this.objects[] и не запускать циклы в this.render() и this.update()

    while(this.objects[++id] != undefined);
    this.objects[id] = bullet;    //добавляем объект с параметрами пули в empty место массива
    if(id > this.maxID) {   //увеличиваем значение для максимального количество ячеек, чтобы циклы в this.render() и this.update охватывали все элементы
      this.maxID = id;
    }
    //console.log(this.maxID);
    //console.log(bullets.objects);
  };

  this.update = function(dt){  // обновляем местоположение каждой пули в координатной плосксти
    for(var i = 0;i <= this.maxID;i++){
      if(this.objects[i] == undefined) continue;

      var obj = this.objects[i];

      obj.x += obj.vx * dt;
      obj.y += obj.vy * dt;

      if(   // удаляем элемент объекта this.objects, если вылетает за пределы игрового поля
        obj.x < 0 || obj.y < 0 ||
        obj.x > width || obj.y > height ||
        obj.remove) {
        delete this.objects[i];
      }

    }
  }

  this.render = function(ctx){  // отрисовка каждой пули
    ctx.fillStyle = "#ff7974";
    for(var i = 0;i < this.maxID;i++){
      if(this.objects[i] == undefined) continue;

      var obj = this.objects[i];
      ctx.beginPath();
      ctx.arc(obj.x,obj.y,3,0,Math.PI * 2);
      ctx.fill();
    }
  };

  this.getMinInfo = function(o){ //рассчет столкновения пули и цели
    var dist = 99999; //расстояние, предполагаемо большее суммы двух радиусов
    var obj;
    for(var i = 0;i <= this.maxID;i++){
      if(this.objects[i] == undefined) continue;
      var d = Math.sqrt(
        (o.x - this.objects[i].x)*(o.x - this.objects[i].x)+
        (o.y - this.objects[i].y)*(o.y - this.objects[i].y)
      );
      if(d < dist){
        dist = d;
        obj = this.objects[i];
      }
    }
    return {dist:dist,object:obj};
  };

}
