grove.onGesture(GroveGesture.Right, function () {
    led.setBrightness(255)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    song += 1
    spieleSongNummer(song)
    basic.clearScreen()
})
grove.onGesture(GroveGesture.Clockwise, function () {
    led.setBrightness(255)
    basic.showLeds(`
        . . # # .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    volume += 2
    DFPlayerPro.MP3_setVol(volume)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    spieleZufall()
})
grove.onGesture(GroveGesture.Up, function () {
    led.setBrightness(255)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    spieleZufall()
    basic.clearScreen()
})
grove.onGesture(GroveGesture.Down, function () {
    led.setBrightness(255)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    stoppeMusik()
    basic.clearScreen()
})
function stoppeMusik () {
    DFPlayerPro.MP3_amplifierMode(
    DFPlayerPro.ampType.ampOff
    )
}
grove.onGesture(GroveGesture.Left, function () {
    led.setBrightness(255)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    song += -1
    spieleSongNummer(song)
    basic.clearScreen()
})
grove.onGesture(GroveGesture.Anticlockwise, function () {
    led.setBrightness(255)
    basic.showLeds(`
        . # # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    volume += -2
    DFPlayerPro.MP3_setVol(volume)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    spieleSongNummer(1)
})
function spieleSongNummer (num: number) {
    DFPlayerPro.MP3_playFileNum(num)
    DFPlayerPro.MP3_amplifierMode(
    DFPlayerPro.ampType.ampOn
    )
}
function spieleZufall () {
    song = randint(1, numberOfSongs)
    spieleSongNummer(song)
}
input.onGesture(Gesture.ScreenUp, function () {
    spieleSongNummer(2)
})
let numberOfSongs = 0
let song = 0
let volume = 0
basic.showIcon(IconNames.Heart)
DFPlayerPro.MP3_setSerial(SerialPin.P2, SerialPin.P1)
DFPlayerPro.MP3_setPlayMode(DFPlayerPro.PlayType.playOneSongAndPause)
DFPlayerPro.MP3_promtMode(DFPlayerPro.PromtType.promtOff)
DFPlayerPro.MP3_ledMode(DFPlayerPro.ledType.ledOn)
grove.initGesture()
volume = 10
led.setBrightness(0)
song = 3
DFPlayerPro.MP3_setVol(volume)
numberOfSongs = DFPlayerPro.MP3_getTotalFileNumber()
let stop = 1
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        spieleSongNummer(song)
        for (let index = 0; index < 5; index++) {
            basic.showIcon(IconNames.Heart)
            for (let Index = 0; Index <= 255; Index++) {
                led.setBrightness(Index)
                basic.pause(1)
            }
            basic.showIcon(IconNames.Heart)
            for (let Index2 = 0; Index2 <= 255; Index2++) {
                led.setBrightness(255 - Index2)
                basic.pause(1)
            }
        }
        basic.clearScreen()
        led.setBrightness(255)
    }
})
