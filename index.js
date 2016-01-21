var robot = require("robotjs");

var windoze = require('./windoze');

var bezier = require('bezier');



var locations = {
	attack:{x:864,y:404}
}


var locked = false;

function attack() {
	moveToLocation('attack');
	robot.mouseClick();
}

function collectGold() {
	var curveX = [730,860,973];
	var curveY = [427,486,428];
	for (var t = 0; t < 1; t += 0.01) {
		moveRelative(bezier(curveX,t),bezier(curveY,t));
	}
}

function initWindow(title,cb) {
	windoze.activateWindow(title,true);
	window = windoze.getWindowLocation(title,true);
	onWindowReady(window);
}
var window;
var maxX = 0
var maxY = 0;

function onWindowReady(w) {
	window = w;
	console.log(w);
	maxX = window.x + window.width;
	maxY = window.y + window.height;
	setInterval(function() {
		console.log(relativeCoords(robot.getMousePos()));
		collectGold();
	},500);
}

function constrainedMove(x,y) {
	console.log(x,y);
	x = Math.min(x,maxX);
	y = Math.min(y,maxY);
	console.log(x,y);
	robot.moveMouse(x,y);
}

//FOR GLBOAL COORDS ONLY
function moveRelative(x,y) {
	constrainedMove(window.x + x, window.y + y);
}

function moveToLocation(location) {
	location = locations[location];
	if(location !== undefined) {
		constrainedMove(location.x,location.y);
	}
}

function relativeCoords(obj) {
	obj.x = obj.x - window.x;
	obj.y = obj.y - window.y;
	return obj;
}



initWindow('Clicker Heroes',onWindowReady);
// robot.moveMouse(0,0);


// //move the mouse back to its reseting state
// function reset() {
// 	robot.moveMouse(859,405);
// }


// function hire1() {
// 	robot.moveMouse(86,273);
// 	robot.mouseClick();
// 	reset();
// }

// //WHEN you determine beam is pushing the button
// 	//call hire1()

// hire1();
