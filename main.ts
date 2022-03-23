function Boss_Fight() {
    
    evil_spaceship.delete()
    Leader_spaceship = game.createSprite(2, 0)
    Boss_lives = 30
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    sprite.change(LedSpriteProperty.X, -1)
    lazer.change(LedSpriteProperty.X, -1)
})
function Cutscene() {
    basic.showLeds(`
        . . . . .
                . . . . #
                . . # # #
                . . . . #
                . . . . .
    `)
    basic.showLeds(`
        . . . . .
                . . . . #
                . # # # #
                . . . . #
                . . . . .
    `)
    basic.showLeds(`
        . . . . .
                . . . . #
                # . # # #
                . . . . #
                . . . . .
    `)
    basic.showLeds(`
        . # # # .
                # # # # #
                . # . # .
                . . . . .
                . . . . .
    `)
    basic.showLeds(`
        . # # # .
                # # # # #
                . # . # .
                . . . . .
                . . # . .
    `)
    basic.showLeds(`
        . # # # .
                # # # # #
                . # . # .
                . . # . .
                . . . . .
    `)
    basic.showLeds(`
        . # # # .
                # # # # #
                . # # # .
                . . . . .
                . . . . .
    `)
    basic.showLeds(`
        . # # # .
                # # # # #
                . # . # .
                . . . . .
                . . . . .
    `)
    basic.showLeds(`
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    `)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showLeds(`
        . # . # .
                # . . . #
                . . # . .
                # . . . #
                . # . # .
    `)
    basic.showLeds(`
        # . . . #
                . . . . .
                . . . . .
                . . . # .
                # . . . #
    `)
    basic.showLeds(`
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . # . .
    `)
    basic.showLeds(`
        . . . . .
                . . . . .
                . . . . .
                . . . # #
                . # # # .
    `)
    basic.showLeds(`
        . . . . .
                . . . . .
                . . # . #
                # # # # .
                . . # . #
    `)
    basic.showLeds(`
        . . . . .
                . . . . .
                . . # # .
                # # # . #
                . . # # .
    `)
    basic.showLeds(`
        . . . . .
                . . # . #
                # # # # .
                . . # . #
                . . . . .
    `)
    basic.showLeds(`
        . . . . .
                . . # # .
                # # # . #
                . . # # .
                . . . . .
    `)
    basic.showLeds(`
        . . . . .
                . . # . #
                # # # # .
                . . # . #
                . . . . .
    `)
    basic.showLeds(`
        . . . . .
                . . # # .
                # # # . #
                . . # # .
                . . . . .
    `)
    basic.showLeds(`
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    `)
    basic.showLeds(`
        . # # . .
                # . . . #
                # . # . #
                . # # . #
                . . . # .
    `)
    basic.pause(5000)
    basic.showString("Score" + ("" + game.score()))
    basic.showString("Thanks For playing")
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.pause(100)
    for (let index = 0; index < 5; index++) {
        lazer.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    if (lazer.get(LedSpriteProperty.Y) == 0) {
        lazer.set(LedSpriteProperty.X, sprite.get(LedSpriteProperty.X))
        lazer.set(LedSpriteProperty.Y, sprite.get(LedSpriteProperty.Y))
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    sprite.change(LedSpriteProperty.X, 1)
    lazer.change(LedSpriteProperty.X, 1)
})
function Life_counter() {
    
    if (Lives == 0) {
        game.gameOver()
    } else {
        Lives += -1
    }
    
}

let Leader_spaceship : game.LedSprite = null
let Lives = 0
let Boss_lives = 0
let lazer : game.LedSprite = null
let evil_spaceship : game.LedSprite = null
let sprite : game.LedSprite = null
sprite = game.createSprite(2, 4)
let other_spaceship = game.createSprite(randint(0, 4), 0)
evil_spaceship = game.createSprite(randint(0, 4), 0)
lazer = game.createSprite(2, 4)
let Setting = true
Boss_lives = 0
Lives = 3
let Level = 1
game.setScore(0)
basic.forever(function on_forever() {
    if (evil_spaceship.get(LedSpriteProperty.X) == other_spaceship.get(LedSpriteProperty.X)) {
        other_spaceship.set(LedSpriteProperty.X, randint(0, 4))
    }
    
})
basic.forever(function on_forever2() {
    if (sprite.isTouching(evil_spaceship)) {
        Life_counter()
    }
    
    if (evil_spaceship.isTouching(lazer)) {
        game.addScore(1)
        evil_spaceship.set(LedSpriteProperty.Y, 0)
        evil_spaceship.set(LedSpriteProperty.X, randint(0, 4))
    }
    
    if (evil_spaceship.get(LedSpriteProperty.Y) == 4) {
        evil_spaceship.set(LedSpriteProperty.X, randint(0, 4))
        evil_spaceship.set(LedSpriteProperty.Y, 0)
    }
    
})
basic.forever(function on_forever3() {
    
    if (true) {
        if (game.score() >= 20) {
            Level = 2
        }
        
        if (game.score() >= 40) {
            Level = 3
        }
        
        if (game.score() >= 60) {
            Level = 4
        }
        
        if (game.score() >= 80) {
            Level = 5
            Lives += 1
        }
        
        if (game.score() >= 100) {
            Level = 6
        }
        
        if (game.score() >= 120) {
            Level = 7
        }
        
        if (game.score() >= 140) {
            Level = 8
        }
        
        if (game.score() >= 160) {
            Level = 9
        }
        
        if (game.score() >= 200) {
            Level = 10
            Lives += 1
        }
        
        if (game.isGameOver()) {
            basic.showString("level" + ("" + Level))
            game.gameOver()
        }
        
        if (game.score() >= 1000) {
            Level = 11
            Setting = false
        }
        
    }
    
})
basic.forever(function on_forever4() {
    if (sprite.isTouching(other_spaceship)) {
        Life_counter()
    }
    
    if (other_spaceship.isTouching(lazer)) {
        game.addScore(1)
        other_spaceship.set(LedSpriteProperty.Y, 0)
        other_spaceship.set(LedSpriteProperty.X, randint(0, 4))
    }
    
    if (other_spaceship.get(LedSpriteProperty.Y) == 4) {
        other_spaceship.set(LedSpriteProperty.X, randint(0, 4))
        other_spaceship.set(LedSpriteProperty.Y, 0)
    }
    
})
basic.forever(function on_forever5() {
    for (let index2 = 0; index2 < 5; index2++) {
        evil_spaceship.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
})
basic.forever(function on_forever6() {
    for (let index3 = 0; index3 < 5; index3++) {
        other_spaceship.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
})
basic.forever(function on_forever7() {
    if (false) {
        Boss_Fight()
    }
    
})
basic.forever(function on_forever8() {
    
    if (false) {
        if (lazer.isTouching(Leader_spaceship)) {
            Boss_lives += -1
            Leader_spaceship.set(LedSpriteProperty.X, randint(0, 4))
            sprite.set(LedSpriteProperty.Y, 0)
        }
        
        for (let index4 = 0; index4 < 100000000000000; index4++) {
            sprite.change(LedSpriteProperty.X, randint(0, 4))
            basic.pause(500)
        }
        if (Boss_lives == 0) {
            sprite.delete()
            lazer.delete()
            other_spaceship.delete()
            evil_spaceship.delete()
            Leader_spaceship.delete()
            Cutscene()
        }
        
    }
    
})
