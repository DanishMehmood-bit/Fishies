import { Enemy } from "./Enemy.js";
import { GameLoop } from "./GameLoop.js";
import { Utils } from "./Utils.js";
import * as Constants from "./contants.js";

export const enemySpawner = (enemiesSpawned, canvas, player) => {
  const updateEnemy = (enemy) => {
    if (!enemy) return;

    enemy.update();
    enemy.draw();
  }
  
  if (enemiesSpawned.length === 0) {
    enemiesSpawned.push(new Enemy(Constants.ENEMY.radius, canvas));
  }

  enemiesSpawned.forEach((enemy, index) => {
    updateEnemy(enemy);

    if (Utils.isColliding(enemy, player)) GameLoop.gameOver = true;

    if (enemy.isOutOfBounds()) {
      enemiesSpawned.splice(index, 1);
      // Once we remove the enemy the enemies after that move back one index so the enemy after the removed one
      // will not update or draw so we get the flash
      updateEnemy(enemiesSpawned[index]);
    }
  })
}