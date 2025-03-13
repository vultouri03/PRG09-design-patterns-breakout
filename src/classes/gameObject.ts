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

  public hasCollision(gameObject: GameObject): boolean {
    return (
      this.x < gameObject.x + gameObject.offsetWidth &&
      this.x + this.offsetWidth > gameObject.x &&
      this.y < gameObject.y + gameObject.offsetHeight &&
      this.y + this.offsetHeight > gameObject.y
    );
  }

  public onCollision(gameObject: GameObject): void {
    console.log("Collision detected with: " + gameObject.nodeName);
  }

  private draw(): void {
    this.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
}
