export class Score {
  constructor(canvas) {
    this.context = canvas.getContext();
    this.score = 0;
  }

  increment = (updateBy) => {
    this.score += updateBy || 1;
  }
  
  display = () => {
    this.context.fillStyle = "black";
    this.context.fillText(`Score: ${this.score}`, 10, 50);
  }
}