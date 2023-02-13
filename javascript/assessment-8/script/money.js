import { coin } from "./script.js";

export default class Money {
  constructor(context, gameWidth, gameHeight, cellSize) {
    this.context = context;
    this.x = Math.random() * (gameWidth - cellSize);
    this.y = cellSize;
    this.width = 50;
    this.height = 50;
    this.amount = 25;
  }

  draw() {
    this.context.fillStyle = "yellow";
    this.context.drawImage(coin, this.x, this.y, this.width, this.height);
    // this.context.fillRect(this.x, this.y, );
  }
  update() {
    this.y++;
  }
}
