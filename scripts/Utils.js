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

    // Github pages doesn't have a server to save the images so we need github link where images are store to show them
    if (window.location.hostname.includes("github.io"))
      src = `https://raw.githubusercontent.com/DanishMehmood-bit/Fishies/main/assets/${src.substring(3)}`; // substring starts at 3 to remove ../

    image.src = src;
    return image;
  }
}