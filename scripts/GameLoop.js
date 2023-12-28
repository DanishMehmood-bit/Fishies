import { enemySpawner } from "./EnemySpawner.js";
import { bubbleHandler } from "./BubbleHandler.js";
import * as Constants from "./contants.js";

export class GameLoop {
  constructor(player, canvas, gameFrame, score) {
    this.player = player;
    this.canvas = canvas;
    this.gameFrame = gameFrame;
    this.bubblesGenerated = [];
    this.enemiesSpawned = [];
    this.score = score;
  }

  initiate = () => {
    // To clear the previously drawn rect
    this.canvas.getContext().clearRect(0, 0, Constants.CANVAS_WIDTH, Constants.CANVAS_HEIGHT);

    this.player.update();
    this.player.draw();

    // Generate Enemies
    enemySpawner(this.enemiesSpawned, this.canvas);

    // Generate Bubbles
    bubbleHandler(this.gameFrame, this.bubblesGenerated, this.canvas, this.player, this.score);

    // Display score
    this.score.display();

    // Updating the gameFrame
    this.gameFrame++;

    // Method responsible for looping / animating
    requestAnimationFrame(this.initiate);
  }
}