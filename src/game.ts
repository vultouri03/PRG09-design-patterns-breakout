import { Paddle } from "./classes/paddle";
import { Block } from "./classes/block";
import { Red } from "./classes/behaviours/block/red";
import { Yellow } from "./classes/behaviours/block/yellow";
import { Ball } from "./classes/ball";
import { GameObject } from "./classes/gameObject";

/**
 * The game class is the main class of the game. It creates all the objects and
 * starts the game loop.
 */
class Game {
  // Fields

  private paddle: Paddle;
  private ball: Ball;
  private blocks: Block[] = [];

  constructor() {
    this.paddle = new Paddle();
    this.ball = new Ball(this.paddle.x, this.paddle.y - 100);
    this.renderBlocks();
    this.gameLoop();
  }

  private gameLoop() {
    this.paddle.update();
    this.ball.update();
    this.blocks.forEach((block) => block.update());
    this.checkCollision();
    requestAnimationFrame(() => this.gameLoop());
  }

  private checkCollision() {
    for (const block of this.blocks) {
      if (block.hasCollision(this.ball)) {
        this.ball.onCollision(block);
        block.onCollision(this.ball);
        const blockElements = document.getElementsByTagName("block-element");
        this.blocks = Array.from(blockElements).map((element) => element as unknown as Block);
        return;
      }
    }
    if (this.paddle.hasCollision(this.ball)) {
      this.paddle.onCollision(this.ball);
      this.ball.onCollision(this.paddle);
    }
  }

  private renderBlocks() {
    let rows: number = 7;
    let columns: number = 24;
    let brickWidth: number = 64;
    let brickHeight: number = 32;

    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        // plaats het grid met blokken in het midden van het scherm
        let offsetX = (window.innerWidth - columns * brickWidth) / 2;
        let x = column * brickWidth + offsetX;

        // en op de y-as 100px vanaf de top
        let y = row * brickHeight + 100;

        // Voeg op deze plek een nieuw blok toe aan het spel
        if (Math.random() < 0.3) {
          this.blocks.push(new Block(x, y, new Yellow()));
        } else {
          this.blocks.push(new Block(x, y, new Red()));
        }
      }
    }
  }
}
// This is the entry point of the game. It is called when the page is loaded.
window.addEventListener("load", () => new Game());
