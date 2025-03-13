import { BlockBehaviour } from "./behaviours/block/BlockBehaviour";

export class Block extends HTMLElement {
  //fields
  private x: number = 0;
  private y: number = 0;
  private behaviour: BlockBehaviour;

  constructor(x: number, y: number, behaviour: BlockBehaviour) {
    super();

    let game = document.getElementsByTagName("game")[0];
    game.appendChild(this);
    this.x = x;
    this.y = y;
    this.behaviour = behaviour;
    this.id = this.behaviour.sprite;
    console.log("Block created!");
    this.behaviour.onCollison(this);
  }

  public update(): void {
    // this.behaviour.onCollison(this);
    this.draw();
  }

  public changeBehaviour(behaviour: BlockBehaviour): void {
    this.behaviour = behaviour;
    this.id = this.behaviour.sprite;
  }

  private draw(): void {
    this.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
}

window.customElements.define("block-element", Block as any);
