export default class Money {
  constructor(context, gameWidth, gameHeight, cellSize) {
    this.context = context;
    this.x = Math.random() * (gameWidth - cellSize);
    this.y = cellSize;
    // this.y = (Math.floor(Math.random()* 5) + 1);
    this.width = 30;
    this.height = 30;
    this.amount = 25;
    // this.speed = Math.random()*0.2 + 0.6;
    // this.movement = this.speed;
    // this.health = 100

    // this.mouse = mouse;
  }

  draw() {
    this.context.fillStyle = "yellow";
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    this.y++;
  }
}
