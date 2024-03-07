basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(200)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(200)
})
