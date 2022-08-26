export class Utils {
  static generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static isColliding = (obj1, obj2) => {
    const dx = obj1.x - obj2.x;
    const dy = obj1.y - obj2.y;

    // Applying pythagoras theorem to calculate the distance between obj1 and 2
    const distance = Math.sqrt(dx*dx + dy*dy);

    return distance < (obj1.radius + obj2.radius);
  }

  static buildImage = (src) => {
    const image = new Image();
    image.src = src;
    return image;
  }
}