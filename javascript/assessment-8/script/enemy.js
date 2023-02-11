// import {collision} from "./collision.js";

import { collision } from "./collision.js";
import { cellGap, enemy, frame } from "./script.js";

// import {mouse} from "./script.js";
export default class Enemy {
  constructor(
    context,
    gameWidth,
    gameHeight,
    cellSize,
    verticalPosition,
    enemyImg
  ) {
    this.context = context;
    this.x = gameWidth;
    this.y = verticalPosition;
    this.width = cellSize;
    this.height = cellSize;
    this.speed = Math.random() * 0.2 + 0.6;
    this.movement = this.speed;
    this.health = 100;
    this.enemyImg = enemyImg[Math.floor(Math.random() * enemyImg.length)];
    this.frameX = 31;
    this.frameY = 0;
    this.spriteX = 96.255;
    this.spriteY = 100;
    this.maxFrame = 27;
    this.minFrame = 0;
    // this.mouse = mouse;
  }

  draw() {
    this.context.fillStyle = "red";
    // this.context.fillRect(this.x,this.y,this.width,this.height)
    this.context.drawImage(
      this.enemyImg,
      this.frameX * this.spriteX,
      20,
      this.spriteX,
      this.spriteY,
      this.x,
      this.y,
      this.width + 20,
      this.height + 20
    );
    // if(collision(this,mouse)){
    //   this.context.strokeStyle = "blue";
    //   this.context.strokeRect(this.x,this.y,this.width,this.height)
    // }
  }
  update() {
    this.x -= this.movement;
    if (frame % 10 === 0) {
      if (this.frameX > this.minFrame) this.frameX--;
      else this.frameX = this.maxFrame;
    }
    // if(collision(enemy, ))
  }
}
