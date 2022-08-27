export class Canvas {
  
  constructor() {
    this.canvas = document.querySelector("#main");
    this.context = this.canvas.getContext("2d");
    this.font = "50px Georgia";
  }

  setup = (width, height) => {
    // Dimentions
    this.canvas.width = width;
    this.canvas.height = height;

    // Font
    this.context.font = this.font;
  }

  updateDimentions = (width, height) => {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  resetFont = () => {
    this.context.font = this.font;
  }

  getCanvas = () => {
    return this.canvas;
  }

  getContext = () => {
    return this.context;
  }
}