let player : game.LedSprite = null
let GameOn = false
let score = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (player.get(LedSpriteProperty.X) > 0) {
        player.change(LedSpriteProperty.X, -1)
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    if (player.get(LedSpriteProperty.X) < 4) {
        player.change(LedSpriteProperty.X, 1)
    }
    
})
basic.forever(function on_forever() {
    
    score = 0
    player = game.createSprite(2, 4)
    GameOn = true
    while (GameOn) {
        basic.pause(100)
    }
    game.addScore(score)
    game.gameOver()
})
class car {
    id: game.LedSprite
    constructor(x: number) {
        while (true) {
            
            basic.pause(100)
            if (GameOn) {
                this.id = game.createSprite(x, 0)
                basic.pause(randint(0, 1000))
            }
            
            while (GameOn) {
                if (this.id.get(LedSpriteProperty.Y) == 4) {
                    if (player.isTouching(this.id)) {
                        GameOn = false
                    } else {
                        score = score + 1
                        this.id.set(LedSpriteProperty.Y, 0)
                        basic.pause(randint(0, 5000))
                    }
                    
                } else {
                    this.id.change(LedSpriteProperty.Y, 1)
                    basic.pause(randint(100, 1000))
                }
                
            }
        }
    }
    
}

let car1 = new car(0)
let car2 = new car(1)
let car3 = new car(2)
let car4 = new car(3)
let car5 = new car(4)
