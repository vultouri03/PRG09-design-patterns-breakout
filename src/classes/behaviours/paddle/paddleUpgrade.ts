import { Paddle } from "../../paddle";

export interface PaddleUpgrade {
  duration: number;
  nextUpgrade?: PaddleUpgrade;

  upgradedSpeed(paddle: Paddle): number;
}
