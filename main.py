def Boss_Fight():
    global Leader_spaceship, Boss_lives
    evil_spaceship.delete()
    Leader_spaceship = game.create_sprite(2, 0)
    Boss_lives = 30

def on_button_pressed_a():
    sprite.change(LedSpriteProperty.X, -1)
    lazer.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def Cutscene():
    basic.show_leds("""
        . . . . .
                . . . . #
                . . # # #
                . . . . #
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . #
                . # # # #
                . . . . #
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . #
                # . # # #
                . . . . #
                . . . . .
    """)
    basic.show_leds("""
        . # # # .
                # # # # #
                . # . # .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . # # # .
                # # # # #
                . # . # .
                . . . . .
                . . # . .
    """)
    basic.show_leds("""
        . # # # .
                # # # # #
                . # . # .
                . . # . .
                . . . . .
    """)
    basic.show_leds("""
        . # # # .
                # # # # #
                . # # # .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . # # # .
                # # # # #
                . # . # .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.show_icon(IconNames.SMALL_DIAMOND)
    basic.show_icon(IconNames.DIAMOND)
    basic.show_leds("""
        . # . # .
                # . . . #
                . . # . .
                # . . . #
                . # . # .
    """)
    basic.show_leds("""
        # . . . #
                . . . . .
                . . . . .
                . . . # .
                # . . . #
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . # . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . # #
                . # # # .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . #
                # # # # .
                . . # . #
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # # .
                # # # . #
                . . # # .
    """)
    basic.show_leds("""
        . . . . .
                . . # . #
                # # # # .
                . . # . #
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . # # .
                # # # . #
                . . # # .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . # . #
                # # # # .
                . . # . #
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . # # .
                # # # . #
                . . # # .
                . . . . .
    """)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.show_leds("""
        . # # . .
                # . . . #
                # . # . #
                . # # . #
                . . . # .
    """)
    basic.pause(5000)
    basic.show_string("Score" + str(game.score()))
    basic.show_string("Thanks For playing")

def on_button_pressed_ab():
    basic.pause(100)
    for index in range(5):
        lazer.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    if lazer.get(LedSpriteProperty.Y) == 0:
        lazer.set(LedSpriteProperty.X, sprite.get(LedSpriteProperty.X))
        lazer.set(LedSpriteProperty.Y, sprite.get(LedSpriteProperty.Y))
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    sprite.change(LedSpriteProperty.X, 1)
    lazer.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def Life_counter():
    global Lives
    if Lives == 0:
        game.game_over()
    else:
        Lives += -1
Leader_spaceship: game.LedSprite = None
Lives = 0
Boss_lives = 0
lazer: game.LedSprite = None
evil_spaceship: game.LedSprite = None
sprite: game.LedSprite = None
sprite = game.create_sprite(2, 4)
other_spaceship = game.create_sprite(randint(0, 4), 0)
evil_spaceship = game.create_sprite(randint(0, 4), 0)
lazer = game.create_sprite(2, 4)
Setting = True
Boss_lives = 0
Lives = 3
Level = 1
game.set_score(0)

def on_forever():
    if evil_spaceship.get(LedSpriteProperty.X) == other_spaceship.get(LedSpriteProperty.X):
        other_spaceship.set(LedSpriteProperty.X, randint(0, 4))
basic.forever(on_forever)

def on_forever2():
    if sprite.is_touching(evil_spaceship):
        Life_counter()
    if evil_spaceship.is_touching(lazer):
        game.add_score(1)
        evil_spaceship.set(LedSpriteProperty.Y, 0)
        evil_spaceship.set(LedSpriteProperty.X, randint(0, 4))
    if evil_spaceship.get(LedSpriteProperty.Y) == 4:
        evil_spaceship.set(LedSpriteProperty.X, randint(0, 4))
        evil_spaceship.set(LedSpriteProperty.Y, 0)
basic.forever(on_forever2)

def on_forever3():
    global Level, Lives, Setting
    if True:
        if game.score() >= 20:
            Level = 2
        if game.score() >= 40:
            Level = 3
        if game.score() >= 60:
            Level = 4
        if game.score() >= 80:
            Level = 5
            Lives += 1
        if game.score() >= 100:
            Level = 6
        if game.score() >= 120:
            Level = 7
        if game.score() >= 140:
            Level = 8
        if game.score() >= 160:
            Level = 9
        if game.score() >= 200:
            Level = 10
            Lives += 1
        if game.is_game_over():
            basic.show_string("level" + str(Level))
            game.game_over()
        if game.score() >= 1000:
            Level = 11
            Setting = False
basic.forever(on_forever3)

def on_forever4():
    if sprite.is_touching(other_spaceship):
        Life_counter()
    if other_spaceship.is_touching(lazer):
        game.add_score(1)
        other_spaceship.set(LedSpriteProperty.Y, 0)
        other_spaceship.set(LedSpriteProperty.X, randint(0, 4))
    if other_spaceship.get(LedSpriteProperty.Y) == 4:
        other_spaceship.set(LedSpriteProperty.X, randint(0, 4))
        other_spaceship.set(LedSpriteProperty.Y, 0)
basic.forever(on_forever4)

def on_forever5():
    for index2 in range(5):
        evil_spaceship.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
basic.forever(on_forever5)

def on_forever6():
    for index3 in range(5):
        other_spaceship.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
basic.forever(on_forever6)

def on_forever7():
    if False:
        Boss_Fight()
basic.forever(on_forever7)

def on_forever8():
    global Boss_lives
    if False:
        if lazer.is_touching(Leader_spaceship):
            Boss_lives += -1
            Leader_spaceship.set(LedSpriteProperty.X, randint(0, 4))
            sprite.set(LedSpriteProperty.Y, 0)
        for index4 in range(100000000000000):
            sprite.change(LedSpriteProperty.X, randint(0, 4))
            basic.pause(500)
        if Boss_lives == 0:
            sprite.delete()
            lazer.delete()
            other_spaceship.delete()
            evil_spaceship.delete()
            Leader_spaceship.delete()
            Cutscene()
basic.forever(on_forever8)
