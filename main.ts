let player : game.LedSprite = null
let GameOn = false
let score = 0
let car0 : game.LedSprite = null
car0 = game.createSprite(0, 0)
let car1 : game.LedSprite = null
car1 = game.createSprite(1, 0)
let car2 : game.LedSprite = null
car2 = game.createSprite(2, 0)
let car3 : game.LedSprite = null
car3 = game.createSprite(3, 0)
let car4 : game.LedSprite = null
car4 = game.createSprite(4, 0)
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
basic.forever(function cars0() {
    
    while (GameOn) {
        basic.pause(randint(3000, 5000))
        if (car0.get(LedSpriteProperty.Y) == 4) {
            if (player.isTouching(car0)) {
                GameOn = false
            } else {
                score = score + 1
                car0.set(LedSpriteProperty.Y, 0)
            }
            
        } else {
            car0.change(LedSpriteProperty.Y, 1)
        }
        
    }
})
basic.forever(function cars1() {
    
    while (GameOn) {
        basic.pause(randint(0, 4000))
        if (car1.get(LedSpriteProperty.Y) == 4) {
            if (player.isTouching(car1)) {
                GameOn = false
            } else {
                score = score + 1
                car1.set(LedSpriteProperty.Y, 0)
            }
            
        } else {
            car1.change(LedSpriteProperty.Y, 1)
        }
        
    }
})
basic.forever(function cars2() {
    
    while (GameOn) {
        basic.pause(randint(500, 3000))
        if (car2.get(LedSpriteProperty.Y) == 4) {
            if (player.isTouching(car2)) {
                GameOn = false
            } else {
                score = score + 1
                car2.set(LedSpriteProperty.Y, 0)
            }
            
        } else {
            car2.change(LedSpriteProperty.Y, 1)
        }
        
    }
})
basic.forever(function cars3() {
    
    while (GameOn) {
        basic.pause(randint(500, 4000))
        if (car3.get(LedSpriteProperty.Y) == 4) {
            if (player.isTouching(car3)) {
                GameOn = false
            } else {
                score = score + 1
                car3.set(LedSpriteProperty.Y, 0)
            }
            
        } else {
            car3.change(LedSpriteProperty.Y, 1)
        }
        
    }
})
basic.forever(function cars4() {
    
    while (GameOn) {
        basic.pause(randint(500, 3000))
        if (car4.get(LedSpriteProperty.Y) == 4) {
            if (player.isTouching(car4)) {
                GameOn = false
            } else {
                score = score + 1
                car4.set(LedSpriteProperty.Y, 0)
            }
            
        } else {
            car4.change(LedSpriteProperty.Y, 1)
        }
        
    }
})
