import { Bubble } from "./Bubble.js";

export const bubbleHandler = (gameFrame, bubblesGenerated, canvas) => {
  if (gameFrame % 50 === 0)
    bubblesGenerated.push(new Bubble(canvas));

  bubblesGenerated.forEach(bubble => {
    bubble.update();
    bubble.draw();
  });
}