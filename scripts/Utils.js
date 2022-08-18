export class Utils {
  static generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}