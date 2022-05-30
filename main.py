@namespace
class SpriteKind:
    boss = SpriteKind.create()
    bossprite = SpriteKind.create()
    powerup = SpriteKind.create()
    projectile2 = SpriteKind.create()
    sniperpowerup = SpriteKind.create()
@namespace
class StatusBarKind:
    Ammo = StatusBarKind.create()

def on_on_overlap(sprite, otherSprite):
    global boolean2, snipershots
    boolean2 = 1
    otherSprite.destroy()
    snipershots = 5
sprites.on_overlap(SpriteKind.player, SpriteKind.sniperpowerup, on_on_overlap)

def on_on_zero(status):
    boss1.destroy()
    music.jump_up.play()
statusbars.on_zero(StatusBarKind.enemy_health, on_on_zero)

def on_on_zero2(status2):
    mySprite.destroy()
    music.wawawawaa.play()
    effects.star_field.end_screen_effect()
    game.over(False, effects.melt)
    music.stop_all_sounds()
statusbars.on_zero(StatusBarKind.health, on_on_zero2)

def on_on_overlap2(sprite2, otherSprite2):
    otherSprite2.destroy()
    statusbar.value += -10
    otherSprite2.start_effect(effects.halo, 5000)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile2, on_on_overlap2)

def on_on_overlap3(sprite3, otherSprite3):
    otherSprite3.start_effect(effects.fire, 100)
    statusbar.value += -10
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.player, on_on_overlap3)

def on_on_overlap4(sprite4, otherSprite4):
    global boolean1, machinegunammo
    boolean1 = 1
    otherSprite4.destroy()
    machinegunammo = 50
sprites.on_overlap(SpriteKind.player, SpriteKind.powerup, on_on_overlap4)

def on_on_overlap5(sprite32, otherSprite32):
    otherSprite32.start_effect(effects.fire, 100)
    otherSprite32.destroy()
    music.power_up.play()
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap5)

def on_on_overlap6(sprite22, otherSprite22):
    otherSprite22.start_effect(effects.fire, 100)
    statusbar2.value += -1
sprites.on_overlap(SpriteKind.projectile, SpriteKind.boss, on_on_overlap6)

sniperbullet: Sprite = None
machinegunpowerup: Sprite = None
mySprite3: Sprite = None
mySprite2: Sprite = None
projectile: Sprite = None
counterboss = 0
Enemy1: Sprite = None
statusbar2: StatusBarSprite = None
machinegunammo = 0
boolean1 = 0
boss1: Sprite = None
snipershots = 0
boolean2 = 0
statusbar: StatusBarSprite = None
mySprite: Sprite = None
game.show_long_text("Hit A to start!", DialogLayout.BOTTOM)
music.knock.loop()
scene.set_background_image(img("""
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
"""))
effects.star_field.start_screen_effect()
scroller.scroll_background_with_speed(0, 50)
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
mySprite.set_stay_in_screen(True)
mySprite.set_position(74, 99)
controller.move_sprite(mySprite, 100, 0)
info.set_life(3)
info.set_score(0)
statusbar = statusbars.create(20, 4, StatusBarKind.health)
statusbar.attach_to_sprite(mySprite, 5, 0)
statusbar.set_color(2, 15)
statusbar.set_label("HP", 1)
statusbar.value = 100

def on_update_interval():
    global Enemy1, counterboss
    Enemy1 = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    Enemy1.set_velocity(0, 50)
    Enemy1.set_flag(SpriteFlag.AUTO_DESTROY, True)
    Enemy1.x = randint(0, 150)
    Enemy1.y = 0
    counterboss += 1
game.on_update_interval(1000, on_update_interval)

def on_forever():
    global projectile, snipershots
    if boolean2 == 1:
        projectile = sprites.create_projectile_from_sprite(img("""
                . . . . . . . . 
                            . . . . . . . . 
                            . . . . . . . . 
                            . . . 6 8 . . . 
                            . . . c c . . . 
                            . . . c c . . . 
                            . . . c c . . . 
                            . . . . . . . .
            """),
            mySprite,
            0,
            -100)
        music.footstep.play()
        snipershots += -1
        pause(1000)
        if snipershots <= 0:
            projectile = sprites.create_projectile_from_sprite(img("""
                    . . . . . . . . 
                                    . . . . . . . . 
                                    . . . . . . . . 
                                    . . . 1 1 . . . 
                                    . . . 1 1 . . . 
                                    . . . 1 1 . . . 
                                    . . . 1 1 . . . 
                                    . . . . . . . .
                """),
                mySprite,
                0,
                -100)
            music.pew_pew.play()
            pause(100)
    else:
        projectile = sprites.create_projectile_from_sprite(img("""
                . . . . . . . . 
                            . . . . . . . . 
                            . . . . . . . . 
                            . . . 1 1 . . . 
                            . . . 1 1 . . . 
                            . . . 1 1 . . . 
                            . . . 1 1 . . . 
                            . . . . . . . .
            """),
            mySprite,
            0,
            -100)
        music.pew_pew.play()
        pause(100)
forever(on_forever)

def on_forever2():
    global projectile, machinegunammo
    if boolean1 == 1:
        projectile = sprites.create_projectile_from_sprite(img("""
                . . . . . . . . 
                            . . . . . . . . 
                            . . . . . . . . 
                            . . . 5 5 . . . 
                            . . . 5 5 . . . 
                            . . . 5 5 . . . 
                            . . . 5 5 . . . 
                            . . . . . . . .
            """),
            mySprite,
            0,
            -100)
        music.footstep.play()
        machinegunammo += -1
        pause(10)
        if machinegunammo <= 0:
            projectile = sprites.create_projectile_from_sprite(img("""
                    . . . . . . . . 
                                    . . . . . . . . 
                                    . . . . . . . . 
                                    . . . 1 1 . . . 
                                    . . . 1 1 . . . 
                                    . . . 1 1 . . . 
                                    . . . 1 1 . . . 
                                    . . . . . . . .
                """),
                mySprite,
                0,
                -100)
            music.pew_pew.play()
            pause(100)
    else:
        projectile = sprites.create_projectile_from_sprite(img("""
                . . . . . . . . 
                            . . . . . . . . 
                            . . . . . . . . 
                            . . . 1 1 . . . 
                            . . . 1 1 . . . 
                            . . . 1 1 . . . 
                            . . . 1 1 . . . 
                            . . . . . . . .
            """),
            mySprite,
            0,
            -100)
        music.pew_pew.play()
        pause(100)
forever(on_forever2)

def on_forever3():
    if info.score() >= 100:
        game.over(True, effects.confetti)
        game.show_long_text("You did it!!!", DialogLayout.BOTTOM)
        music.power_up.play()
        music.stop_all_sounds()
forever(on_forever3)

def on_update_interval2():
    global boss1, statusbar2, counterboss
    if counterboss == 20:
        boss1 = sprites.create(assets.image("""
            Boss
        """), SpriteKind.boss)
        statusbar2 = statusbars.create(40, 2, StatusBarKind.enemy_health)
        statusbar2.set_label("BOSS:")
        statusbar2.set_position(72, 6)
        statusbar.max = 10
        boss1.set_position(randint(0, 100), 25)
        boss1.set_bounce_on_wall(True)
        boss1.set_velocity(50, 50)
        music.siren.play()
        counterboss = 0
    else:
        counterboss = counterboss
game.on_update_interval(100, on_update_interval2)

def on_update_interval3():
    global mySprite2
    if counterboss == 20:
        for index in range(5):
            mySprite2 = sprites.create(img("""
                    . . . . . . . . . . . . . . . . 
                                    . f f f . . f f f f . . f f f . 
                                    . f f f f . f c c f . f f f f . 
                                    . . f c f f f c c f f f c f . . 
                                    . . f c c f f f f f f c c f . . 
                                    . . f c c c c c c c c c c f . . 
                                    . . f c c c c c c c c c c f . . 
                                    . . f c c c c c c c c c c f . . 
                                    . . f c c c c c c c c c c f . . 
                                    . . f f c c c c c c c c f f . . 
                                    . . f 4 f c c c c c c f 4 f . . 
                                    . . . f 2 f c c c c f 2 f . . . 
                                    . . . f 2 2 f f f f 2 2 f . . . 
                                    . . . . f 2 2 2 2 2 2 f . . . . 
                                    . . . . f 2 2 2 2 2 2 f . . . . 
                                    . . . . . f f f f f f . . . . .
                """),
                SpriteKind.projectile2)
            mySprite2.set_position(randint(0, 120), 20)
            mySprite2.set_velocity(0, 100)
            mySprite2.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(100, on_update_interval3)

def on_update_interval4():
    global mySprite3
    if counterboss == 20:
        for index2 in range(5):
            mySprite3 = sprites.create(img("""
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
                """),
                SpriteKind.projectile2)
            mySprite3.set_position(randint(0, 120), 20)
            mySprite3.set_velocity(randint(0, 50), randint(0, 50))
            mySprite3.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(200, on_update_interval4)

def on_update_interval5():
    global machinegunpowerup
    machinegunpowerup = sprites.create(img("""
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
        """),
        SpriteKind.powerup)
    machinegunpowerup.set_position(randint(0, 150), 0)
    machinegunpowerup.set_velocity(0, 50)
    machinegunpowerup.set_flag(SpriteFlag.AUTO_DESTROY, False)
game.on_update_interval(10000, on_update_interval5)

def on_update_interval6():
    global sniperbullet
    sniperbullet = sprites.create(img("""
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
        """),
        SpriteKind.sniperpowerup)
    sniperbullet.set_position(randint(0, 150), 0)
    sniperbullet.set_velocity(0, 50)
    sniperbullet.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(10000, on_update_interval6)
