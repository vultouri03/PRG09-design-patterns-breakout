import { Block } from "../../block";
import { Upgrade } from "../../upgrade";
import { Fast } from "../paddle/fast";
import { Inverse } from "../paddle/inverse";
import { PaddleUpgrade } from "../paddle/paddleUpgrade";
import { stop } from "../paddle/stop";
import { BlockBehaviour } from "./BlockBehaviour";

export class Purple implements BlockBehaviour {
  public sprite = "brick-component";

  onCollision(block: Block): void {
    const upgradeInfo: {
      id: "hold-upgrade" | "faster-upgrade" | "inverse-upgrade";
      upgrade: PaddleUpgrade;
    } =
      Math.random() < 0.33
        ? { id: "hold-upgrade", upgrade: new stop() }
        : Math.random() < 0.66
        ? { id: "faster-upgrade", upgrade: new Fast() }
        : { id: "inverse-upgrade", upgrade: new Inverse() };
    console.log(block.x, block.y);
    new Upgrade(block.x, block.y, upgradeInfo.id, upgradeInfo.upgrade);

    block.remove();
  }
}
