var robot = require("robotjs");

var windoze = require('./windoze');

var bezier = require('bezier');

function initWindow(className) {
	//windoze.activateWindow(title,true);
	window = windoze.getWindowDetailsByClassName(className,true);
	console.log(window);
}

initWindow('SpotifyMainWindow');

