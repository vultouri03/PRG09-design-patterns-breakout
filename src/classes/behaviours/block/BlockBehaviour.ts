import { Block } from "../../block";

export interface BlockBehaviour {
  sprite: string;
  nextBehaviour?: BlockBehaviour;

  onCollision(block: Block): void;
}
