/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco Rocco Allegri
 * Created on: Oct 2024
 * This program ...
*/

let distanceToObject: number = 10

basic.clearScreen()
basic.showIcon(IconNames.Happy)



while (distanceToObject >= 10) {

    distanceToObject = sonar.ping
        (
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )

    basic.showIcon(IconNames.Yes)
    robotbit.StpCarMove(10, 48)
    basic.pause(500)
    robotbit.StpCarMove(-10, 48)
}
