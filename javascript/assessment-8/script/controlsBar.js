export default class ControlsBar {
  constructor(cellSize, canvasWidth, context) {
    this.width = canvasWidth;
    this.height = cellSize;
    this.context = context;
  }

  draw() {
    this.context.fillStyle = "#08C28D";
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.font = "100px Regular";
  }
}
