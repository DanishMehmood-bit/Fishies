import { Utils } from "./Utils.js";

// Debugging
export const DEBUGGING_MODE = {
  fishCollitionDetector: false,
  bubbleCollitionDetector: false,
  enemyCollitionDetector: false,
}

// Canvas
export const CANVAS_WIDTH = window.innerWidth;
export const CANVAS_HEIGHT = window.innerHeight;

// Player
export const PLAYER = {
  leftImage: Utils.buildImage("../assets/fish.png"),
  rightImage: Utils.buildImage("../assets/fish-right.png"),
  width: 32,
  height: 32,
  radius: 32
}

// Enemy
export const ENEMY = {
  leftImage: Utils.buildImage("../assets/Shark.png"),
  rightImage: Utils.buildImage("../assets/Shark-right.png"),
  width: 64,
  height: 64,
  radius: 32
}

// Bubbles
export const BUBBLE = {
  image: Utils.buildImage("../assets/bubble.png"),
  width: 64,
  height: 64,
  radius: 32
}

// Background
export const BACKGROUND = {
  sea: {
    image: Utils.buildImage("../assets/sea_background.png"),
    width: 1920,
    height: 1080
  },
  farground: {
    image: Utils.buildImage("../assets/farground.png"),
    width: 1920,
    height: 1058
  },
  midBackground: {
    image: Utils.buildImage("../assets/mid_background.png"),
    width: 1920,
    height: 877
  },
  foreground: {
    image: Utils.buildImage("../assets/foreground.png"),
    width: 1920,
    height: 1015
  }
}

// Mouse
export const MOUSE = {
  x: CANVAS_WIDTH/2,
  y: CANVAS_HEIGHT/2,
  click: false
}