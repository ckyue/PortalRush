import Game from './js/Game';

// in pixels
const WIDTH = 256;
const HEIGHT = 960;
// in cell units
const UNIVERSE_LENGTH = 13;
const UNIVERSE_HEIGHT = 25;

const DIMENSION = {

	UNIVERSE_LENGTH: 13,
	UNIVERSE_HEIGHT:25,
	CELL_LENGTH: 256/UNIVERSE_LENGTH,
	CELL_HEIGHT: 960/UNIVERSE_HEIGHT

}

var canvas = document.getElementById('universe');
var ctx = canvas.getContext('2d');

var games = [new Game({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas,
	context: ctx,
	DIMENSION,
	speed: 20,
	plan: ["xxx xxx xxx",
		"kkk kkk kkk",
		"xxx xxx kkk",
		"kkk kkk ptB",
		"kkk xxx ptB",
		"kkk ptB kkk",
		"kkk xxx ptW",
		"kkk kkk kkk",
		"xxx ptW kkk",
		"kkk kkk kkk",
		"kkk xxx ptW",
		"kkk kkk kkk",
		"ptW xxx kkk",
		"kkk kkk kkk",
		"xxx xxx kkk",
		"kkk kkk kkk",
		"kkk xxx ptB",
		"kkk kkk kkk",
		"kkk ptB kkk"]
}), new Game({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas,
	context: ctx,
	DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk its kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk xxx kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk"]}),
new Game({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas,
	context: ctx,
	DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk its kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk"]
}),
new Game({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas,
	context: ctx,
	DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk its kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk xxx kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",]
}),
new Game({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas,
	context: ctx,
	DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk ptW",
		"its kkk kkk",
		"kkk xxx kkk",
		"ptW kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk xxx kkk",
		"ptW kkk kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk"]
}),
new Game({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas,
	context: ctx,
	DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk",
		"its kkk kkk",
		"kkk kkk kkk",
		"ptW kkk kkk",
		"kkk kkk kkk",
		"kkk xxx kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"xxx kkk kkk",
		"kkk kkk kkk",
		"ptW kkk kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk"]
}),
new Game({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas,
	context: ctx,
	DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk its kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk ptB kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk xxx kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk ptB kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk"]
}),
new Game({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas,
	context: ctx,
	DIMENSION,
	speed: 20,
	plan: ["kkk its kkk",
		"kkk ptB kkk",
		"kkk kkk ptW",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk ptB",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk ptW",
		"kkk kkk kkk",
		"kkk kkk xxx",
		"kkk kkk ptW",
		"kkk kkk kkk",
		"kkk kkk ptW",
		"kkk kkk kkk",
		"kkk kkk ptW",
		"kkk xxx kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk"]
}),

new Game({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas,
	context: ctx,
	DIMENSION,
	speed: 20,
	plan: ["kkk its kkk",
		"kkk ptB kkk",
		"kkk kkk ptW",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk ptB",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk ptW",
		"kkk kkk kkk",
		"kkk kkk xxx",
		"kkk kkk ptW",
		"kkk kkk kkk",
		"kkk kkk ptW",
		"kkk kkk kkk",
		"kkk kkk ptW",
		"kkk xxx kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk"]
}),
new Game({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas,
	context: ctx,
	DIMENSION,
	speed: 20,
	plan: ["its kkk kkk",
		"ptB kkk kkk",
		"kkk kkk ptB",
		"kkk kkk kkk",
		"kkk xxx ptW",
		"kkk ptB kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"xxx xxx kkk",
		"ptB kkk kkk",
		"kkk kkk kkk",
		"ptW kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"ptB kkk kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk ptB kkk",
		"kkk kkk kkk",
		"kkk kkk kkk"]
}),
new Game({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas,
	context: ctx,
	DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk its kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk xxx kkk",
		"kkk kkk kkk",
		"kkk itr kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk kkk kkk",
		"kkk ptW kkk",
		"kkk kkk kkk",
		"kkk kkk kkk"]
}),
	new Game({
		// enhanced object literals
		// 'canvas,' is the same as 'canvas: canvas,'
		canvas,
		context: ctx,
		DIMENSION,
		speed: 20,
		plan: ["kkk ptW kkk",
			"kkk kkk kkk",
			"kkk its itr",
			"kkk kkk kkk",
			"kkk xxx ptB",
			"kkk kkk kkk",
			"kkk kkk ptW",
			"xxx kkk kkk",
			"kkk kkk ptW",
			"kkk kkk kkk",
			"ptB kkk kkk",
			"kkk kkk kkk",
			"ptW kkk kkk",
			"kkk kkk kkk",
			"kkk kkk kkk",
			"ptB kkk kkk",
			"kkk kkk kkk",
			"kkk ptW kkk",
			"kkk kkk kkk",
			"kkk kkk kkk"]
	}),
	new Game({
		// enhanced object literals
		// 'canvas,' is the same as 'canvas: canvas,'
		canvas,
		context: ctx,
		DIMENSION,
		speed: 20,
		plan: ["kkk ptW kkk",
			"kkk kkk kkk",
			"kkk its itr",
			"kkk kkk kkk",
			"kkk xxx ptB",
			"kkk kkk kkk",
			"kkk kkk ptW",
			"xxx kkk kkk",
			"kkk kkk ptW",
			"kkk kkk kkk",
			"ptB kkk kkk",
			"kkk kkk kkk",
			"ptW kkk kkk",
			"kkk kkk kkk",
			"kkk kkk kkk",
			"ptB kkk kkk",
			"kkk kkk kkk",
			"kkk ptW kkk",
			"kkk kkk kkk",
			"kkk kkk kkk"]
	}),




];



function chooseGame(num) {
	// games[num].drawGrid();
	games[num].iniSetUp();
	games[num].draw();
	// games[num].play();
}


chooseGame(10);
