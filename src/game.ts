
class Game {
    // Fields
    private paddle : Paddle

    constructor() {
        this.paddle = new Paddle()

        this.gameLoop()
    }

    private gameLoop() {
        this.paddle.update()

        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Game())