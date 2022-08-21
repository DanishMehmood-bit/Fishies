import { Bubble } from "./Bubble.js";
import { Utils } from "./Utils.js";

export const bubbleHandler = (gameFrame, bubblesGenerated, canvas, player, score) => {
  let bubblesToRemove = [];

  if (gameFrame % 50 === 0)
    bubblesGenerated.push(new Bubble(canvas));

  bubblesGenerated.forEach((bubble, index) => {
    bubble.update();
    bubble.draw();

    const isPlayerColliding = Utils.isColliding(bubble, player);

    if (bubble.isAtTop() || isPlayerColliding)
      bubblesToRemove.push(index);

    if (isPlayerColliding)
      score.increment();
  });

  // To remove the bubbles flashing, we need to remove them separately from the updating loop 
  bubblesToRemove.forEach(toRemoveIndex => {
    bubblesGenerated.splice(toRemoveIndex, 1);
  });
}