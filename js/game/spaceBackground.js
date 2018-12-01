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

  // анимирование звезд
  updateStar() {
    backgroundSpaceParametres.starX = (this.x - window.innerWidth / 2) * (backgroundSpaceParametres.focalLength / this.z);
    backgroundSpaceParametres.starX += window.innerWidth / 2;

    backgroundSpaceParametres.starY = (this.y - window.innerHeight / 2) * (backgroundSpaceParametres.focalLength / this.z);
    backgroundSpaceParametres.starY += window.innerHeight / 2;

    backgroundSpaceParametres.starRadius = backgroundSpaceParametres.radius * (backgroundSpaceParametres.focalLength / this.z);

    backgroundSpaceParametres.starX += backgroundSpaceParametres.starX_dir;
    backgroundSpaceParametres.starY += backgroundSpaceParametres.starY_dir;

    this.z += -10;

    if (this.z <= 0) {
      this.z = parseInt(window.innerWidth);
    }
    this.render();
  }

  // отрисовка звезды
  render() {
    $(`#canvas`).drawArc({
      fillStyle: this.color,
      x: backgroundSpaceParametres.starX, y: backgroundSpaceParametres.starY,
      radius: backgroundSpaceParametres.starRadius
    })
  }
}

class SpaceBackground {
  constructor() {

  }

  spaceMove(e) {

    backgroundSpaceParametres.mouse.x = e.pageX;
    backgroundSpaceParametres.mouse.y = e.pageY;

    if (backgroundSpaceParametres.mouse.x < window.innerWidth / 2) {
      backgroundSpaceParametres.starX_dir += 1;

    } else {
      backgroundSpaceParametres.starX_dir += -1;
    }

    if (backgroundSpaceParametres.mouse.y < window.innerHeight / 2) {
      backgroundSpaceParametres.starY_dir += 1;
    } else {
      backgroundSpaceParametres.starY_dir += -1;
    }
  };

  renderBackground() {

       $(`#canvas`)
      .attr(`width`, window.innerWidth)
      .attr(`height`, window.innerHeight)
      .drawRect({
      fillStyle: 'black',
      x: 0, y: 0,
      fromCenter: false,
      width: window.innerWidth,
      height: window.innerHeight
    });
    for (let i in backgroundSpaceParametres.stars) {
      backgroundSpaceParametres.stars[i].updateStar();
    }
  };

  createStar() {
    for (let s = 0; s < backgroundSpaceParametres.numStars; s++) {
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      let z = Math.random() * window.innerWidth;

      new Star(x, y, z);
    }
  }
}

const spaceBackground = new SpaceBackground();
