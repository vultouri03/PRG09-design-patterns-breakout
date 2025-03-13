import { BlockBehaviour } from "./behaviours/block/BlockBehaviour";
import { GameObject } from "./gameObject";

export class Block extends GameObject {
  //fields
  public behaviour: BlockBehaviour;

  constructor(x: number, y: number, behaviour: BlockBehaviour) {
    super();

    let game = document.getElementsByTagName("game")[0];
    game.appendChild(this);
    this.x = x;
    this.y = y;
    this.behaviour = behaviour;
    this.id = this.behaviour.sprite;
    console.log("Block created!");
  }

  public changeBehaviour(behaviour: BlockBehaviour): void {
    this.behaviour = behaviour;
    this.id = this.behaviour.sprite;
  }

  public onCollision(gameObject: GameObject): void {
    super.onCollision(gameObject);
    this.behaviour.onCollision(this);
  }
}

window.customElements.define("block-element", Block as any);
