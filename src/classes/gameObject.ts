export abstract class GameObject extends HTMLElement {
  public x: number = 0;
  public y: number = 0;

  constructor() {
    super();
    let game = document.getElementsByTagName("game")[0];
    game.appendChild(this);
  }

  public update(): void {
    this.draw();
  }

  private draw(): void {
    this.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
}
