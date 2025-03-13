import { Paddle } from "../../paddle";
import { Normal } from "./normal";
import { PaddleUpgrade } from "./paddleUpgrade";

export class stop implements PaddleUpgrade {
  duration = 5000;
  nextUpgrade?: PaddleUpgrade = new Normal();

  upgradedSpeed(paddle: Paddle): number {
    setTimeout(() => {
      paddle._upgrade = new Normal();
    }, this.duration);
    return 0;
  }
}
