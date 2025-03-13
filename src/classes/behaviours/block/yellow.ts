import { Block } from "../../block";
import { BlockBehaviour } from "./BlockBehaviour";
import { Purple } from "./purple";

export class Yellow implements BlockBehaviour {
  public sprite = "yellow-brick";
  public nextBehaviour = new Purple();

  onCollision(block: Block): void {
    block.changeBehaviour(this.nextBehaviour);
  }
}
