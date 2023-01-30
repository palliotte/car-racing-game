player: game.LedSprite=None
GameOn=False
score = 0

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

class car:
    def __init__(self, x):
        while True:
            global GameOn, score
            basic.pause(100)
            if GameOn:
                self.id=game.create_sprite(x, 0)
                basic.pause(randint(0, 1000))
            while GameOn:
                if self.id.get(LedSpriteProperty.Y) == 4:
                    if player.is_touching(self.id):
                        GameOn = False
                    else:
                        score = score+1
                        self.id.set(LedSpriteProperty.Y, 0)
                        basic.pause(randint(0, 5000))
                else:
                    self.id.change(LedSpriteProperty.Y, 1)
                    basic.pause(randint(100, 1000))


car1 = car(0)
car2 = car(1)
car3 = car(2)
car4 = car(3)
car5 = car(4)


