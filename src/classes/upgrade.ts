import { PaddleUpgrade } from "./behaviours/paddle/paddleUpgrade";
import { GameObject } from "./gameObject";

export class Upgrade extends GameObject {
  private upgrade: PaddleUpgrade;
  private speed: number = 6;

  public get _upgrade() {
    return this.upgrade;
  }

  constructor(x: number, y: number, id: string, paddleUpgrade: PaddleUpgrade) {
    super();
    let game = document.getElementsByTagName("game")[0];
    game.appendChild(this);
    this.x = x;
    this.y = y;
    this.id = id;
    this.upgrade = paddleUpgrade;
    console.log("Upgrade created!");
  }

  public update(): void {
    this.y += this.speed;
    super.update();
  }
  public onCollision(gameObject: GameObject): void {
    super.onCollision(gameObject);
    this.remove();
  }
}
window.customElements.define("upgrade-element", Upgrade as any);
