controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.setBounceOnWall(true)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    controller.player2.moveSprite(PLayer_2, 0, 45)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    controller.player1.moveSprite(player_1, 0, 45)
})
let PLayer_2: Sprite = null
let player_1: Sprite = null
player_1 = sprites.create(img`
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    `, SpriteKind.Player)
PLayer_2 = sprites.create(img`
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    `, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . . 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
player_1.setPosition(153, 60)
PLayer_2.setPosition(1, 60)
