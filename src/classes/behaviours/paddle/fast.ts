import { Paddle } from "../../paddle";
import { Normal } from "./normal";
import { PaddleUpgrade } from "./paddleUpgrade";

export class Fast implements PaddleUpgrade {
  public duration = 5000;
  public nextUpgrade?: PaddleUpgrade = new Normal();
  upgradedSpeed(paddle: Paddle): number {
    setTimeout(() => {
      paddle._upgrade = new Normal();
    }, this.duration);
    return paddle._speed * 2;
  }
}
