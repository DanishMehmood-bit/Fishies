import { Canvas } from "./Canvas.js";
import { Events } from "./Events.js";
import { Player } from "./Player.js";
import { GameLoop } from "./GameLoop.js";
import { Background } from "./Background.js";
import * as Constants from "./contants.js";
import { Score } from "./Score.js";

var gameFrame = 0;

const canvas = new Canvas();
const background = new Background(canvas);
const event = new Events(canvas, Constants.MOUSE);
const player = new Player(Constants.CANVAS_WIDTH, Constants.CANVAS_HEIGHT, Constants.PLAYER.radius, Constants.MOUSE, canvas);
const score = new Score(canvas);
const gameLoop = new GameLoop(player, canvas, gameFrame, score, background);

canvas.setup(Constants.CANVAS_WIDTH, Constants.CANVAS_HEIGHT);
event.initializeEvents();
gameLoop.initiate();