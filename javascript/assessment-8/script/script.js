import ControlsBar from "./controlsBar.js";
import Cell from "./cell.js";
import { collision } from "./collision.js";
import Saviours from "./saviour.js";
import Enemy from "./enemy.js";
import Money from "./money.js";
// import savioursCard from "./saviourCard.js";
// import ShootDown from "./shootDown";

let canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 480;

// Global variables
let gameStatus = false;
let getReady = false;
let cellSize = 80;
let gameCell = [];
let sun = true;
let enemyPosition = [];
let enemyInterval = 600;
let score = 0;
let winningScore = 3;
let nextLevel = true;
let enemyType = [];
let best = 0;
export let saviours = [];
export let cellGap = 0;
export let noOfResources = 300;
export let chooseSaviour = 1;
export let enemy = [];
export let frame = 0;
export let money = [];
export let shootDown = [];

// Images
let enemyMan = new Image();
enemyMan.src = "assets/green-zombie.png";
enemyType.push(enemyMan);

let enemyMan2 = new Image();
enemyMan2.src = "assets/yellow-zombie.png";
enemyType.push(enemyMan2);

// Backgroung images
let background = new Image();
background.src = "assets/background-grass.avif";

let ladder = new Image();
ladder.src = "assets/ladder-removebg.png";

let gameOver = new Image();
gameOver.src = "assets/scoreBoard.png";

export let gate = new Image();
gate.src = "assets/gate-bg-removebg-preview.png";

export let levelUp = new Image();
levelUp.src = "assets/level-up-removebg.png";

export let ready = new Image();
ready.src = "assets/ready.png";

export let coin = new Image();
coin.src = "assets/coin-removebg.png";

// Audio
export let shot = new Audio();
shot.src = "assets/shot.mp3";

let click = new Audio();
click.src = "assets/click.mp3";

let wrongPlace = new Audio();
wrongPlace.src = "assets/wrong-place.mp3";

// Mouse
export let mouse = {
  x: undefined,
  y: undefined,
  width: 1,
  height: 1,
  clicked: false,
};

let canvasPosition = canvas.getBoundingClientRect();

canvas.addEventListener("click", (e) => {
  mouse.clicked = true;
});

canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x - canvasPosition.left;
  mouse.y = e.y - canvasPosition.top;
});

window.addEventListener("resize", (e) => {
  canvasPosition = canvas.getBoundingClientRect();
});

// Cell
function generateCell() {
  for (let y = cellSize; y < canvas.height; y += cellSize) {
    for (let x = 0; x < canvas.width; x += cellSize) {
      gameCell.push(new Cell(ctx, canvas.width, canvas.height, cellSize, x, y));
    }
  }
}
generateCell();

function fitGameCell() {
  for (let i = 0; i < gameCell.length; i++) {
    gameCell[i].draw();
  }
}
// Cell ends here

// Enemy starts here
function fitEnemy() {
  for (let i = 0; i < enemy.length; i++) {
    enemy[i].update();
    enemy[i].draw();
    if (enemy[i].x < 0) {
      gameStatus = true;
    }
    if (enemy[i].health <= 0) {
      score++;
      const showIndex = enemyPosition.indexOf(enemy[i].y);
      enemyPosition.splice(showIndex, 1);
      enemy.splice(i, 1);

      best = Math.max(score, best);
      localStorage.setItem("bestScore", best);
    }
  }
  if (
    frame % enemyInterval === 0 &&
    score < winningScore &&
    nextLevel &&
    getReady
  ) {
    // gets vertical position from the canvas grid ..i.e(5)
    let verticalPosition = Math.floor(Math.random() * 4 + 1) * cellSize;
    enemy.push(
      new Enemy(
        ctx,
        canvas.width,
        canvas.height,
        cellSize,
        verticalPosition,
        enemyType
      )
    );
    enemyPosition.push(verticalPosition);
    if (enemyInterval > 220) {
      enemyInterval -= 50;
    }

    console.log(verticalPosition);
  }
}
// Enemy end's here

// Money start's here ---- to buy defender/saviours
function fitMoney() {
  if (frame % 500 === 0 && enemy.length !== 0) {
    money.push(new Money(ctx, canvas.width, canvas.height, cellSize));
  }
  for (let i = 0; i < money.length; i++) {
    money[i].draw();
    money[i].update();
  }
}
// Money end's here

// Shooting starts here
function fitShootDown() {
  for (let i = 0; i < shootDown.length; i++) {
    //  if(shootDirection){
    shootDown[i].update();
    shootDown[i].draw();
    
    //  }

    if (shootDown[i] && shootDown[i].x > canvas.width - cellSize) {
      shootDown.splice(i, 1);
      i--;
    }
    for (let j = 0; j < enemy.length; j++) {
      if (shootDown[i] && enemy[j] && collision(shootDown[i], enemy[j])) {
        enemy[j].health -= 25;
        shootDown.splice(i, 1);
        i--;
        // console.log(enemy[j].health)
      }
    }
  }
}
// Shooting end's here

// Saviours start's here
// Images (Saviours)
let saviourType = [];

let saviourCard1 = new Image();
saviourCard1.src = "assets/first-saviour-spritesheet.png";
saviourType.push(saviourCard1);
let saviourCard2 = new Image();
saviourCard2.src = "assets/gun-saviour.png";
saviourType.push(saviourCard2);
let saviourCard3 = new Image();
saviourCard3.src = "assets/blocker.png";
saviourType.push(saviourCard3);
let saviourCard4 = new Image();
saviourCard4.src = "assets/chemical.png";
saviourType.push(saviourCard4);

// Clicking Events
canvas.addEventListener("click", function () {
  const cellPositionX = mouse.x - (mouse.x % cellSize) + cellGap;
  const cellPositionY = mouse.y - (mouse.y % cellSize) + cellGap;

  if (cellPositionY < cellSize) return;
  if (cellPositionY > cellSize * 4) return;

  for (let i = 0; i < saviours.length; i++) {
    if (saviours[i].x === cellPositionX && saviours[i].y === cellPositionY)
      return;
  }
  let saviourCost = 100;
  if (chooseSaviour == 3) {
    saviourCost = 50;
  }
  if (chooseSaviour == 4) {
    saviourCost = 50;
  }
  // if (collision(money,))
  for (let i = 0; i < money.length; i++) {
    if (collision(mouse, money[i])) return;
  }
  if (noOfResources >= saviourCost && getReady) {
    saviours.push(
      new Saviours(
        ctx,
        cellSize,
        cellPositionX,
        cellPositionY,
        saviourType,
        chooseSaviour,
        noOfResources
      )
    );
    noOfResources -= saviourCost;
  }
  if (!getReady) {
    getReady = true;
    noOfResources = 400;
  }
  if (gameStatus) {
    location.reload();
  }
});
canvas.addEventListener("click", function () {
  for (let i = 0; i < money.length; i++) {
    if (collision(money[i], mouse)) {
      noOfResources += money[i].amount;
      money.splice(i, 1);
      i--;
    }
  }
  if (!nextLevel) {
    nextLevel = true;
    score = 0;
    noOfResources = noOfResources + 400;
    saviours.length = 0;
  }
  for (let i = 0; i < saviours.length; i++) {
    if (saviours[i].chooseSaviour === 4) {
      if (saviours[i].timer > 300 && collision(mouse, saviours[i])) {
        noOfResources += 25;
        saviours[i].timer = 0;
      }
      //  this.sun = true;
    }
  }
});

function fitGameSaviour() {
  for (let i = 0; i < saviours.length; i++) {
    saviours[i].draw();
    saviours[i].update(noOfResources);

    // Check id enemy vertical position is same as saviours's position
    if (enemyPosition.indexOf(saviours[i].y) !== -1) {
      saviours[i].shootDirection = true;
    } else {
      saviours[i].shootDirection = false;
    }

    for (let j = 0; j < enemy.length; j++) {
      if (saviours[i] && collision(enemy[j], saviours[i])) {
        saviours[i].health--;
        enemy[j].movement = 0;
      }
      if (saviours[i] && saviours[i].health <= 0) {
        saviours.splice(i, 1);
        i--;
        enemy[j].movement = enemy[j].speed;
      }
    }
  }
}

// Saviour Card
let card1 = {
  x: 10,
  y: 10,
  width: 60,
  height: 65,
};
let card2 = {
  x: 90,
  y: 10,
  width: 60,
  height: 65,
};
let card3 = {
  x: 170,
  y: 10,
  width: 60,
  height: 65,
};
let card4 = {
  x: 250,
  y: 10,
  width: 60,
  height: 65,
};

function savioursCard() {
  let cardStroke1 = "black";
  let cardStroke2 = "black";
  let cardStroke3 = "black";
  let cardStroke4 = "black";

  if (collision(mouse, card1) && mouse.clicked) {
    chooseSaviour = 1;
  }
  if (collision(mouse, card2) && mouse.clicked) {
    chooseSaviour = 2;
  }
  if (collision(mouse, card3) && mouse.clicked) {
    chooseSaviour = 3;
  }
  if (collision(mouse, card4) && mouse.clicked) {
    chooseSaviour = 4;
  }

  if (chooseSaviour === 1) {
    cardStroke1 = "black";
    cardStroke2 = "gold";
    cardStroke3 = "gold";
  } else if (chooseSaviour === 2) {
    cardStroke2 = "black";
    cardStroke1 = "gold";
    cardStroke3 = "gold";
    cardStroke4 = "gold";
    // click.play();
  } else if (chooseSaviour === 3) {
    cardStroke2 = "gold";
    cardStroke1 = "gold";
    cardStroke3 = "black";
    cardStroke4 = "gold";
  } else if (chooseSaviour === 4) {
    cardStroke2 = "gold";
    cardStroke1 = "gold";
    cardStroke3 = "gold";
    cardStroke4 = "black";
  } else {
    cardStroke1 = "black";
    cardStroke2 = "black";
    cardStroke3 = "black";
    cardStroke4 = "black";
  }

  ctx.fillStyle = "white";
  ctx.strokeStyle = cardStroke1;
  ctx.fillRect(card1.x, card1.y, card1.width, card1.height);
  ctx.strokeRect(card1.x, card1.y, card1.width, card1.height);
  ctx.drawImage(saviourType[0], 0, 50, 92, 100, -10, 0, 92, 92);

  ctx.fillRect(card2.x, card2.y, card2.width, card2.height);
  ctx.strokeStyle = cardStroke2;
  ctx.strokeRect(card2.x, card2.y, card2.width, card2.height);
  ctx.drawImage(saviourType[1], 0, 50, 92, 100, 60, 0, 92, 92);

  ctx.fillRect(card3.x, card3.y, card3.width, card3.height);
  ctx.strokeStyle = cardStroke3;
  ctx.strokeRect(card3.x, card3.y, card3.width, card3.height);
  ctx.drawImage(saviourType[2], 0, 0, 52, 58, 175, 14, 62, 70);

  // ctx.fillStyle ="red"

  ctx.fillRect(card4.x, card4.y, card4.width, card4.height);
  ctx.fillStyle = "black";
  ctx.font = "17px Regular";
  ctx.fillText("$$ plant", card4.x, card4.y + 20, 70, 0);
  ctx.strokeStyle = cardStroke4;
  ctx.strokeRect(card4.x, card4.y, card4.width, card4.height);
  ctx.drawImage(saviourType[3], 0, 0, 173, 288, 220, 0, 120, 100);
}
// Saviours end's here

// utilities
function fitGameSaviourStatus() {
  ctx.fillStyle = "black";
  ctx.font = "30px serif";
  ctx.fillText(": " + noOfResources, canvas.width / 2 + 150, 50);
  ctx.fillStyle = "black";
  ctx.fillText("Score:" + score, canvas.width - cellSize * 2, 50);
  if (gameStatus) {
    ctx.fillStyle = "black";
    ctx.font = "23px Regular";
    ctx.drawImage(gameOver, canvas.width / 2 - 100, 200, 200, 200);
    ctx.fillText(score, canvas.width / 2 + 60, 290);
    ctx.fillText(best, canvas.width / 2 + 60, 320);
  }
  if (!getReady) {
    ctx.fillStyle = "black";
    ctx.font = "55px Regular";
    ctx.drawImage(ready, canvas.width / 2 - 100, 200, 180, 110);
    ctx.fillText("Get", canvas.width / 2 - 50, 200);
    ctx.font = "30px Regular";
    ctx.fillStyle = "white";
    ctx.fillText("Tap to play", canvas.width / 2 - 70, 350);
    getReady;
  }

  if (
    (!nextLevel && score <= winningScore) ||
    (score >= winningScore && enemy.length === 0)
  ) {
    ctx.fillStyle = "black";
    ctx.font = "30px Regular";
    ctx.drawImage(
      levelUp,
      canvas.width / 2 - 110,
      canvas.height / 2 - 100,
      250,
      250
    );
    ctx.fillText("Tap to play again:" + best, canvas.width / 2 - 100, 150);
  }

  if (nextLevel && score >= winningScore && enemy.length === 0) {
    // noOfResources = 0;
    // saviours.length = 1
    nextLevel = false;
    winningScore += winningScore - winningScore / 2;
  }
  // if(nextLevel) noOfResources = 200;
}

// var
let controlsBar = new ControlsBar(cellSize, canvas.width, ctx);

// Main function
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  controlsBar.draw();
  ctx.drawImage(ladder, -120, 100, 200, 400);
  fitGameCell();
  fitGameSaviour();
  fitShootDown();
  fitEnemy();
  wrongPlace.play();
  savioursCard();
  fitMoney();
  fitGameSaviourStatus();
  frame++;
  //   levelUp();
  if (!gameStatus) requestAnimationFrame(animate);
}

animate();
