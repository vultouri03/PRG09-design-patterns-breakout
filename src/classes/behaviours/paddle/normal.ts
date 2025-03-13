import { Paddle } from "../../paddle";
import { PaddleUpgrade } from "./paddleUpgrade";

export class Normal implements PaddleUpgrade {
  duration: number = 0;
  nextUpgrade?: PaddleUpgrade = this;

  upgradedSpeed(paddle: Paddle): number {
    return paddle._speed;
  }
}
