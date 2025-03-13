import { Normal } from "./behaviours/paddle/normal";
import { PaddleUpgrade } from "./behaviours/paddle/paddleUpgrade";
import { GameObject } from "./gameObject";
import { Upgrade } from "./upgrade";

/**
 * Paddle class
 * automatically added to the game tag in index.html
 */
export class Paddle extends GameObject {
  // Fields

  private moveLeft: boolean = false;
  private moveRight: boolean = false;

  private speed: number = 7;
  private upgrade: PaddleUpgrade;

  public get _speed(): number {
    return this.speed;
  }

  public set _upgrade(upgrade: PaddleUpgrade) {
    this.upgrade = upgrade;
  }

  constructor() {
    super();
    console.log("Paddle created!");

    let game = document.getElementsByTagName("game")[0];
    game.appendChild(this);

    // center of the screen
    this.x = window.innerWidth / 2 - this.clientWidth / 2;
    // 5% from bottom of the screen
    this.y = window.innerHeight * 0.95;
    this.upgrade = new Normal();

    window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
    window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
  }

  private onKeyDown(e: KeyboardEvent): void {
    if (e.key == "ArrowLeft") this.moveLeft = true;
    else if (e.key == "ArrowRight") this.moveRight = true;
  }

  private onKeyUp(e: KeyboardEvent): void {
    if (e.key == "ArrowLeft") this.moveLeft = false;
    else if (e.key == "ArrowRight") this.moveRight = false;
  }

  public update() {
    // calculate new x position
    let newX: number = 0;
    if (this.moveLeft) newX = this.x - this.upgrade.upgradedSpeed(this);
    if (this.moveRight) newX = this.x + this.upgrade.upgradedSpeed(this);
    // check if new x position is within the screen and move it
    if (newX > 0 && newX + this.clientWidth < window.innerWidth) this.x = newX;
    super.update();
  }

  public onCollision(upgrade: Upgrade): void {
    super.onCollision(upgrade);
    this.upgrade = upgrade._upgrade;
    setTimeout(() => {
      this.upgrade = this.upgrade.nextUpgrade;
    }, 5000);
  }
}

// This object is style in style.css under the paddle-component tag
window.customElements.define("paddle-component", Paddle as any);
