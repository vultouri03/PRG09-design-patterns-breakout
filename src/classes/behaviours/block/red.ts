import { Block } from "../../block";
import { BlockBehaviour } from "./BlockBehaviour";

export class Red implements BlockBehaviour {
  public sprite = "red-brick";

  onCollision(block: Block): void {
    block.remove();
  }
}
