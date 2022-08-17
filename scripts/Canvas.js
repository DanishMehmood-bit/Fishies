export class Canvas {
  
  constructor() {
    this.canvas = document.querySelector("#main");
    this.context = this.canvas.getContext("2d");
  }

  setup = (width, height) => {
    // Dimentions
    this.canvas.width = width;
    this.canvas.height = height;

    // Font
    this.context.font = "50px Georgia";
  }

  getCanvas = () => {
    return this.canvas;
  }

  getContext = () => {
    return this.context;
  }
}