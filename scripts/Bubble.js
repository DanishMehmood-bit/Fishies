import { Utils } from "./Utils.js";
import * as Constants from "./contants.js";

export class Bubble {
  constructor(canvas) {
    this.canvasPos = canvas.getCanvas().getBoundingClientRect();
    this.canvasContext = canvas.getContext();
    this.x = Utils.generateRandom(this.canvasPos.left, this.canvasPos.right);
    // Adding radius to make sure they are spawn offscrean for smooth trasition
    this.y = Constants.CANVAS_HEIGHT + Constants.BUBBLE_RADIUS;
    this.speed = Utils.generateRandom(1, 10);
  }
  
  update = () => {
    this.y -= this.speed;
  }

  draw = () => {
    this.canvasContext.fillStyle = "blue";
    this.canvasContext.beginPath();
    this.canvasContext.arc(this.x, this.y, Constants.BUBBLE_RADIUS, 0, Math.PI * 2); 
    this.canvasContext.fill();
    this.canvasContext.closePath();
    this.canvasContext.fillRect(this.x, this.y, Constants.BUBBLE_RADIUS, 10);
  }

  isAtTop = () => {
    // subtracting 100 to stop abrupt disappear, we only want bubbles to disappear when they are offscreen
    return this.y <= this.canvasPos.top - 100;
  }

  clearBubble = () => {
    this.canvasContext.clearRect(this.x, this.y, Constants.BUBBLE_RADIUS, 10);
  }
}