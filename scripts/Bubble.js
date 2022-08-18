import { Utils } from "./Utils.js";
import * as Constants from "./contants.js";

export class Bubble {
  constructor(canvas) {
    this.canvasPos = canvas.getCanvas().getBoundingClientRect();
    this.canvasContext = canvas.getContext();
    this.x = Utils.generateRandom(this.canvasPos.left, this.canvasPos.right);
    this.y = Constants.CANVAS_HEIGHT;
  }
  
  update = () => {
    if (this.y !== this.canvasPos.top)
      this.y--;
  }

  draw = () => {
    this.canvasContext.fillStyle = "blue";
    this.canvasContext.beginPath();
    this.canvasContext.arc(this.x, this.y, Constants.BUBBLE_RADIUS, 0, Math.PI * 2); 
    this.canvasContext.fill();
    this.canvasContext.closePath();
    this.canvasContext.fillRect(this.x, this.y, this.radius, 10);
  }
}