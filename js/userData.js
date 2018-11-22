<canvas id="canvas" width="600" height="300">


var $canvas = $('#canvas');

// сам прямоугольник
$canvas.drawRect({
  fillStyle: 'steelblue',
  strokeStyle: 'blue',
  strokeWidth: 4,
  x: 150, y: 100,
  fromCenter: false,
  width: 200,
  height: 100
});

$canvas.drawArc({
  strokeStyle: 'steelblue',
  strokeStyle: 'blue',
  strokeWidth: 4,
  x: 300, y: 100,
  radius: 50,
  // начальный и конечный углы в градусах
  start: 0, end: 200
});


$сanvas.drawLine({
  strokeStyle: 'steelblue',
  strokeWidth: 10,
  rounded: true,
  closed: true,
  x1: 100, y1: 28,
  x2: 50, y2: 200,
  x3: 300, y3: 200,
  x4: 200, y4: 109
});

$myCanvas.drawText({
  text: 'Canvas is fun',
  fontFamily: 'cursive',
  fontSize: 40,
  x: 290, y: 150,
  fillStyle: 'lightblue',
  strokeStyle: 'blue',
  strokeWidth: 1
});