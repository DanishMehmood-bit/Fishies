import { PLAYER, IS_DEBUGGING_MODE } from "./contants.js";

export class Player {
  constructor(width, height, radius, mouse, canvas) {
    this.x = width;
    this.y = height/2;
    this.radius = radius;
    this.mouse = mouse;
    this.angle = 0;
    this.canvasContext = canvas.getContext();
  }

  update = () => {
    const dx = this.x - this.mouse.x;
    const dy = this.y - this.mouse.y;
  
    this.angle = Math.atan2(dy, dx);

    // dividing by 30 to control the speed, smaller the value, faster it is
    if (this.x != this.mouse.x)
      this.x -= dx/30;

    if (this.y != this.mouse.y)
      this.y -= dy/30;
  }

  draw = () => {
    // if we click we need a line
    if (this.mouse.click) {
      this.canvasContext.linewidth = 0.2;
      this.canvasContext.beginPath();
      this.canvasContext.moveTo(this.x, this.y);
      this.canvasContext.lineTo(this.mouse.x, this.mouse.y);
      this.canvasContext.stroke();
    }

    // drawing circle (useful for debugging)
    if (IS_DEBUGGING_MODE) {
      this.canvasContext.fillStyle = "red";
      this.canvasContext.beginPath();
      this.canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      this.canvasContext.fill();
      this.canvasContext.closePath();
      this.canvasContext.fillRect(this.x, this.y, this.radius, 10);
    }

    // Rotating the player towards mouse
    this.canvasContext.save();
    this.canvasContext.translate(this.x, this.y);
    this.canvasContext.rotate(this.angle);

    // Normal Image for left
    (this.x >= this.mouse.x) ?
      this.canvasContext.drawImage(PLAYER.image, 0, 0, PLAYER.width, PLAYER.height, -PLAYER.width, -PLAYER.height, PLAYER.width * 2, PLAYER.height * 2)
    :
    // Flipped image for right
    this.canvasContext.drawImage(PLAYER.image, 0, 0, PLAYER.width, PLAYER.height, -PLAYER.width, -PLAYER.height, PLAYER.width * 2, PLAYER.height * 2)
  
    this.canvasContext.restore();
  }
}