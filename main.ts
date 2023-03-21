basic.showString("Hey Im temperobot")
basic.pause(300)
basic.clearScreen()
basic.forever(function () {
    if (15 < input.temperature()) {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(500)
        basic.showIcon(IconNames.Heart)
        if (15 > input.temperature()) {
            basic.showIcon(IconNames.Skull)
            basic.pause(500)
            if (100 < input.lightLevel()) {
                basic.showIcon(IconNames.Sword)
                basic.pause(350)
            }
        }
    }
})
