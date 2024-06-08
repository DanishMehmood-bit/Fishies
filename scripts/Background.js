import { BACKGROUND, CANVAS_WIDTH, CANVAS_HEIGHT } from "./contants.js";

export class Background {
  constructor(canvas) {
    this.canvasContext = canvas.getContext();
  }

  setup = () => {
    // Background
    this.canvasContext.drawImage(BACKGROUND.sea.image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // Farground
    this.canvasContext.drawImage(BACKGROUND.farground.image, 0, CANVAS_HEIGHT - BACKGROUND.farground.height, CANVAS_WIDTH, BACKGROUND.farground.height);
    // Mid background
    this.canvasContext.drawImage(BACKGROUND.midBackground.image, 0, CANVAS_HEIGHT - BACKGROUND.midBackground.height, CANVAS_WIDTH, BACKGROUND.midBackground.height);
    // Foreground
    this.canvasContext.drawImage(BACKGROUND.foreground.image, 0, CANVAS_HEIGHT - BACKGROUND.foreground.height, CANVAS_WIDTH, BACKGROUND.foreground.height);
  }
}