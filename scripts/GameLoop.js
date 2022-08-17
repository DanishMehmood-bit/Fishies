export class GameLoop {
  constructor(player) {
    this.player = player;
  }

  initiate = () => {
    this.player.update();
    this.player.draw();

    // Method responsible for looping / animating
    requestAnimationFrame(this.initiate);
  }
}