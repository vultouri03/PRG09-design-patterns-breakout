import { Block } from "../../block";
import { BlockBehaviour } from "./BlockBehaviour";

export class Purple implements BlockBehaviour {
  public sprite = "brick-component";

  onCollision(block: Block): void {
    block.remove();
  }
}
