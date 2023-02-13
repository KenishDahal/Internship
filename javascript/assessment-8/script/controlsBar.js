import { coin, gate } from "./script.js";

export default class ControlsBar {
  constructor(cellSize, canvasWidth, context) {
    this.width = canvasWidth;
    this.height = cellSize;
    this.context = context;
  }

  draw() {
    this.context.drawImage(gate, 0, 0, this.width, 80);
    this.context.drawImage(gate, 0, 420, this.width, 80);
    this.context.drawImage(coin,490, 8, 70, 70);
  }
}
