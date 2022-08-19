import { Bubble } from "./Bubble.js";

export const bubbleHandler = (gameFrame, bubblesGenerated, canvas) => {
  let bubblesToRemove = [];

  if (gameFrame % 50 === 0)
    bubblesGenerated.push(new Bubble(canvas));

  bubblesGenerated.forEach((bubble, index) => {
    bubble.update();
    bubble.draw();

    if (bubble.isAtTop())
      bubblesToRemove.push(index);
  });

  // To remove the bubbles flashing, we need to remove them separately from the updating loop 
  bubblesToRemove.forEach(toRemoveIndex => {
    bubblesGenerated.splice(toRemoveIndex, 1);
  });
}