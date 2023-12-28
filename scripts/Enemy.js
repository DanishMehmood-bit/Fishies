import { Utils } from "./Utils.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./contants.js";

export class Enemy {
  constructor(radius, canvas) {
    // If random generation is less than 0.5 then enemy will be generated from left otherwise right
    this.generationPoint = Math.random() > 0.5 ? "right" : "left";
    this.x = this.generationPoint === "right" ? CANVAS_WIDTH : 0;
    this.y = Utils.generateRandom(0, CANVAS_HEIGHT);
    this.radius = radius;
    this.angle = 0;
    this.speed = Utils.generateRandom(5, 10);
    this.canvasContext = canvas.getContext();
  }

  update = () => {
    this.generationPoint === "left" ? this.x += this.speed : this.x -= this.speed;
  }

  draw = () => {
    // drawing circle (useful for debugging)
    this.canvasContext.fillStyle = "red";
    this.canvasContext.beginPath();
    this.canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.canvasContext.fill();
    this.canvasContext.closePath();
    this.canvasContext.fillRect(this.x, this.y, this.radius, 10);

    this.canvasContext.restore();
  }

  isOutOfBounds = () => (this.generationPoint === "left" && this.x > CANVAS_WIDTH) || (this.generationPoint === "right" && this.x < 0) ? true : false;
}