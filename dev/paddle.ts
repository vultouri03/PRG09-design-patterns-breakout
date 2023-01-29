class Paddle extends HTMLElement {
    // Fields
    private x           : number    = 0
    private y           : number    = 0

    private moveLeft    : boolean   = false
    private moveRight   : boolean   = false
    
    private speed       : number    = 7

    constructor() {
        super()
        console.log("Paddle created!")

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this)

        // midden van het scherm
        this.x      = window.innerWidth / 2 - this.clientWidth / 2
        // 5% vanaf de onderkant van het scherm
        this.y      = window.innerHeight * 0.95
        
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    private onKeyDown(e: KeyboardEvent): void {
        if(e.key == "ArrowLeft")        this.moveLeft   = true
        else if (e.key == "ArrowRight") this.moveRight  = true
    }

    private onKeyUp(e: KeyboardEvent): void {
        if(e.key == "ArrowLeft")        this.moveLeft   = false
        else if (e.key == "ArrowRight") this.moveRight  = false
    }

    public update() {
        let newX : number = 0
        if(this.moveLeft)   newX = this.x - this.speed
        if(this.moveRight)  newX = this.x + this.speed 
        
        if (newX > 0 && newX + this.clientWidth < window.innerWidth) this.x = newX

        this.draw()
    }

    private draw() : void {
        this.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}

window.customElements.define("paddle-component", Paddle as any)