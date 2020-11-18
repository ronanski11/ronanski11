def on_button_pressed_a():
    basic.show_leds("""
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        """)
    basic.pause(750)
    basic.show_leds("""
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        """)
    basic.pause(750)
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Ronan
    basic.show_leds("""
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        """)
    basic.pause(750)
    basic.show_leds("""
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        """)
    basic.pause(750)
    basic.show_leds("""
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        """)
    basic.pause(750)
    basic.show_leds("""
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        """)
    Ronan = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

Ronan = 0
Ronan = 0
basic.show_number(6)
basic.pause(1000)
basic.show_number(9)
basic.pause(1000)
if Ronan == 1:
    basic.show_leds("""
        . # # # .
        . # . # .
        . # # . .
        . # . # .
        . # . # .
        """)
    basic.pause(750)
    basic.show_leds("""
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # .
        """)
    basic.pause(750)
    basic.show_leds("""
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        """)
    basic.pause(750)
    basic.show_leds("""
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
        """)
    basic.pause(750)
    basic.show_leds("""
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        """)