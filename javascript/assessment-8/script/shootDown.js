// import { shot } from "./script";

export default class ShootDown {
  constructor(context, cellSize, x, y) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = cellSize;
    this.height = cellSize;
    this.health = 100;
    // this.numberOfResources = 300;
  }

  draw() {
    this.context.fillStyle = "black";
    this.context.beginPath();
    this.context.arc(this.x + 60, this.y + 45, 7, 0, Math.PI * 2);
    this.context.fill();
   
  }

  update() {
    this.x += 4;
  }
}
