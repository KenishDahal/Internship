let canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 650;
canvas.height = 650;

// Images
let birdImage = new Image();
let backgroundImage = new Image();
let pipeImageUp = new Image();
let pipeImageDown = new Image();
let groundImage = new Image();
let gameOverImage = new Image();
let tapTapImage = new Image();
let getReadyImage = new Image();

// Images src
backgroundImage.src = "assets/background-flappy.png";
pipeImageDown.src = "assets/pipe-2.png";
pipeImageUp.src = "assets/pipe-1.png";
groundImage.src = "assets/ground.png";
birdImage.src = "assets/blackbird.png";
gameOverImage.src = "assets/scoreBoard.png";
tapTapImage.src = "assets/tap.jpeg";
getReadyImage.src = "assets/getReadyImage.png";

// Click addEventListener
canvas.addEventListener("click", function (e) {
  switch (state.currentState) {
    case state.getReady:
      state.currentState = state.game;
      break;
    case state.game:
      birds.fly();
      break;

    case state.gameOver:
      birds.speed = 0;
      pipes.reset();
      score.reset();
      state.currentState = state.getReady;
      // location.reload();
      break;
  }
});

// State Objcet to determine game state
let state = {
  currentState: 0,
  getReady: 0,
  game: 1,
  gameOver: 2,
};

// Ready frame to start game
class getReady {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.x = canvas.width / 2 - 50;
    this.y = canvas.height / 2 - 100;
    this.speed = 0;
  }
  draw() {
    if (state.currentState === state.getReady) {
      // ctx.fillText("Get Ready:", canvas.width / 2 - 100, canvas.height / 2);
      // ctx.fillStyle = "black";
      // ctx.font = "50px Regular";
      ctx.drawImage(
        getReadyImage,
        0,
        80,
        this.width + 200,
        this.height - 20,
        this.x - 40,
        this.y - 100,
        300,
        90
      );
      ctx.drawImage(tapTapImage, this.x, this.y, this.width, this.height);
    }
  }
}

// Game over frame to Restart game
class gameOver {
  constructor() {
    this.width = 220;
    this.height = 190;
    this.x = 0;
    this.y = 0;
    this.speed = 0;
  }
  draw() {
    if (state.currentState === state.gameOver) {
      ctx.drawImage(
        gameOverImage,
        canvas.width / 2 - 100,
        canvas.height / 2 - 100,
        this.width,
        this.height
      );
    }
  }
}

// Score sheet
class Score {
  constructor() {
    this.best = 0;
    this.point = 0;
    this.width = 150;
    this.height = 150;
  }
  draw() {
    if (state.currentState === state.game) {
      ctx.fillText(this.point, canvas.width / 2 - 50, canvas.height / 2 - 250);
      ctx.fillStyle = "white";
      ctx.font = "50px Regular";
    }

    if (state.currentState === state.gameOver) {
      ctx.fillText(this.point, canvas.width / 2 + 70, canvas.height / 2 - 16);
      ctx.strokeText(this.point, canvas.width / 2 + 70, canvas.height / 2 - 16);
      ctx.fillText(this.best, canvas.width / 2 + 70, canvas.height / 2 + 20);
      ctx.strokeText(this.best, canvas.width / 2 + 70, canvas.height / 2 + 20);
      ctx.fillStyle = "white";
      ctx.font = "20px Regular";
    }
  }
  reset() {
    this.point = 0;
  }
}

// Background frame having canvas area
class Background {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 200;
    this.height = 800;
    this.x = 0;
    this.y = 0;
    this.speed = 0;
  }

  draw() {
    ctx.drawImage(
      backgroundImage,
      this.x,
      this.y,
      this.gameWidth,
      this.gameHeight
    );
  }
  update() {
    this.draw();
  }
}

class Ground {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 200;
    this.height = 100;
    this.x = 0;
    this.y = this.gameHeight - this.height;
    this.speed = 0;
  }

  draw() {
    ctx.drawImage(groundImage, this.x, this.y, this.gameWidth, this.height);
  }
  update() {
    this.draw();
    if (state.currentState !== state.game) return;
    this.x--;
    if (this.x < 0) {
      this.x = 0;
    }
  }
}

// Pipes
class Pipe {
  constructor(gameWidth, gameHeight) {
    this.pipe = [];
    // this.top = {
    //   x: canvas.width,
    //   y: 0,
    // };
    this.pipe[0] = {
      x: canvas.width,
      y: -100,
    };
    // this.bottom = {
    //   x: canvas.width,
    //   y: 0,
    // };

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 60;
    this.height = 300;
    this.const = 150;
    this.speed = 0;
  }

  draw() {
    for (let i = 0; i < this.pipe.length; i++) {
      ctx.drawImage(
        pipeImageDown,
        this.pipe[i].x,
        this.pipe[i].y,
        this.width,
        this.height
      );
      ctx.drawImage(
        pipeImageUp,
        this.pipe[i].x,
        this.pipe[i].y + this.height + this.const,
        this.width,
        this.height
      );
    }
  }

  update() {
    // Execute only if state is in gamestate // means :- while game is start mode
    if (state.currentState !== state.game) return;

    for (let i = 0; i < this.pipe.length; i++) {
      this.pipe[i].x -= 5;

      if (state.currentState == state.game) {
        if (this.pipe[i].x == this.gameWidth - 250) {
          this.pipe.push({
            x: this.gameWidth,
            y: Math.floor(Math.random() * -100) - 100,
          });
        }
      }

      // collision between Bird and Pipe

      /** assigning y-axis value of lower pipe to bottomPipeY */
      let bottomPipeY = this.pipe[i].y + pipes.height + pipes.const;

      if (
        birds.x + birds.width > this.pipe[i].x &&
        birds.x < this.pipe[i].x + this.width &&
        birds.y + birds.width > this.pipe[i].y &&
        birds.y < this.pipe[i].y + this.height
      ) {
        state.currentState = state.gameOver;
      }
      if (
        birds.x + birds.width > this.pipe[i].x &&
        birds.x < this.pipe[i].x + this.width &&
        birds.y + birds.width > bottomPipeY &&
        birds.y < bottomPipeY + this.height
      ) {
        state.currentState = state.gameOver;
      }
      // if pipe passes canvas width, score is added and pipe is deleted
      if (this.pipe[i].x + this.width < 0) {
        this.pipe.shift();
        score.point++;
        score.best = Math.max(score.point, score.best);
        localStorage.setItem("bestScore", score.best);
      }
    }
  }
  // Reset pipe position and empty pipe array when new game is started
  reset() {
    this.pipe = [];
    this.pipe[0] = {
      x: canvas.width,
      y: -100,
    };
  }
}

class Bird {
  constructor(gameWidth, gameHeight) {
    this.x = 100;
    this.y = 100;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 40;
    this.height = 30;
    this.speed = 0;
    this.jump = 4;
    this.gravity = 0.25;
  }

  draw() {
    ctx.drawImage(birdImage, this.x, this.y, this.width, this.height);
  }

  // Only jump when it is in game state, as mentioned in clickEvent
  fly() {
    this.speed = -this.jump;
  }

  update(input) {
    if (state.currentState == state.getReady) {
      this.x = 100;
      this.y = 100;
      birdImage.src = "assets/blackbird.png";
    } else {
      this.speed += this.gravity;
      this.y += this.speed;
    }

    // Stops when bird touches ground
    if (this.y > this.gameHeight - ground.height - 25) {
      this.y = this.gameHeight - ground.height - 25;
    }
    // red bird when game is over
    if (state.currentState === state.gameOver) {
      birdImage.src = "assets/red-bird.png";
    }
    // black bird when game is on playing mode
    if (state.currentState === state.game) {
      birdImage.src = "assets/blackbird.png";
    }
  }
}

let getReadyO = new getReady();
let gameOverO = new gameOver();
let background = new Background(canvas.width, canvas.height);
let birds = new Bird(canvas.width, canvas.height);
let pipes = new Pipe(canvas.width, canvas.height);
let ground = new Ground(canvas.width, canvas.height);
let score = new Score(canvas.width, canvas.height);

// Calling function for animation
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.update();
  pipes.draw();
  pipes.update();
  ground.update();
  //pipe.draw();
  birds.draw();
  birds.update();
  getReadyO.draw();
  gameOverO.draw();
  score.draw();
  requestAnimationFrame(animate);
}

animate();
