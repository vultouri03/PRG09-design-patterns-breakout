import { Block } from "../../block";

export interface BlockBehaviour {
  sprite: string;
  nextBehaviour?: BlockBehaviour;

  onCollison(block: Block): void;
}
