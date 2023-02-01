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
addEventListener("click", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;


  // SPLICE.. NOT WORKING
  // for (var i = 0; i < particles.length; i++) {
  //   var particle = particles[i];
  //   var dx = mouse.x - particle.x;
  //   var dy = mouse.x - particle.y;
  //   var distance = Math.sqrt(dx * dx + dy * dy);

  //   if (distance < particle.radius) {
  //     particles.splice(i, 1);
  //     break;
  //   }
  // }

  // c.clearRect(0, 0, innerWidth, innerHeight);
  // draw();

});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});
/**
 *Rotates cordinate system for velocities
 *
 *Takes velocities and alerts them as if the cordinates system they're on was rotated
 */
function rotate(velocity, angle) {
  const rotateVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
  };
  return rotateVelocities;
}
// Swaps out two collision particles
function resolveCollision(particle, otherParticle) {
  const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

  const xDist = otherParticle.x - particle.x;
  const yDist = otherParticle.y - particle.y;

  // prevents accidental overlap
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    const angle = -Math.atan2(
      otherParticle.y - particle.y,
      otherParticle.x - particle.x
    );

    const m1 = particle.mass;
    const m2 = otherParticle.mass;

    const u1 = rotate(particle.velocity, angle);
    const u2 = rotate(otherParticle.velocity, angle);

    const v1 = {
      x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
      y: u1.y,
    };
    const v2 = {
      x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
      y: u2.y,
    };

    const vFinal1 = rotate(v1, -angle);
    const vFinal2 = rotate(v2, -angle);

    particle.velocity.x = vFinal1.x;
    particle.velocity.y = vFinal1.y;

    otherParticle.velocity.x = vFinal2.x;
    otherParticle.velocity.y = vFinal2.y;
  }
}
// // FLIP IMAGE
// function flipImage(image, c, flipH, flipV) {
//   var scaleH = flipH ? -1 : 1, // Set horizontal scale to -1 if flip horizontal
//       scaleV = flipV ? -1 : 1, // Set verical scale to -1 if flip vertical
//       posX = flipH ? 30 * -1 : 0, // Set x position to -100% if flip horizontal 
//       posY = flipV ? 30 * -1 : 0; // Set y position to -100% if flip vertical
  
//   c.save(); // Save the current state
//   c.scale(scaleH, scaleV); // Set scale to flip the image
//   c.drawImage(this.image, this.x-15, this.y-15,-30,-30); // draw the image
//   c.restore(); // Restore the last saved state
// };

// Particle
function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.velocity = {
    x: (Math.random() - 0.5)*2,
    y: (Math.random() - 0.5)*2,
  };
  this.mass = 0.2;
  this.radius = radius;
  this.color = color;
  this.image = new Image();
  this.image.src = "assets/well-ant.png";
  this.rotateImg = 36 * Math.PI / 180;;

  this.update = (particles) => {
    this.draw();

    for (let i = 0; i < particles.length; i++) {
      if (this === particles[i]) continue;
      if (distance(this.x, this.y, particles[i].x, particles[i].y) -
          this.radius * 2 < 0) {
        resolveCollision(this, particles[i]);  
        // particles[i].rotate(rotate);
        // this.image.src = "boom.png";  
      }
    }

    if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
      this.velocity.x = -this.velocity.x;
      // this.image.src = "dead-ant.jpeg";    
    //  this.x.translate();
    // flipImage(this.image, c, this.x - this.radius <= 0, this.x + this.radius >= innerHeight);
    }

    if (this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
      this.velocity.y = -this.velocity.y;
      // this.image.src = "boom.p";      
      // flipImage(this.image, c, this.x - this.radius <= 0, this.x + this.radius >= innerHeight);
    }
    if (distance(mouse.x , mouse.y, this.x, this.y) < 18){
      // clearRect();
      c.fillStyle = "white";
      //  this.image.style.transform = "scaleY(-1)";
      this.image.src = "assets/dead-ant.jpeg"; 
      // this.rotate(this.rotateImg);
      // c.clearRect();
      // particles[i].clearRect()
      //  ctx.clearRect(20, 20, 100, 50); 
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  };


  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // c.fillRect(this.x, this.y, BOX_WIDTH, BOX_HEIGHT);
    // c.fillStyle = "red";
    // c.fill();
    // c.strokeStyle = "white";
    // c.stroke();
    c.drawImage(this.image, this.x-15, this.y-15,30,30);
    // c.drawImage(this.image, this.x, this.y,60,60);
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
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Implementation
let particles;
function init() {
  particles = [];
 
  for (let i = 0; i <44; i++) {
    const radius = 16;
    let oo = 180;
    let x = randomIntFromRange(radius, canvas.width - radius);
    let y = randomIntFromRange(radius, canvas.height - radius);
    const color = "blue";
    if (i !== 0) {
      for (let j = 0; j < particles.length; j++) {
        if (distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
          x = randomIntFromRange(radius, canvas.width - radius);
          y = randomIntFromRange(radius, canvas.height - radius);

          j = -1;
        }
      }
    }
    particles.push(new Particle(x, y, radius, color));

    
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  particles.forEach((particle) => {
    particle.update(particles);
  });
}

init();
animate();

// const main = document.getElementById("main");
// main.setAttribute("id", "main")
// main.style.color = "black";
//   setInterval(main.innerHTML = "'🐜' Kill the ant !" ,100)
