import { Paddle } from "../../paddle";
import { Normal } from "./normal";
import { PaddleUpgrade } from "./paddleUpgrade";

export class Inverse implements PaddleUpgrade {
  duration: number = 2000;
  nextUpgrade?: PaddleUpgrade = new Normal();

  upgradedSpeed(paddle: Paddle): number {
    return -paddle._speed;
  }
}
