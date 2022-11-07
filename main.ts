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
    playSongNumber(song)
    basic.clearScreen()
})
function playRandom () {
    song = randint(1, numberOfSongs)
    playSongNumber(song)
}
grove.onGesture(GroveGesture.Clockwise, function () {
    led.setBrightness(255)
    basic.showLeds(`
        . . # # .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    volume += 3
    DFPlayerPro.MP3_setVol(volume)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    playRandom()
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
    playRandom()
    basic.clearScreen()
})
function playSongNumber (num: number) {
    DFPlayerPro.MP3_playFileNum(num)
}
grove.onGesture(GroveGesture.Down, function () {
    led.setBrightness(255)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    DFPlayerPro.MP3_control(DFPlayerPro.controlType.playPause)
    basic.clearScreen()
})
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
    playSongNumber(song)
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
    volume += -3
    DFPlayerPro.MP3_setVol(volume)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    playSongNumber(1)
})
pins.onPulsed(DigitalPin.P0, PulseValue.Low, function () {
    playSongNumber(song)
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
})
input.onGesture(Gesture.ScreenUp, function () {
    playSongNumber(2)
})
let numberOfSongs = 0
let song = 0
let volume = 0
basic.showIcon(IconNames.Heart)
DFPlayerPro.MP3_setSerial(SerialPin.P1, SerialPin.P2)
DFPlayerPro.MP3_setPlayMode(DFPlayerPro.playType.playOneSongAndPause)
DFPlayerPro.MP3_promtMode(DFPlayerPro.promtType.promtOff)
DFPlayerPro.MP3_ledMode(DFPlayerPro.ledType.ledOff)
grove.initGesture()
volume = 10
led.setBrightness(0)
song = 3
DFPlayerPro.MP3_setVol(volume)
numberOfSongs = DFPlayerPro.MP3_getTotalFileNumber()
