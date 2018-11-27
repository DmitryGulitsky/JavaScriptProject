'use strict';

let backgroundSpaceParametres = {
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
  radius: 1,
  starsIndex: 0,
  stars: [],
  centerX: window.innerWidth / 2,
  centerY: window.innerHeight / 2,
  focalLength: 500,
  starRadius: null,
  starX: null,
  starY: null,
  numStars: 100,
  mouse: {},
  starX_dir: 0,
  starY_dir: 0
};

class Star {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.radius = backgroundSpaceParametres.radius;
    this.color = "white";
    backgroundSpaceParametres.starsIndex++;
    backgroundSpaceParametres.stars[backgroundSpaceParametres.starsIndex] = this;
    this.id = backgroundSpaceParametres.starsIndex;
  }


  // Animate Stars
  updateStar() {
    backgroundSpaceParametres.starX = (this.x - backgroundSpaceParametres.centerX) * (backgroundSpaceParametres.focalLength / this.z);
    backgroundSpaceParametres.starX += backgroundSpaceParametres.centerX;

    backgroundSpaceParametres.starY = (this.y - backgroundSpaceParametres.centerY) * (backgroundSpaceParametres.focalLength / this.z);
    backgroundSpaceParametres.starY += backgroundSpaceParametres.centerY;

    backgroundSpaceParametres.starRadius = backgroundSpaceParametres.radius * (backgroundSpaceParametres.focalLength / this.z);

    backgroundSpaceParametres.starX += backgroundSpaceParametres.starX_dir;
    backgroundSpaceParametres.starY += backgroundSpaceParametres.starY_dir;

    this.z += -10;

    if (this.z <= 0) {
      this.z = parseInt(backgroundSpaceParametres.innerWidth);
    }
    this.render();
  }

  // Function for draw star
  render() {
    $(`#canvas`).drawArc({
      fillStyle: this.color,
      x: backgroundSpaceParametres.starX, y: backgroundSpaceParametres.starY,
      radius: backgroundSpaceParametres.starRadius
    })
  }
}

$(`#canvas`)
  .attr(`width`, backgroundSpaceParametres.innerWidth)
  .attr(`height`, backgroundSpaceParametres.innerHeight);

const spaceMove = (e) => {

  backgroundSpaceParametres.mouse.x = e.pageX;
  backgroundSpaceParametres.mouse.y = e.pageY;

  if (backgroundSpaceParametres.mouse.x < backgroundSpaceParametres.centerX) {
    backgroundSpaceParametres.starX_dir += 1;

  } else {
    backgroundSpaceParametres.starX_dir += -1;
  }

  if (backgroundSpaceParametres.mouse.y < backgroundSpaceParametres.centerY) {
    backgroundSpaceParametres.starY_dir += 1;
  } else {
    backgroundSpaceParametres.starY_dir += -1;
  }
};

$(`body`).mousemove(spaceMove);

// X,Y,Z values

for (let s = 0; s < backgroundSpaceParametres.numStars; s++) {
  let x = Math.random() * backgroundSpaceParametres.innerWidth;
  let y = Math.random() * backgroundSpaceParametres.innerHeight;
  let z = Math.random() * backgroundSpaceParametres.innerWidth;

  new Star(x, y, z);
}

// Function for animate canvas objects
const renderBackground = () => {

  $(`#canvas`).drawRect({
    fillStyle: 'black',
    x: 0, y: 0,
    fromCenter: false,
    width: backgroundSpaceParametres.innerWidth,
    height: backgroundSpaceParametres.innerHeight
  });
  for (let i in backgroundSpaceParametres.stars) {
    backgroundSpaceParametres.stars[i].updateStar();
  }
};
