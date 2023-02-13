import { collision } from "./collision.js";
import Money from "./money.js";
import {
  cellGap,
  chooseSaviour,
  coin,
  frame,
  money,
  mouse,
  noOfResources,
  saviours,
  shootDown,
  shot,
} from "./script.js";
import ShootDown from "./shootDown.js";

export default class Saviours {
  constructor(context, cellSize, x, y, saviourCard, chooseSaviour) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = cellSize - cellGap * 4;
    this.height = cellSize - cellGap * 4;
    this.health = 100;
    this.timer = 0;
    this.shootDirection = false;
    this.shootNow = false;
    this.saviourCard1 = saviourCard[0];
    this.saviourCard2 = saviourCard[1];
    this.saviourCard3 = saviourCard[2];
    this.saviourCard4 = saviourCard[3];
    this.frameX = 0;
    this.frameY = 0;
    this.spriteX = 128.6667;
    this.spriteY = 130;
    this.maxFrame = 13;
    this.minFrame = 0;
    this.sun = false;
    this.chooseSaviour = chooseSaviour;
    if (this.chooseSaviour === 3) {
      this.health = 800;
    }
    // this.numberOfResources = 300;
  }

  draw() {
    this.context.fillStyle = "black";
    if (this.chooseSaviour === 1) {
      this.context.drawImage(
        this.saviourCard1,
        this.frameX * this.spriteX,
        40,
        this.spriteX,
        this.spriteY,
        this.x,
        this.y,
        this.width + 40,
        this.height + 40
      );
    } else if (this.chooseSaviour === 2) {
      this.context.drawImage(
        this.saviourCard2,
        this.frameX * this.spriteX,
        40,
        this.spriteX,
        this.spriteY,
        this.x,
        this.y,
        this.width + 40,
        this.height + 40
      );
    } else if (this.chooseSaviour === 3) {
      // this.health=400;
      this.context.drawImage(
        this.saviourCard3,
        this.frameX * 52,
        0,
        52,
        50,
        this.x,
        this.y,
        this.width,
        this.height
      );
    } else if (this.chooseSaviour === 4) {
      // this.health=400;
      this.context.drawImage(
        this.saviourCard4,
        this.frameX * 164,
        0,
        173,
        288,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }

  update(noOfResources) {
    this.timer++;
    if (frame % 17 === 0) {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = this.minFrame;
      if (this.frameX === 12 && this.chooseSaviour === 1) this.shootNow = true;
      if (this.frameX === 17 && this.chooseSaviour === 2) this.shootNow = true;
    }
    if (this.chooseSaviour === 1) {
      if (this.shootDirection) {
        this.minFrame = 7;
        this.maxFrame = 14;
      } else {
        this.minFrame = 0;
        this.maxFrame = 6;
      }
    
    } else if (this.chooseSaviour === 2) {
      if (this.shootDirection) {
        this.minFrame = 12;
        this.maxFrame = 19;
        
      } else {
        this.minFrame = 0;
        this.maxFrame = 8;
      }
     
    } else if (this.chooseSaviour === 3) {
      if (this.health < 20) {
        this.minFrame = 3;
        this.maxFrame = 4;
      } else {
        this.minFrame = 0;
        this.maxFrame = 0;
      }
    } else if (this.chooseSaviour === 4) {
      this.minFrame = 0;
      this.maxFrame = 4;

      if (this.timer > 300 && !this.sun) {
        this.context.fillStyle = "yellow";
        // this.context.fillRect(this.x + 20, this.y + 10, 29, 29);
        this.context.drawImage(coin,this.x + 16, this.y-10, 50, 50);
      }
    }
    // this.timer++ ;
    // if(this.timer % 200 === 0){
    if (this.shootDirection && this.shootNow) {
      shootDown.push(new ShootDown(this.context, this.width, this.x, this.y));
      this.shootNow = false;
      shot.play();
    }
  }
}
