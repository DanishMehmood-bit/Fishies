import { Bubble } from "./Bubble.js";
import { Utils } from "./Utils.js";

export const bubbleHandler = (gameFrame, bubblesGenerated, canvas, player, score) => {
  const updateDrawBubble = (bubble) => {
    if (!bubble)
      return;
      
    bubble.update();
    bubble.draw();
  }

  if (gameFrame % 50 === 0)
    bubblesGenerated.push(new Bubble(canvas));

  bubblesGenerated.forEach((bubble, index) => {
    updateDrawBubble(bubble);

    const isPlayerColliding = Utils.isColliding(bubble, player);

    if (bubble.isAtTop() || isPlayerColliding) {
      bubblesGenerated.splice(index, 1);
      // Once we remove the bubble the bubbles after that move back one index so the bubble after the removed one
      // will not update or draw so we get the flash
      updateDrawBubble(bubblesGenerated[index]);
    }

    if (isPlayerColliding)
      score.increment();
  });
}