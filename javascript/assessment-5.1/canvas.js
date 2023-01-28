// innerHeight = 100;
// innerWidth=222;
// let BOX_WIDTH = 340;
// let BOX_HEIGHT = 340;

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// particle
function Particle(x, y,radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.colo = color;
  this.image = new Image();
  this.image.src = "assets/boom.png";

  this.update = () => {
    this.draw();
  };

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.fillRect(this.x, this.y, BOX_WIDTH, BOX_HEIGHT);
    c.fillStyle = "red";
    c.fill();
    // c.strokeStyle = "black";
    // c.drawImage(this.image, this.x, this.y, BOX_WIDTH, BOX_HEIGHT);
    // c.strokeRect(this.x, this.y, BOX_WIDTH, BOX_HEIGHT);
    c.closePath();
  };
}
// distaNCE
function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
// Max-Min 
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Implementation
let particles;
function init() {
  particles = [];

  for (let i = 0; i < 4; i++) {
    const radius = 150;
    let x = randomIntFromRange(radius,canvas.width-radius);
    let y = randomIntFromRange(radius,canvas.height-radius);
    const color = "blue";
    if (i !== 0) {
      for (let j = 0; j < particles.length; j++) {
        if (distance(x, y, particles[j].x, particles[j].y)-radius*2 < 0) {
          x = randomIntFromRange(radius,canvas.width-radius);
          y = randomIntFromRange(radius,canvas.height-radius);

          j = -1;
        }
      }
    }
    particles.push(new Particle(x, y,radius, color));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  particles.forEach((particle) => {
    particle.update();
  });
}

init();
animate();
