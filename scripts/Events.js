export class Events {
  constructor(canvas, mouse) {
    this.canvas = canvas;
    this.mouse = mouse;
    this.canvasPosition = this.canvas.getCanvas().getBoundingClientRect();
  }

  initializeEvents = () => {
    this.canvas.getCanvas().addEventListener("mousedown", (event) => {
      this.mouse.click = true;

      // To make the 0,0 on top left of rectangle
      this.mouse.x = event.x - this.canvasPosition.left;
      this.mouse.y = event.y - this.canvasPosition.top;
    });

    this.canvas.getCanvas().addEventListener("mouseup", () => {
      this.mouse.click = false;
    });

    // on resize we update the canvas position correctly for mouse to work
    window.addEventListener("resize", () => {
      this.canvas.updateDimentions(window.innerWidth, window.innerHeight);
      this.canvas.resetFont();
    });
  }
}