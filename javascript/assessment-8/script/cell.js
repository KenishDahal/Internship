import {collision} from "./collision.js";
import {mouse} from "./script.js";

export default class Cell{
    constructor(context,gameWidth,gameHeight,cellSize,x,y) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
        this.context = context;
        this.mouse = mouse;
      }

      draw(){
        if(collision(this,mouse)){
          this.context.strokeStyle = "white";
          this.context.strokeRect(this.x,this.y,this.width,this.height)
        }
      }
}