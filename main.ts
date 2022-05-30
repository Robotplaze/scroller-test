namespace SpriteKind {
    export const boss = SpriteKind.create()
    export const bossprite = SpriteKind.create()
    export const powerup = SpriteKind.create()
    export const projectile2 = SpriteKind.create()
    export const sniperpowerup = SpriteKind.create()
    export const medkit = SpriteKind.create()
}
namespace StatusBarKind {
    export const Ammo = StatusBarKind.create()
    export const nukehealth = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.medkit, function (sprite, otherSprite) {
    otherSprite.destroy()
    statusbar.value += 100
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.sniperpowerup, function (sprite, otherSprite) {
    boolean2 = 1
    otherSprite.destroy()
    snipershots = 5
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    boss1.destroy()
    music.jumpUp.play()
})
statusbars.onZero(StatusBarKind.nukehealth, function (status) {
    while (true) {
        mySprite2.destroy(effects.fire, 100)
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    mySprite.destroy()
    music.wawawawaa.play()
    effects.starField.endScreenEffect()
    game.over(false, effects.melt)
    music.stopAllSounds()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.projectile2, function (sprite, otherSprite) {
    otherSprite.destroy()
    statusbar.value += -10
    otherSprite.startEffect(effects.halo, 5000)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.fire, 100)
    statusbar.value += -10
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.projectile2, function (sprite, otherSprite) {
    statusbar3.value += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.powerup, function (sprite, otherSprite) {
    boolean1 = 1
    otherSprite.destroy()
    machinegunammo = 50
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite3, otherSprite3) {
    otherSprite3.startEffect(effects.fire, 100)
    otherSprite3.destroy()
    music.powerUp.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite2, otherSprite2) {
    otherSprite2.startEffect(effects.fire, 100)
    statusbar2.value += -1
})
let sniperbullet: Sprite = null
let machinegunpowerup: Sprite = null
let mySprite3: Sprite = null
let projectile: Sprite = null
let counterboss = 0
let Enemy1: Sprite = null
let healthpowerup: Sprite = null
let statusbar2: StatusBarSprite = null
let machinegunammo = 0
let boolean1 = 0
let statusbar3: StatusBarSprite = null
let mySprite2: Sprite = null
let boss1: Sprite = null
let snipershots = 0
let boolean2 = 0
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
game.showLongText("Press a to start", DialogLayout.Full)
music.knock.loop()
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
effects.starField.startScreenEffect()
scroller.scrollBackgroundWithSpeed(0, 50)
mySprite = sprites.create(img`
    ............cfff............
    .............cf.............
    ............f68f............
    ............f68f............
    ............f68f............
    ............f88f............
    .....fffffff6ff8fffffff.....
    .....c6888888968888888f.....
    .....c688888f88f888888f.....
    .....cbcccffcffcffbcccf.....
    ............f88f............
    ............c68f............
    ............c68f............
    ...........ff88ff...........
    ...........c6888f...........
    ...........cfffff...........
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.setPosition(74, 99)
controller.moveSprite(mySprite, 100, 0)
info.setLife(3)
info.setScore(0)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite, 5, 0)
statusbar.setColor(2, 3)
statusbar.setLabel("HP", 1)
statusbar.max = 100
statusbar.value = 100
game.onUpdateInterval(5000, function () {
    for (let index = 0; index < 3; index++) {
        mySprite2 = sprites.create(img`
            ................
            .fff..ffff..fff.
            .ffff.fccf.ffff.
            ..fcfffccfffcf..
            ..fccffffffccf..
            ..fccccccccccf..
            ..fccccccccccf..
            ..fccccccccccf..
            ..fccccccccccf..
            ..ffccccccccff..
            ..f4fccccccf4f..
            ...f2fccccf2f...
            ...f22ffff22f...
            ....f222222f....
            ....f222222f....
            .....ffffff.....
            ................
            .......ff.......
            ......f55f......
            .....f5555f.....
            ....f555555f....
            ....f555555f....
            .....ffffff.....
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            `, SpriteKind.projectile2)
        mySprite2.setPosition(randint(0, 120), 20)
        mySprite2.setVelocity(0, 20)
        mySprite2.setFlag(SpriteFlag.AutoDestroy, true)
        statusbar3 = statusbars.create(10, 2, StatusBarKind.nukehealth)
        statusbar3.attachToSprite(mySprite2)
        statusbar3.max = 2
    }
})
game.onUpdateInterval(2000, function () {
    healthpowerup = sprites.create(img`
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        7 7 7 7 7 7 7 1 1 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 1 1 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 1 1 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 1 1 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 1 1 7 7 7 7 7 7 7 
        7 7 1 1 1 1 1 1 1 1 1 1 1 1 7 7 
        7 7 1 1 1 1 1 1 1 1 1 1 1 1 7 7 
        7 7 7 7 7 7 7 1 1 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 1 1 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 1 1 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 1 1 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 1 1 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        `, SpriteKind.medkit)
    healthpowerup.setPosition(randint(0, 150), 0)
    healthpowerup.setVelocity(0, 50)
})
game.onUpdateInterval(1000, function () {
    Enemy1 = sprites.create(img`
        ...........fffffc...........
        ...........f2224c...........
        ...........ff22ff...........
        ............f24c............
        ............f24c............
        ............f22f............
        .....fcccbffcffcffcccbc.....
        .....f222222f22f222224c.....
        .....f2222222432222224c.....
        .....fffffff2ff4fffffff.....
        ............f22f............
        ............f24f............
        ............f24f............
        ............f24f............
        .............fc.............
        ............fffc............
        `, SpriteKind.Enemy)
    Enemy1.setVelocity(0, 50)
    Enemy1.setFlag(SpriteFlag.AutoDestroy, true)
    Enemy1.x = randint(0, 150)
    Enemy1.y = 0
    counterboss += 1
})
forever(function () {
    if (boolean1 == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 9 6 . . . 
            . . . 7 7 . . . 
            . . . 7 7 . . . 
            . . . 7 7 . . . 
            . . . . . . . . 
            `, mySprite, 0, -100)
        music.footstep.play()
        machinegunammo += -1
        pause(10)
        if (machinegunammo <= 0) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . 
                . . . . . . . . 
                . . . . . . . . 
                . . . 1 1 . . . 
                . . . 1 1 . . . 
                . . . 1 1 . . . 
                . . . 1 1 . . . 
                . . . . . . . . 
                `, mySprite, 0, -100)
            music.pewPew.play()
            pause(100)
        }
    } else if (boolean2 == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 4 2 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . . . . . . . 
            `, mySprite, 0, -1000)
        music.footstep.play()
        snipershots += -1
        pause(1000)
        if (snipershots <= 0) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . 
                . . . . . . . . 
                . . . . . . . . 
                . . . 1 1 . . . 
                . . . 1 1 . . . 
                . . . 1 1 . . . 
                . . . 1 1 . . . 
                . . . . . . . . 
                `, mySprite, 0, -100)
            music.pewPew.play()
            pause(100)
        }
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . 1 1 . . . 
            . . . 1 1 . . . 
            . . . 1 1 . . . 
            . . . 1 1 . . . 
            . . . . . . . . 
            `, mySprite, 0, -100)
        music.pewPew.play()
        pause(100)
    }
})
forever(function () {
    if (info.score() >= 100) {
        game.over(true, effects.confetti)
        game.showLongText("You did it!!!", DialogLayout.Bottom)
        music.powerUp.play()
        music.stopAllSounds()
    }
})
game.onUpdateInterval(100, function () {
    if (counterboss == 20) {
        boss1 = sprites.create(assets.image`Boss`, SpriteKind.boss)
        statusbar2 = statusbars.create(40, 2, StatusBarKind.EnemyHealth)
        statusbar2.setLabel("BOSS:")
        statusbar2.setPosition(72, 6)
        statusbar.max = 10
        boss1.setPosition(randint(0, 100), 25)
        boss1.setBounceOnWall(true)
        boss1.setVelocity(50, 50)
        music.siren.play()
        counterboss = 0
    } else {
        counterboss = counterboss
    }
})
game.onUpdateInterval(200, function () {
    if (counterboss == 20) {
        for (let index = 0; index < 5; index++) {
            mySprite3 = sprites.create(img`
                . . . . . . f f f f . . . . . . 
                . . . . . . f 2 2 f . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                f f f . . . . f f . . . . f f f 
                f 2 f f f f f 2 2 f f f f f 2 f 
                f 2 f f f f f 2 2 f f f f f 2 f 
                f f f . . . . f f . . . . f f f 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . f 2 2 f . . . . . . 
                . . . . . . f f f f . . . . . . 
                `, SpriteKind.projectile2)
            mySprite3.setPosition(randint(0, 120), 20)
            mySprite3.setVelocity(randint(0, 50), randint(0, 50))
            mySprite3.setFlag(SpriteFlag.AutoDestroy, true)
        }
    }
})
game.onUpdateInterval(10000, function () {
    machinegunpowerup = sprites.create(img`
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 
        1 1 1 f 1 1 1 1 f f f 1 1 1 1 1 
        1 1 f f f 1 1 1 1 1 f 1 1 1 1 1 
        1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        `, SpriteKind.powerup)
    machinegunpowerup.setPosition(randint(0, 150), 0)
    machinegunpowerup.setVelocity(0, 50)
    machinegunpowerup.setFlag(SpriteFlag.AutoDestroy, false)
})
game.onUpdateInterval(10000, function () {
    sniperbullet = sprites.create(img`
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 f f f 1 1 1 1 1 
        1 1 1 f 1 1 1 1 f f f 1 1 1 1 1 
        1 1 f f f 1 1 1 f f f 1 1 1 1 1 
        1 1 1 f 1 1 1 1 1 f 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        `, SpriteKind.sniperpowerup)
    sniperbullet.setPosition(randint(0, 150), 0)
    sniperbullet.setVelocity(0, 50)
    sniperbullet.setFlag(SpriteFlag.AutoDestroy, true)
})
