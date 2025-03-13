import { Block } from "../../block";
import { BlockBehaviour } from "./BlockBehaviour";

export class Purple implements BlockBehaviour {
  public sprite = "brick-component";

  onCollison(block: Block): void {
    block.remove();
  }
}
