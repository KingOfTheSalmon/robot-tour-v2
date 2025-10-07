input.onButtonPressed(Button.A, function () {
    drivingEnabled = true
    if (drivingEnabled) {
        if (fwdSensors.sonar1.isPastThreshold(1, fwdEnums.OverUnder.Under)) {
            fwdMotors.leftServo.setSpeed(0)
            fwdMotors.rightServo.setSpeed(0)
            basic.pause(500)
            fwdMotors.drive(30, 30, 800)
            basic.pause(500)
        } else {
            fwdMotors.leftServo.setSpeed(30)
            fwdMotors.rightServo.setSpeed(-43)
        }
    } else {
        fwdMotors.leftServo.setSpeed(0)
        fwdMotors.rightServo.setSpeed(0)
    }
})
// Drag the sequence of 'set left and right motor' blocks into the 'on button A+B pressed' event to see a demo of what programming a fixed path might look like.
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    drivingEnabled = false
})
// Press the logo to stop the car.
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    fwdMotors.leftServo.setSpeed(0)
    fwdMotors.rightServo.setSpeed(0)
})
/**
 * With this code, you can choose to make your robot drive a fixed path or operate autonomously with obstacle avoidance.
 * 
 * You must drag one of the two code snippets into the empty block below to make your vehicle work. You can only choose one at a time. Please review the comments for clarification.
 */
let drivingEnabled = false
// At the start of the program, driving is set to false.
drivingEnabled = false
// At the start of the program, the driving is initialized. We have set the right and left motors.
fwdMotors.setupDriving(
fwdMotors.leftServo,
fwdMotors.rightServo
)
// Drag the 'if drivingEnabled' conditional into the 'forever' loop to see a demo of what autonomous driving might look like.
basic.forever(function () {
	
})
