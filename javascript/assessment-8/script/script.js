import ControlsBar from "./controlsBar.js";
import Cell from "./cell.js";
import { collision } from "./collision.js";
import Saviours from "./saviour.js";
import Enemy from "./enemy.js";
import Money from "./money.js";
import savioursCard from "./saviourCard.js";
// import ShootDown from "./shootDown";

let canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 480;


// Global variables
let gameStatus = false;
let cellSize = 80;
let gameCell = [];
let saviours = [];
export let cellGap = 0;
let noOfResources = 800;
export let enemy = [];
export let frame = 0;
let enemyPosition = [];
let enemyInterval = 600;
let money = [];
let score = 0;
let winningScore = 2;
let nextLevel = true;
export let shootDown = [];

let enemyType = [];
// Images
const enemyMan = new Image();
enemyMan.src = "assets/green-zombie.png";
enemyType.push(enemyMan);

const enemyMan2 = new Image();
enemyMan2.src = "assets/yellow-zombie.png";
enemyType.push(enemyMan2);


// Mouse
export let mouse = {
  x: undefined,
  y: undefined,
  width: 1,
  height: 1,
};

let canvasPosition = canvas.getBoundingClientRect();

canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x - canvasPosition.left;
  mouse.y = e.y - canvasPosition.top;
});

window.addEventListener("resize", (e) => {
  canvasPosition = canvas.getBoundingClientRect()
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
      noOfResources += 100;
      const showIndex = enemyPosition.indexOf(enemy[i].y);
      enemyPosition.splice(showIndex, 1);
      enemy.splice(i, 1);
    }
  }
  if (frame % enemyInterval === 0 && score < winningScore && nextLevel) {
    let verticalPosition = Math.floor(Math.random() * 4 + 1) * cellSize;
    enemy.push(
      new Enemy(ctx, canvas.width, canvas.height, cellSize, verticalPosition,enemyType)
    );
    enemyPosition.push(verticalPosition);
    if (enemyInterval > 120) {
      enemyInterval -= 50;
    }

    console.log(verticalPosition);
  }
  // if (frame <= 2100 && frame >= 1200) {
  //   // enemyInterval =200;
  //   ctx.fillStyle = "black";
  //   ctx.font = "50px serif";
  //   ctx.fillText("Level-2:", canvas.width / 2, canvas.height / 2);
  //   enemyInterval = 250;
  // }
  // if (frame <= 4000 && frame >= 2200) {
  //   // enemyInterval =200;
  //   ctx.fillStyle = "black";
  //   ctx.font = "50px serif";
  //   ctx.fillText("Level-3", canvas.width / 2, canvas.height / 2);
  //   enemyInterval = 190;
  //   //   context.font = "100px Regular";
  // }
}
// Enemy end's here

// Money start's here
function fitMoney() {
  if (frame % 300 === 0 && score < winningScore) {
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
let saviourType = []

let saviourCard1 = new Image();
saviourCard1.src = "assets/first-saviour-spritesheet.png";
saviourType.push(saviourCard1)
let saviourCard2 = new Image();
saviourCard2.src = "assets/gun-saviour.png";
saviourType.push(saviourCard2)


 
canvas.addEventListener("click", function () {
  const cellPositionX = mouse.x - (mouse.x % cellSize) +cellGap;
  const cellPositionY = mouse.y - (mouse.y % cellSize)+cellGap;

  if (cellPositionY < cellSize) return;

  for (let i = 0; i < saviours.length; i++) {
    if (saviours[i].x === cellPositionX && saviours[i].y === cellPositionY)
      return;
  }
  let saviourCost = 100;
  // if (collision(money,))
  for (let i = 0; i < money.length; i++) {
    if (collision(mouse, money[i])) return;
  }
  if (noOfResources >= saviourCost) {
    saviours.push(new Saviours(ctx, cellSize, cellPositionX, cellPositionY,saviourType));
    noOfResources -= saviourCost;
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
  if(!nextLevel){
     nextLevel =true;
     score = 0;
     noOfResources =600;
     saviours.length = 0;
     
  }  // for(let i=0; i<saviours.length; i++){
  //   if(nextLevel && collision(saviours[i],mouse)){
  //     winningScore = 14;
  //     noOfResources -= 100;
  //     nextLevel = false;
  //   }
  // }
});

function fitGameSaviour() {
  for (let i = 0; i < saviours.length; i++) {
    saviours[i].draw();
    saviours[i].update();
    // Check id enemy vertical position is same as saviours's position
    if (enemyPosition.indexOf(saviours[i].y) !== -1) {
      saviours[i].shootDirection = true;
    } else {
      saviours[i].shootDirection = false;
    }
    for (let j = 0; j < enemy.length; j++) {
      if (saviours[i] && collision(enemy[j],saviours[i])) {
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
// Saviours end's here


// utilities
function fitGameSaviourStatus() {
  ctx.fillStyle = "white";
  ctx.font = "50px serif";
  ctx.fillText("Money:" + noOfResources, 200, 50);
  ctx.fillStyle = "white";
  ctx.font = "50px serif";
  ctx.fillText("Kills:" + score, 590, 50);
  if (gameStatus) {
    ctx.fillStyle = "black";
    ctx.font = "50px Regular";
    ctx.fillText("Game Over:", 300, 260);
  }

  if(!nextLevel &&score >= winningScore && enemy.length === 0){
    ctx.fillStyle = "black";
    ctx.font = "300px Regular";
    ctx.fillText("Won:"+score, 300, 260);
  }

  if (nextLevel && score >= winningScore && enemy.length === 0) {
    // noOfResources = 0;
    // saviours.length = 1
    nextLevel =false;
    winningScore += winningScore-winningScore/2;
  }
  // if(nextLevel) noOfResources = 200;

}

// var
let controlsBar = new ControlsBar(cellSize, canvas.width, ctx);

// Main function
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  controlsBar.draw();
  fitGameCell();
  fitGameSaviour();
  fitShootDown();
  fitEnemy();
  savioursCard(ctx,saviourType);
  fitMoney();
  fitGameSaviourStatus();
  frame++;
  //   levelUp();
  if (!gameStatus ) requestAnimationFrame(animate);
}

animate();
