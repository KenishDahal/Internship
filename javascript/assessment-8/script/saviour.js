import { cellGap, frame, shootDown } from "./script.js";
import ShootDown from "./shootDown.js";

export default class Saviours {
  constructor(context, cellSize, x, y, saviourCard) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = cellSize - cellGap * 2;
    this.height = cellSize - cellGap * 2;
    this.health = 100;
    this.timer = 0;
    this.shootDirection = false;
    this.shootNow = false;
    this.saviourCard1 = saviourCard[0];
    this.saviourCard2 = saviourCard[1];
    this.frameX = 0;
    this.frameY = 0;
    this.spriteX = 128.6667;
    this.spriteY = 130;
    this.maxFrame = 14;
    this.minFrame = 0;
    // this.numberOfResources = 300;
  }

  draw() {
    this.context.fillStyle = "black";
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
    // this.context.fillRect(this.x,this.y,this.width,this.height)
    // this.context.fillStyle = "white";
    // this.context.font = "50px serif";
    // this.context.fillText(this.health,this.x,this.y+40);
  }

  update() {
    if (frame % 17 === 0) {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = this.minFrame;
      if (this.frameX === 16) this.shootNow = true;
    }
    
    // if (this.shootDirection) {
    //   this.minFrame = 7;
    //   this.maxFrame = 14;
    // } else {
    //   this.minFrame = 0;
    //   this.maxFrame = 6;
    // }

    if (this.shootDirection) {
      this.minFrame = 16;
      this.maxFrame = 19;
    } else {
      this.minFrame = 0;
      this.maxFrame = 9;
    }

    // this.timer++ ;
    // if(this.timer % 200 === 0){
    if (this.shootDirection && this.shootNow) {
      shootDown.push(new ShootDown(this.context, this.width, this.x, this.y));
      this.shootNow = false;
    }
  }
}
