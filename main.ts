/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco Rocco Allegri
 * Created on: Oct 2024
 * This program controls two stepper motors and a distance sensor for obstacle avoidance
*/

let distanceToObject: number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

while (true) {
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)

    if (distanceToObject < 10) {
        robotbit.StpCarMove(0, 48)
        basic.showIcon(IconNames.No)

        robotbit.StpCarMove(-10, 48)
        basic.pause(1000)
        robotbit.StpCarMove(0, 48) 

        robotbit.StpCarMove(5, 48) 
        basic.pause(500)

        robotbit.StpCarMove(10, 48)
    } else {
        robotbit.StpCarMove(10, 48) 
    }
}
