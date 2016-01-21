//Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

setInterval(function() {
	console.log(robot.getMousePos());
},500);
