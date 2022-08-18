import { bubbleHandler } from "./bubbleHandler.js";
import * as Constants from "./contants.js";

export class GameLoop {
  constructor(player, canvas, gameFrame) {
    this.player = player;
    this.canvas = canvas;
    this.gameFrame = gameFrame;
    this.bubblesGenerated = [];
  }

  initiate = () => {
    // To clear the previously drawn rect
    this.canvas.getContext().clearRect(0, 0, Constants.CANVAS_WIDTH, Constants.CANVAS_HEIGHT);

    this.player.update();
    this.player.draw();

    // Generate Bubbles
    bubbleHandler(this.gameFrame, this.bubblesGenerated, this.canvas);

    // Updating the gameFrame
    this.gameFrame++;

    // Method responsible for looping / animating
    requestAnimationFrame(this.initiate);
  }
}