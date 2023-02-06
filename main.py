player: game.LedSprite=None
GameOn=False
score = 0
car0 : game.LedSprite=None
car0 = game.create_sprite(0, 0)
car1 : game.LedSprite=None
car1 = game.create_sprite(1, 0)
car2 : game.LedSprite=None
car2 = game.create_sprite(2, 0)
car3 : game.LedSprite=None
car3 = game.create_sprite(3, 0)
car4 : game.LedSprite=None
car4 = game.create_sprite(4, 0)

def on_button_pressed_a():
    if player.get(LedSpriteProperty.X) > 0:
        player.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if player.get(LedSpriteProperty.X) < 4:
        player.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global score, player, GameOn
    score = 0
    player=game.create_sprite(2, 4)
    GameOn = True
    while GameOn:
        basic.pause(100)
    game.add_score(score)
    game.game_over()
basic.forever(on_forever)

def cars0():
    global car0, player, GameOn, score
    while GameOn:
        basic.pause(randint(3000, 5000))
        if car0.get(LedSpriteProperty.Y) == 4:
            if player.is_touching(car0):
                GameOn = False
            else:
                score = score+1
                car0.set(LedSpriteProperty.Y, 0)
        else:
            car0.change(LedSpriteProperty.Y, 1)
basic.forever(cars0)

def cars1():
    global car1, player, GameOn, score
    while GameOn:
        basic.pause(randint(0, 4000))
        if car1.get(LedSpriteProperty.Y) == 4:
            if player.is_touching(car1):
                GameOn = False
            else:
                score = score+1
                car1.set(LedSpriteProperty.Y, 0)
        else:
            car1.change(LedSpriteProperty.Y, 1)
basic.forever(cars1)

def cars2():
    global car2, player, GameOn, score
    while GameOn:
        basic.pause(randint(500, 3000))
        if car2.get(LedSpriteProperty.Y) == 4:
            if player.is_touching(car2):
                GameOn = False
            else:
                score = score+1
                car2.set(LedSpriteProperty.Y, 0)
        else:
            car2.change(LedSpriteProperty.Y, 1)
basic.forever(cars2)

def cars3():
    global car3, player, GameOn, score
    while GameOn:
        basic.pause(randint(500, 4000))
        if car3.get(LedSpriteProperty.Y) == 4:
            if player.is_touching(car3):
                GameOn = False
            else:
                score = score+1
                car3.set(LedSpriteProperty.Y, 0)
        else:
            car3.change(LedSpriteProperty.Y, 1)
basic.forever(cars3)

def cars4():
    global car4, player, GameOn, score
    while GameOn:
        basic.pause(randint(500, 3000))
        if car4.get(LedSpriteProperty.Y) == 4:
            if player.is_touching(car4):
                GameOn = False
            else:
                score = score+1
                car4.set(LedSpriteProperty.Y, 0)
        else:
            car4.change(LedSpriteProperty.Y, 1)
basic.forever(cars4)