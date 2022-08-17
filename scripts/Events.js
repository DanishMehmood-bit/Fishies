export class Events {
  constructor(canvas, mouse) {
    this.canvas = canvas.getCanvas();
    this.mouse = mouse;
    this.canvasPosition = this.canvas.getBoundingClientRect();
  }

  initializeEvents = () => {
    this.canvas.addEventListener("mousedown", (event) => {
      this.mouse.click = true;

      // To make the 0,0 on top left of rectangle
      this.mouse.x = event.x - this.canvasPosition.left;
      this.mouse.y = event.y - this.canvasPosition.top;
    });

    this.canvas.addEventListener("mouseup", (event) => {
      this.mouse.click = false;
    });
  }
}