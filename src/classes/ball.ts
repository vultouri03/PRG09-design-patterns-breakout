import { GameObject } from "./gameObject";
import { Paddle } from "./paddle";

export class Ball extends GameObject {
  private _x_speed: number = 3;
  private _y_speed: number = 3;

  constructor(x: number, y: number) {
    super();
    let game = document.getElementsByTagName("game")[0];
    game.appendChild(this);
    this.x = x;
    this.y = y;
    console.log("Ball created!");
  }

  public update(): void {
    this.x += this._x_speed;
    this.y -= this._y_speed;
    super.update();
  }

  private onCollision(): void {
    this._y_speed *= -1;
    this._x_speed = Math.random() > 0.5 ? 3 : -3;
  }
}
window.customElements.define("ball-component", Ball as any);
