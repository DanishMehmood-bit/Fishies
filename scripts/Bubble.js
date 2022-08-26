import { Utils } from "./Utils.js";
import * as Constants from "./contants.js";

export class Bubble {
  constructor(canvas) {
    this.canvasPos = canvas.getCanvas().getBoundingClientRect();
    this.canvasContext = canvas.getContext();
    this.x = Utils.generateRandom(this.canvasPos.left, this.canvasPos.right);
    // Adding radius to make sure they are spawn offscrean for smooth trasition
    this.y = Constants.CANVAS_HEIGHT + Constants.BUBBLE.radius;
    this.speed = Utils.generateRandom(1, 10);
    this.radius = Constants.BUBBLE.radius;
  }
  
  update = () => {
    this.y -= this.speed;
  }

  draw = () => {
    if (Constants.DEBUGGING_MODE.bubbleCollitionDetector) {
      this.canvasContext.fillStyle = "blue";
      this.canvasContext.beginPath();
      this.canvasContext.arc(this.x, this.y, Constants.BUBBLE.radius, 0, Math.PI * 2); 
      this.canvasContext.fill();
      this.canvasContext.closePath();
      this.canvasContext.fillRect(this.x, this.y, Constants.BUBBLE.radius, 10);
    }

    this.canvasContext.drawImage(Constants.BUBBLE.image, 0, 0, Constants.BUBBLE.width, Constants.BUBBLE.height, this.x - Constants.BUBBLE.width/2, this.y - Constants.BUBBLE.height/2, Constants.BUBBLE.width, Constants.BUBBLE.height);
  }

  isAtTop = () => {
    // subtracting 100 to stop abrupt disappear, we only want bubbles to disappear when they are offscreen
    return this.y <= this.canvasPos.top - 100;
  }

  clearBubble = () => {
    this.canvasContext.clearRect(this.x, this.y, Constants.BUBBLE.radius, 10);
  }
}