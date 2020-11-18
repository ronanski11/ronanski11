input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.pause(750)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(750)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.pause(750)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(750)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.pause(750)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.pause(1000)
    Ronan = 1
})
let Ronan = 0
Ronan = 0
let WAP = 0
basic.showNumber(6)
basic.pause(1000)
basic.showNumber(9)
basic.pause(1000)
basic.forever(function () {
    if (Ronan == 1) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
        basic.pause(750)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.pause(750)
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
        basic.pause(750)
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            # . . . #
            # . . . #
            `)
        basic.pause(750)
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
        basic.pause(1000)
        WAP = 1
        Ronan = 0
    }
})
basic.forever(function () {
    if (WAP == 1) {
        basic.showIcon(IconNames.Heart)
    }
})
