import { Utils } from "./Utils.js";

// Debugging
export const DEBUGGING_MODE = {
  fishCollitionDetector: false,
  bubbleCollitionDetector: false
}

// Canvas
export const CANVAS_WIDTH = window.innerWidth;
export const CANVAS_HEIGHT = window.innerHeight;

// Player
export const PLAYER = {
  image: Utils.buildImage("../assets/fish.png"),
  width: 32,
  height: 32,
  radius: 32
}

// Bubbles
export const BUBBLE = {
  image: Utils.buildImage("../assets/bubble.png"),
  width: 64,
  height: 64,
  radius: 32
}

// Mouse
export const MOUSE = {
  x: CANVAS_WIDTH/2,
  y: CANVAS_HEIGHT/2,
  click: false
}