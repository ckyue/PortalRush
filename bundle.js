(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _jsGame = require('./js/Game');

var _jsGame2 = _interopRequireDefault(_jsGame);

// in pixels
var WIDTH = 256;
var HEIGHT = 960;
// in cell units
var UNIVERSE_LENGTH = 13;
var UNIVERSE_HEIGHT = 25;

var DIMENSION = {

	UNIVERSE_LENGTH: 13,
	UNIVERSE_HEIGHT: 25,
	CELL_LENGTH: 256 / UNIVERSE_LENGTH,
	CELL_HEIGHT: 960 / UNIVERSE_HEIGHT

};

var canvas = document.getElementById('universe');
var ctx = canvas.getContext('2d');

var games = [new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["xxx xxx xxx", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk ptB", "kkk xxx ptB", "kkk ptB kkk", "kkk xxx ptW", "kkk kkk kkk", "xxx ptW kkk", "kkk kkk kkk", "kkk xxx ptW", "kkk kkk kkk", "ptW xxx kkk", "kkk kkk kkk", "xxx xxx kkk", "kkk kkk kkk", "kkk xxx ptB", "kkk kkk kkk", "kkk ptB kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk its kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk xxx kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk"] }), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk its kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk its kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk xxx kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk ptW", "its kkk kkk", "kkk xxx kkk", "ptW kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk xxx kkk", "ptW kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk", "its kkk kkk", "kkk kkk kkk", "ptW kkk kkk", "kkk kkk kkk", "kkk xxx kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "xxx kkk kkk", "kkk kkk kkk", "ptW kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk its kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptB kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk xxx kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptB kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk its kkk", "kkk ptB kkk", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk ptB", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk xxx", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk ptW", "kkk xxx kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk its kkk", "kkk ptB kkk", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk ptB", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk xxx", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk ptW", "kkk kkk kkk", "kkk kkk ptW", "kkk xxx kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["its kkk kkk", "ptB kkk kkk", "kkk kkk ptB", "kkk kkk kkk", "kkk xxx ptW", "kkk ptB kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "xxx xxx kkk", "ptB kkk kkk", "kkk kkk kkk", "ptW kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "ptB kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk ptB kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk its kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk xxx kkk", "kkk kkk kkk", "kkk itr kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk ptW kkk", "kkk kkk kkk", "kkk its itr", "kkk kkk kkk", "kkk xxx ptB", "kkk kkk kkk", "kkk kkk ptW", "xxx kkk kkk", "kkk kkk ptW", "kkk kkk kkk", "ptB kkk kkk", "kkk kkk kkk", "ptW kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "ptB kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk"]
}), new _jsGame2['default']({
	// enhanced object literals
	// 'canvas,' is the same as 'canvas: canvas,'
	canvas: canvas,
	context: ctx,
	DIMENSION: DIMENSION,
	speed: 20,
	plan: ["kkk ptW kkk", "kkk kkk kkk", "kkk its itr", "kkk kkk kkk", "kkk xxx ptB", "kkk kkk kkk", "kkk kkk ptW", "xxx kkk kkk", "kkk kkk ptW", "kkk kkk kkk", "ptB kkk kkk", "kkk kkk kkk", "ptW kkk kkk", "kkk kkk kkk", "kkk kkk kkk", "ptB kkk kkk", "kkk kkk kkk", "kkk ptW kkk", "kkk kkk kkk", "kkk kkk kkk"]
})];

function chooseGame(num) {
	// games[num].drawGrid();
	games[num].iniSetUp();
	games[num].draw();
	// games[num].play();
}

chooseGame(10);

},{"./js/Game":3}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Obj2 = require('./Obj');

var _Obj3 = _interopRequireDefault(_Obj2);

var Character = (function (_Obj) {
  _inherits(Character, _Obj);

  function Character(state, options) {
    _classCallCheck(this, Character);

    _get(Object.getPrototypeOf(Character.prototype), "constructor", this).call(this, options);
    this.state = state;
    this.currY = this.convertPixel(options).y; //in pixel; Y DECREASES
    this.currX = this.convertPixel(options).x;
    this.options = options;
  }

  // function convertOptionsToPixel(options){
  //   var H_BLOCKS = 14;
  //   var H_DIMENTION = 256;
  //   var V_BLOCKS = 25;
  //   var V_DIMENTION = 960;
  //   var gridPixel.x = options.x * (H_DIMENTION / H_BLOCKS);
  //   var gridPixel.y = (options.y+1) * (V_DIMENTION / V_BLOCKS);
  //   return gridPixel;
  // }

  _createClass(Character, [{
    key: "initializeCharacter",
    value: function initializeCharacter(ctx) {
      //only able to access 'this' on the outside

      var x = this.currX;
      var y = this.currY;
      var imageObj = new Image();
      imageObj.onload = function () {

        ctx.drawImage(imageObj, x, y);
      };
      imageObj.src = "./images/Black2.png";

      // ctx.beginPath();

      // ctx.arc(120, 900, 17, 0, Math.PI*2, true);//character size
      // ctx.fillStyle = "#0095DD";
      // ctx.fill();
      // ctx.closePath();
    }
  }, {
    key: "rebornCharacter",
    value: function rebornCharacter(ctx) {
      var self = this;
      var bx = this.currX;
      var by = this.currY;

      setTimeout(function () {
        self.clear(ctx, bx, by);
        var x = self.convertPixel(self.options).x;
        var y = self.convertPixel(self.options).y;
        self.currX = x;
        self.currY = y;
        var imageObj = new Image();
        imageObj.onload = function () {

          ctx.drawImage(imageObj, x, y);
        };
        imageObj.src = "./images/Black2.png";
      }, 50);
    }
  }, {
    key: "log",
    value: function log() {
      console.log("doing");
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      // console.log("drawing..");

      this.clear(ctx, this.currX, this.currY);

      var dy = -1;
      this.currY += dy;

      var x = this.currX;
      var y = this.currY;
      var imageObj = new Image();
      imageObj.onload = function () {

        ctx.drawImage(imageObj, x, y);
      };
      imageObj.src = "./images/Black2.png";
    }

    // setInterval(draw ,20);//check every 20ms

  }, {
    key: "convertPixel",
    value: function convertPixel(counter) {
      // var H_BLOCKS = 14;
      // var H_DIMENTION = 256;
      // var V_BLOCKS = 25;
      // var V_DIMENTION = 960;
      var gridPixel = {
        x: counter.GridX * (this.H_DIMENTION / this.H_BLOCKS),
        y: counter.GridY * (this.V_DIMENTION / this.V_BLOCKS)
      };
      return gridPixel;
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(stillE, movingE, portals, items) {
      var collisionType;

      // //loop through every object in the map
      // for(var i = 0; i < portals.length; i++){
      //   var pixel = this.convertPixel(portals[i]);//in pixel
      //   if((this.currY == pixel.y) && (this.currX == pixel.x)){
      //     this.clear();
      //     collsionType = "portals";
      //     currX = portals[i+1].GridX;//in grid
      //     currY = portals[i+1].GridY;
      //     var imageObj = new Image();
      //     imageObj.onload = function() {

      //       ctx.drawImage(imageObj, x, y);

      //     };
      //     imageObj.src = "./images/Star2.png";

      //     // ctx.beginPath();
      //     // ctx.arc(currX + 9.14, currY, 17, 0, Math.PI*2, true);//portal size
      //     // ctx.fillStyle = "#0095DD";
      //     // ctx.fill();
      //     // ctx.closePath();
      //   }
      // }

      for (var i = 0; i < stillE.length; i++) {
        var pixel = this.convertPixel(stillE[i]); //in pixel
        // console.log(pixel.y);
        // if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
        if (this.currY < pixel.y) {
          // collsionType = "stillE";
          document.reload();
        }
      }

      for (var i = 0; i < movingE.length; i++) {
        var pixel = this.convertPixel(movingE[i]); //in pixel
        // if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
        if (this.currY == pixel.y && this.currX == pixel.x) {
          document.reload();
        }
      }

      for (var i = 0; i < items.length; i++) {
        var pixel = this.convertPixel(items[i]); //in pixel
        if (this.currY == pixel.y && this.currX == pixel.x) {
          itemCollected++;
          console.log(itemCollected);
        }
      }
    }

    // setInterval(checkCollision ,20);//check every 20ms
    // document.addEventListener("keydown", changeState);

  }, {
    key: "changeState",
    value: function changeState(e) {
      //register a event listener
      var key = e.keyCode ? e.keyCode : e.which;
      if (key == 38) {
        console.log("You Pressed the fking Space");
        switch (state) {
          case 0:
            state++;
            console.log("White");
            break;
          case 1:
            state--;
            console.log("Black");
            break;
        }
      }
    }
  }]);

  return Character;
})(_Obj3["default"]);

module.exports = Character;

},{"./Obj":4}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Character = require('./Character');

var _Character2 = _interopRequireDefault(_Character);

var _Obj = require('./Obj');

var _Obj2 = _interopRequireDefault(_Obj);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

// import Enemy from ./Character.js;

var Game = (function () {
	// set up instance variables

	function Game(options) {
		_classCallCheck(this, Game);

		this.canvas = options.canvas;
		this.ctx = options.context;
		this.DIMENSION = options.DIMENSION;
		this.universeElem = document.getElementById('universe');
		this.speed = options.speed;
		this.plan = options.plan;
		this.Grid = [];
		this.portalsB = [];
		this.portalsW = [];
		this.itrs = [];
		this.itss = [];
		this.movingE = [];
		this.stillE = [];
		this.character = new _Character2['default'](0, { GridX: 5, GridY: 23 });
		this.point = 0;
		this.win = false;
		this.H_BLOCKS = 13;
		this.H_DIMENTION = 256;
		this.H = this.H_DIMENSION / this.H_BLOCKS;
		this.V_BLOCKS = 25;
		this.V_DIMENTION = 960;
		this.V = this.V_DIMENSION / this.V_BLOCKS;
		this.intervalID = 0;
		this.nowptB;
		this.nowptW;
	}

	// initial set up

	_createClass(Game, [{
		key: 'iniSetUp',
		value: function iniSetUp() {
			// // Note: using bind to pass the class' context to the callbacks
			// // not sure if this can be improved.
			// // this.universeElem.addEventListener('click', loopCells.bindthis());
			// // when user click, start the game
			var self = this;
			document.getElementById('start').addEventListener('click', function () {
				self.play();
			});

			console.log(this.plan);
			this.parse(this.plan);

			this.character.initializeCharacter(this.ctx);

			this.nowptB = this.portalsB.length - 1;
			this.nowptW = this.portalsW.length - 1;

			// draw(this.Grid) {

			// }
		}
	}, {
		key: 'parse',
		value: function parse(plan) {
			// let grid = [];

			for (var i = 0; i < plan.length; i++) {
				var array = plan[i].split(" ");

				for (var j = 0; j < array.length; j++) {
					if (array[j] == "xxx") {
						this.stillE.push(new _Obj2['default']({ GridX: 1 + 3 * j + j, GridY: i }));
					} else if (array[j] == "moe") {
						this.Enemies.push(new movingE({}));
					} else if (array[j] == "ptW") {
						this.portalsW.push(new _Portal2['default'](1, { GridX: 1 + 3 * j + j, GridY: i }));
					} else if (array[j] == "ptB") {
						this.portalsB.push(new _Portal2['default'](0, { GridX: 1 + 3 * j + j, GridY: i }));
					} else if (array[j] == "itr") {
						this.itrs.push(new _Obj2['default']({ GridX: 1 + 3 * j + j, GridY: i }));
					} else if (array[j] == "its") {
						this.itss.push(new _Obj2['default']({ GridX: 1 + 3 * j + j, GridY: i }));
					}
				}
			}

			// return grid;
		}
	}, {
		key: 'play',
		value: function play() {
			// remove god mode
			// this.universeElem.removeEventListener('click', loopCells);
			// game loop
			// console.log(this.speed);

			var self = this;

			this.intervalID = setInterval(function () {
				self.character.draw(self.ctx);
				self.checkCollision();
			}, 20);

			// setInterval(this.character.checkCollision(this.portals,this.enemies,this.items), this.speed);
			// document.addEventListener("keydown", this.character.changeState)
		}
	}, {
		key: 'logging',
		value: function logging() {
			console.log("logging");
		}

		// draw grid
	}, {
		key: 'drawGrid',
		value: function drawGrid() {
			this.ctx.strokeStyle = '#777';
			this.ctx.lineWidth = 1;
			// vertical lines
			for (var i = 1; i < this.DIMENSION.UNIVERSE_LENGTH; i++) {
				this.ctx.beginPath();
				this.ctx.moveTo(this.DIMENSION.CELL_LENGTH * i, 0);
				this.ctx.lineTo(this.DIMENSION.CELL_LENGTH * i, this.DIMENSION.UNIVERSE_HEIGHT * this.DIMENSION.CELL_HEIGHT);
				this.ctx.stroke();
			}
			// horizontal lines
			for (var i = 1; i < this.DIMENSION.UNIVERSE_HEIGHT; i++) {
				this.ctx.beginPath();
				this.ctx.moveTo(0, this.DIMENSION.CELL_HEIGHT * i);
				this.ctx.lineTo(this.DIMENSION.UNIVERSE_LENGTH * this.DIMENSION.CELL_LENGTH, this.DIMENSION.CELL_HEIGHT * i);
				this.ctx.stroke();
			}
		}
	}, {
		key: 'draw',
		value: function draw() {
			var _this = this;

			console.log(this.portalsB);
			console.log(this.portalsW);
			//draw static stuff	
			// console.log(this.Grid);
			var ctx = this.ctx;
			var xshift = this.DIMENSION.CELL_LENGTH;
			var yshift = this.DIMENSION.CELL_HEIGHT;

			var _loop = function () {
				var x = _this.stillE[i].GridX;
				var y = _this.stillE[i].GridY;

				imageObj = new Image();

				imageObj.onload = function () {

					ctx.drawImage(this, x * xshift, y * yshift);
				};
				imageObj.src = "./images/Obstacle.png";

				// this.ctx.fillRect(,,3*this.DIMENSION.CELL_LENGTH,this.DIMENSION.CELL_HEIGHT);
			};

			for (var i = 0; i < this.stillE.length; i++) {
				var imageObj;

				_loop();
			}

			var _loop2 = function () {
				var x = _this.portalsB[i].GridX;
				var y = _this.portalsB[i].GridY;

				imageObj = new Image();

				imageObj.onload = function () {

					ctx.drawImage(this, x * xshift, y * yshift);
				};
				imageObj.src = "./images/potB.png";
			};

			for (var i = 0; i < this.portalsB.length; i++) {
				var imageObj;

				_loop2();
			}

			var _loop3 = function () {
				var x = _this.portalsW[i].GridX;
				var y = _this.portalsW[i].GridY;

				imageObj = new Image();

				imageObj.onload = function () {

					ctx.drawImage(this, x * xshift, y * yshift);
				};
				imageObj.src = "./images/potW.png";
			};

			for (var i = 0; i < this.portalsW.length; i++) {
				var imageObj;

				_loop3();
			}

			var _loop4 = function () {
				var x = _this.itss[i].GridX;
				var y = _this.itss[i].GridY;

				imageObj = new Image();

				imageObj.onload = function () {

					ctx.drawImage(this, x * xshift, y * yshift);
				};
				imageObj.src = "./images/Star2.png";
			};

			for (var i = 0; i < this.itss.length; i++) {
				var imageObj;

				_loop4();
			}

			var _loop5 = function () {
				var x = _this.itrs[i].GridX;
				var y = _this.itrs[i].GridY;

				imageObj = new Image();

				imageObj.onload = function () {

					ctx.drawImage(this, x * xshift, y * yshift);
				};
				imageObj.src = "./images/reverse.png";
			};

			for (var i = 0; i < this.itrs.length; i++) {
				var imageObj;

				_loop5();
			}

			// for (var i = 0; i < this.items.length; i++) {
			// 	let x = this.portalsW[i].GridX;
			// 	let y = this.portalsW[i].GridY;

			// 	var imageObj = new Image();
			// 	imageObj.onload = function() {

			// 		ctx.drawImage(this, x * xshift, y * yshift);

			// 	};
			// 	imageObj.src = "./images/potW.png";

			// }
		}

		// for (var i=0;i<this.portals.length;i++) {
		// 	ctx.fillStyle="#FF0000";
		// 	this.ctx.fillRect(i*CELL_LENGTH,i*CELL_HEIGHT,3*CELL_LENGTH,CELL_HEIGHT);
		// }

		// for (var i=0;i<this.portals.length;i++) {
		// 	ctx.fillStyle="blue";
		// 	this.ctx.fillRect(i*CELL_LENGTH,i*CELL_HEIGHT,3*CELL_LENGTH,CELL_HEIGHT);
		// }

		// for (var i=0;i<this.portals.length;i++) {
		// 	ctx.fillStyle="yellow";
		// 	this.ctx.fillRect(i*CELL_LENGTH,i*CELL_HEIGHT,3*CELL_LENGTH,CELL_HEIGHT);
		// }

	}, {
		key: 'checkCollision',
		value: function checkCollision() {
			// var collisionType;

			// //loop through every object in the map
			console.log(this.portalsB[this.nowptB]);

			var pixel = convertPixel(this.portalsB[this.nowptB]); //in pixel
			console.log(pixel.x);
			console.log(this.character.currX);
			if (this.character.currY < pixel.y && Math.abs(this.character.currX - pixel.x) < 10) {
				console.log("chuan");
				this.character.clear(this.ctx, 60, 60);
				this.nowptB--;

				pixel = convertPixel(this.protalsB[nowptB]);
				this.character.currX = pixel.x; //in grid
				this.character.currY = pixel.y;
				var imageObj = new Image();
				imageObj.onload = function () {

					ctx.drawImage(this, pixel.x, pixel.y);
				};
				imageObj.src = "./images/Black2.png";

				// ctx.beginPath();
				// ctx.arc(currX + 9.14, currY, 17, 0, Math.PI*2, true);//portal size
				// ctx.fillStyle = "#0095DD";
				// ctx.fill();
				// ctx.closePath();
			} else if (this.character.currY < pixel.y) {
					this.nowptB--;
					// this.nowptB= (this.nowptB+this.portalsB.length-1)%this.portalsB.length;
				}

			// for (var i = 0; i < this.portalsW.length; i++) {
			// 	var pixel = convertPixel(this.portalsW[i]);//in pixel
			// 	if ((this.character.currY == pixel.y) && (this.character.currX == pixel.x) && (this.portalsW[i].state == this.character.state)) {
			// 		this.character.clear(this.ctx, pixel.x, pixel.y);
			// 		collsionType = "portals";
			// 		pixel = convertPixel(this.protalsW[i - 1]);
			// 		this.character.currX = pixel.x//in grid
			// 		this.character.currY = pixel.y;
			// 		var imageObj = new Image();
			// 		imageObj.onload = function() {

			// 			ctx.drawImage(this, pixel.x, pixel.y);

			// 		};
			// 		imageObj.src = "./images/Black2.png";

			// 		// ctx.beginPath();
			// 		// ctx.arc(currX + 9.14, currY, 17, 0, Math.PI*2, true);//portal size
			// 		// ctx.fillStyle = "#0095DD";
			// 		// ctx.fill();
			// 		// ctx.closePath();
			// 	}
			// }

			for (var i = 0; i < this.stillE.length; i++) {
				var pixel = convertPixel(this.stillE[i]); //in pixel
				// console.log(pixel.y);
				// if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
				if (this.character.currY < pixel.y + 38.4) {
					// collsionType = "stillE";
					clearInterval(this.intervalID);
					this.character.rebornCharacter(this.ctx);
					console.log("i am executed");
					return;
				}
			}

			// for (var i = 0; i < this.movingE.length; i++) {
			// 	var pixel = convertPixel(this.movingE[i]);//in pixel
			// 	// if(this.currY > i.y && this.currY < i.y - 38.4 && (currX > i.x && currX < i.x + 18.28){
			// 	if ((this.character.currY < pixel.y) && (this.currX == pixel.x)) {
			// 		document.reload();

			// 	}
			// }

			// for (var i = 0; i < this.items.length; i++) {
			// 	var pixel = convertPixel(this.items[i]);//in pixel
			// 	if ((this.currY < pixel.y) && (this.currX == pixel.x)) {
			// 		this.point++;
			// 		console.log(this.point);
			// 	}
			// }
		}
	}]);

	return Game;
})();

function convertPixel(counter) {
	var H_BLOCKS = 13;
	var H_DIMENTION = 256;
	var V_BLOCKS = 25;
	var V_DIMENTION = 960;
	var gridPixel = {
		x: counter.GridX * (H_DIMENTION / H_BLOCKS),
		y: counter.GridY * (V_DIMENTION / V_BLOCKS)
	};
	return gridPixel;
}

// Private methods
// --------------------

// Loop over the cells
function loopCells(e) {
	var universeElem = document.getElementById('universe');
	var pageX = e.pageX - universeElem.offsetLeft;
	var pageY = e.pageY - universeElem.offsetTop;

	for (var i = 0; i < this.universe.height; i++) {
		for (var j = 0; j < this.universe.length; j++) {
			var cell = this.universe.cells[i][j];
			handleClick(this, cell, pageX, pageY);
		}
	}
}

// give life or death to the cell clicked.
// Note: because loopCells is a callback which has the class context
// bound to it, this function which is called in the callback doesn't get the
// context implicitly, so I must pass it. Doesn't feel clean...
// function handleClick(self, cell, pageX, pageY){
// 	if (pageX > cell.x && pageX < cell.x+self.universe.cellLength &&
// 				pageY > cell.y && pageY < cell.y+self.universe.cellHeight ) {
// 		changeCells(self, cell);
// 	}
// }

// 1 step = 1 generation
function step() {}

/*
*	pass the cell through the 4 rules. 
	Note: cells should not update here, since altering 1 before you can
	analyze the others will cause erroneous outcomes.
*/
function transitions(self, cell, cellsToChange) {
	var uniLength = self.universe.length;
	var uniHeight = self.universe.height;
	var neighboursAlive = 0;
	// Go through the neighbours of each cell.
	for (var i = 0; i < 8; i++) {
		var neighbourID = cell.neighbours[i];
		if (neighbourID >= uniLength * uniHeight || neighbourID < 0) continue;
		var neighbour = getCellById(self, neighbourID);
		if (neighbour.state === 1) neighboursAlive++;
	}
	if (cell.state === 1) {
		// ze life rules
		// -------------------
		// 1) Any live cell with fewer than two live neighbours dies, as
		// if caused by under-population.
		// 2) Any live cell with two or three live neighbours lives on to
		// the next generation.
		if (neighboursAlive < 2) cellsToChange.push(cell.id);
		// 3) Any live cell with more than three live neighbours dies, as if
		// by overcrowding.
		else if (neighboursAlive > 3) cellsToChange.push(cell.id);
	} else {
		// 4) Any dead cell with exactly three live neighbours becomes a
		// live cell, as if by reproduction.
		if (neighboursAlive === 3) cellsToChange.push(cell.id);
	}
}

function changeCells(self, cell) {
	self.ctx.fillStyle = cell.state ? 'white' : '#333';
	self.ctx.fillRect(cell.x + 1, cell.y + 1, self.universe.cellLength - 2, self.universe.cellHeight - 2);
	cell.state = cell.state ? 0 : 1;
}

function getCellById(self, id) {
	var row = Math.floor(id / self.universe.length);
	var column = id % self.universe.length;
	return self.universe.cells[row][column];
}

module.exports = Game;

},{"./Character":2,"./Obj":4,"./Portal":5}],4:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Obj = (function () {
		function Obj(options) {
				_classCallCheck(this, Obj);

				this.GridX = options.GridX;
				this.GridY = options.GridY;
				// this.state = state;//0 is a color0, 1 is color1
				this.H_BLOCKS = 13;
				this.H_DIMENTION = 256;
				this.V_BLOCKS = 25;
				this.V_DIMENTION = 960;
		}

		//  convertPixel(counter) {
		//   var x = counter.GridX * (this.H_DIMENTION / this.H_BLOCKS);
		//   console.log("xis"+x);
		//   var gridPixel = {
		// 	  x: counter.GridX * (this.H_DIMENTION / this.H_BLOCKS),
		// 	  y: (counter.GridY + 1) * (this.V_DIMENTION / this.V_BLOCKS)
		//   }
		//    return gridPixel;
		// }

		_createClass(Obj, [{
				key: "clear",
				value: function clear(ctx, x, y) {
						// console.log(this.H_DIMENTION / this.H_BLOCKS);
						// // console.log(this.GridX);
						// var x = this.GridX * (this.H_DIMENTION / this.H_BLOCKS);
						// var y = (this.GridY) * (this.V_DIMENTION / this.V_BLOCKS);
						// console.log("x is "+ x);
						// console.log("y is " + y);

						// ctx.clearRect(x,y, 3 * (this.H_DIMENTION / this.H_BLOCKS), 1+(this.V_DIMENTION / this.V_BLOCKS));
						ctx.clearRect(x, y, 60, 50);
				}
		}]);

		return Obj;
})();

module.exports = Obj;

},{}],5:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Obj2 = require('./Obj');

var _Obj3 = _interopRequireDefault(_Obj2);

var Portal = (function (_Obj) {
  _inherits(Portal, _Obj);

  function Portal(state, options) {
    _classCallCheck(this, Portal);

    _get(Object.getPrototypeOf(Portal.prototype), 'constructor', this).call(this, options);
    this.state = state;
  }

  return Portal;
})(_Obj3['default']);

module.exports = Portal;

},{"./Obj":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvQWxhbi9Eb2N1bWVudHMvVVdhdGVybG9vL0dpdGh1Yi9wb3J0YWwvYXBwLmpzIiwiL1VzZXJzL0FsYW4vRG9jdW1lbnRzL1VXYXRlcmxvby9HaXRodWIvcG9ydGFsL2pzL0NoYXJhY3Rlci5qcyIsIi9Vc2Vycy9BbGFuL0RvY3VtZW50cy9VV2F0ZXJsb28vR2l0aHViL3BvcnRhbC9qcy9HYW1lLmpzIiwiL1VzZXJzL0FsYW4vRG9jdW1lbnRzL1VXYXRlcmxvby9HaXRodWIvcG9ydGFsL2pzL09iai5qcyIsIi9Vc2Vycy9BbGFuL0RvY3VtZW50cy9VV2F0ZXJsb28vR2l0aHViL3BvcnRhbC9qcy9Qb3J0YWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3NCQ0FpQixXQUFXOzs7OztBQUc1QixJQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDbEIsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDOztBQUVuQixJQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDOztBQUUzQixJQUFNLFNBQVMsR0FBRzs7QUFFakIsZ0JBQWUsRUFBRSxFQUFFO0FBQ25CLGdCQUFlLEVBQUMsRUFBRTtBQUNsQixZQUFXLEVBQUUsR0FBRyxHQUFDLGVBQWU7QUFDaEMsWUFBVyxFQUFFLEdBQUcsR0FBQyxlQUFlOztDQUVoQyxDQUFBOztBQUVELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDakQsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFbEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyx3QkFBUzs7O0FBR3JCLE9BQU0sRUFBTixNQUFNO0FBQ04sUUFBTyxFQUFFLEdBQUc7QUFDWixVQUFTLEVBQVQsU0FBUztBQUNULE1BQUssRUFBRSxFQUFFO0FBQ1QsS0FBSSxFQUFFLENBQUMsYUFBYSxFQUNuQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsQ0FBQztDQUNmLENBQUMsRUFBRSx3QkFBUzs7O0FBR1osT0FBTSxFQUFOLE1BQU07QUFDTixRQUFPLEVBQUUsR0FBRztBQUNaLFVBQVMsRUFBVCxTQUFTO0FBQ1QsTUFBSyxFQUFFLEVBQUU7QUFDVCxLQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ25CLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsQ0FBQyxFQUFDLENBQUMsRUFDbEIsd0JBQVM7OztBQUdSLE9BQU0sRUFBTixNQUFNO0FBQ04sUUFBTyxFQUFFLEdBQUc7QUFDWixVQUFTLEVBQVQsU0FBUztBQUNULE1BQUssRUFBRSxFQUFFO0FBQ1QsS0FBSSxFQUFFLENBQUMsYUFBYSxFQUNuQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQUM7Q0FDZixDQUFDLEVBQ0Ysd0JBQVM7OztBQUdSLE9BQU0sRUFBTixNQUFNO0FBQ04sUUFBTyxFQUFFLEdBQUc7QUFDWixVQUFTLEVBQVQsU0FBUztBQUNULE1BQUssRUFBRSxFQUFFO0FBQ1QsS0FBSSxFQUFFLENBQUMsYUFBYSxFQUNuQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQUU7Q0FDaEIsQ0FBQyxFQUNGLHdCQUFTOzs7QUFHUixPQUFNLEVBQU4sTUFBTTtBQUNOLFFBQU8sRUFBRSxHQUFHO0FBQ1osVUFBUyxFQUFULFNBQVM7QUFDVCxNQUFLLEVBQUUsRUFBRTtBQUNULEtBQUksRUFBRSxDQUFDLGFBQWEsRUFDbkIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxDQUFDO0NBQ2YsQ0FBQyxFQUNGLHdCQUFTOzs7QUFHUixPQUFNLEVBQU4sTUFBTTtBQUNOLFFBQU8sRUFBRSxHQUFHO0FBQ1osVUFBUyxFQUFULFNBQVM7QUFDVCxNQUFLLEVBQUUsRUFBRTtBQUNULEtBQUksRUFBRSxDQUFDLGFBQWEsRUFDbkIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxDQUFDO0NBQ2YsQ0FBQyxFQUNGLHdCQUFTOzs7QUFHUixPQUFNLEVBQU4sTUFBTTtBQUNOLFFBQU8sRUFBRSxHQUFHO0FBQ1osVUFBUyxFQUFULFNBQVM7QUFDVCxNQUFLLEVBQUUsRUFBRTtBQUNULEtBQUksRUFBRSxDQUFDLGFBQWEsRUFDbkIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxDQUFDO0NBQ2YsQ0FBQyxFQUNGLHdCQUFTOzs7QUFHUixPQUFNLEVBQU4sTUFBTTtBQUNOLFFBQU8sRUFBRSxHQUFHO0FBQ1osVUFBUyxFQUFULFNBQVM7QUFDVCxNQUFLLEVBQUUsRUFBRTtBQUNULEtBQUksRUFBRSxDQUFDLGFBQWEsRUFDbkIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLENBQUM7Q0FDZixDQUFDLEVBRUYsd0JBQVM7OztBQUdSLE9BQU0sRUFBTixNQUFNO0FBQ04sUUFBTyxFQUFFLEdBQUc7QUFDWixVQUFTLEVBQVQsU0FBUztBQUNULE1BQUssRUFBRSxFQUFFO0FBQ1QsS0FBSSxFQUFFLENBQUMsYUFBYSxFQUNuQixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsQ0FBQztDQUNmLENBQUMsRUFDRix3QkFBUzs7O0FBR1IsT0FBTSxFQUFOLE1BQU07QUFDTixRQUFPLEVBQUUsR0FBRztBQUNaLFVBQVMsRUFBVCxTQUFTO0FBQ1QsTUFBSyxFQUFFLEVBQUU7QUFDVCxLQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQ25CLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxDQUFDO0NBQ2YsQ0FBQyxFQUNGLHdCQUFTOzs7QUFHUixPQUFNLEVBQU4sTUFBTTtBQUNOLFFBQU8sRUFBRSxHQUFHO0FBQ1osVUFBUyxFQUFULFNBQVM7QUFDVCxNQUFLLEVBQUUsRUFBRTtBQUNULEtBQUksRUFBRSxDQUFDLGFBQWEsRUFDbkIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxDQUFDO0NBQ2YsQ0FBQyxFQUNELHdCQUFTOzs7QUFHUixPQUFNLEVBQU4sTUFBTTtBQUNOLFFBQU8sRUFBRSxHQUFHO0FBQ1osVUFBUyxFQUFULFNBQVM7QUFDVCxNQUFLLEVBQUUsRUFBRTtBQUNULEtBQUksRUFBRSxDQUFDLGFBQWEsRUFDbkIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxDQUFDO0NBQ2YsQ0FBQyxFQUNGLHdCQUFTOzs7QUFHUixPQUFNLEVBQU4sTUFBTTtBQUNOLFFBQU8sRUFBRSxHQUFHO0FBQ1osVUFBUyxFQUFULFNBQVM7QUFDVCxNQUFLLEVBQUUsRUFBRTtBQUNULEtBQUksRUFBRSxDQUFDLGFBQWEsRUFDbkIsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxFQUNiLGFBQWEsRUFDYixhQUFhLEVBQ2IsYUFBYSxDQUFDO0NBQ2YsQ0FBQyxDQUtGLENBQUM7O0FBSUYsU0FBUyxVQUFVLENBQUMsR0FBRyxFQUFFOztBQUV4QixNQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdEIsTUFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDOztDQUVsQjs7QUFHRCxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztvQkNyWkMsT0FBTzs7OztJQUVqQixTQUFTO1lBQVQsU0FBUzs7QUFDRixXQURQLFNBQVMsQ0FDRCxLQUFLLEVBQUMsT0FBTyxFQUFDOzBCQUR0QixTQUFTOztBQUVYLCtCQUZFLFNBQVMsNkNBRUwsT0FBTyxFQUFFO0FBQ2YsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsUUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQyxRQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFDLFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0dBQ3hCOzs7Ozs7Ozs7Ozs7ZUFQRyxTQUFTOztXQW1CSyw2QkFBQyxHQUFHLEVBQUM7OztBQUlwQixVQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFFO0FBQ3BCLFVBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUU7QUFDcEIsVUFBSSxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUMzQixjQUFRLENBQUMsTUFBTSxHQUFHLFlBQVc7O0FBRTNCLFdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztPQUUvQixDQUFDO0FBQ0YsY0FBUSxDQUFDLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQzs7Ozs7Ozs7S0FRdkM7OztXQUVlLHlCQUFDLEdBQUcsRUFBRTtBQUNwQixVQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsVUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNwQixVQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOztBQUVwQixnQkFBVSxDQUFDLFlBQVc7QUFDcEIsWUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLFlBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQyxZQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUMsWUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZixZQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNmLFlBQUksUUFBUSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7QUFDM0IsZ0JBQVEsQ0FBQyxNQUFNLEdBQUcsWUFBVzs7QUFFM0IsYUFBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBRS9CLENBQUM7QUFDRixnQkFBUSxDQUFDLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQztPQUN0QyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ1I7OztXQUVFLGVBQUc7QUFDSixhQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3RCOzs7V0FFSSxjQUFDLEdBQUcsRUFBRTs7O0FBSVQsVUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRXRDLFVBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ1osVUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7O0FBRWpCLFVBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDbkIsVUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNuQixVQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQzNCLGNBQVEsQ0FBQyxNQUFNLEdBQUcsWUFBVzs7QUFFM0IsV0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO09BRS9CLENBQUM7QUFDRixjQUFRLENBQUMsR0FBRyxHQUFHLHFCQUFxQixDQUFDO0tBRXRDOzs7Ozs7V0FJWSxzQkFBQyxPQUFPLEVBQUM7Ozs7O0FBS3BCLFVBQUksU0FBUyxHQUFHO0FBQ2QsU0FBQyxFQUFFLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBLEFBQUM7QUFDckQsU0FBQyxFQUFFLEFBQUMsT0FBTyxDQUFDLEtBQUssSUFBSyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUEsQUFBQztPQUN4RCxDQUFBO0FBQ0QsYUFBTyxTQUFTLENBQUM7S0FDbEI7OztXQUdjLHdCQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQztBQUMzQyxVQUFJLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQmxCLFdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO0FBQ3BDLFlBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7OztBQUd6QyxZQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBQzs7QUFFdEIsa0JBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNuQjtPQUNGOztBQUVELFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZDLFlBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTFDLFlBQUksQUFBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQU0sSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxBQUFDLEVBQUU7QUFDdEQsa0JBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNuQjtPQUNGOztBQUdELFdBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO0FBQ25DLFlBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEMsWUFBRyxBQUFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsSUFBTSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLEFBQUMsRUFBQztBQUNwRCx1QkFBYSxFQUFHLENBQUM7QUFDakIsaUJBQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDNUI7T0FDRjtLQUNGOzs7Ozs7O1dBTVcscUJBQUMsQ0FBQyxFQUFDOztBQUViLFVBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzFDLFVBQUksR0FBRyxJQUFJLEVBQUUsRUFBRTtBQUNiLGVBQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUMzQyxnQkFBTyxLQUFLO0FBQ1YsZUFBSyxDQUFDO0FBQ0osaUJBQUssRUFBRSxDQUFDO0FBQ1IsbUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsa0JBQU07QUFBQSxBQUNSLGVBQUssQ0FBQztBQUNKLGlCQUFLLEVBQUUsQ0FBQztBQUNSLG1CQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JCLGtCQUFNO0FBQUEsU0FDVDtPQUVEO0tBQ0g7OztTQW5MRyxTQUFTOzs7QUFzTGYsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7Ozs7Ozs7Ozs7O3lCQ3hMTCxhQUFhOzs7O21CQUNuQixPQUFPOzs7O3NCQUNKLFVBQVU7Ozs7OztJQUt2QixJQUFJOzs7QUFFRSxVQUZOLElBQUksQ0FFRyxPQUFPLEVBQUM7d0JBRmYsSUFBSTs7QUFHUixNQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDN0IsTUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQzNCLE1BQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztBQUNuQyxNQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEQsTUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQzNCLE1BQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNmLE1BQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLE1BQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLE1BQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2YsTUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZixNQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNsQixNQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQixNQUFJLENBQUMsU0FBUyxHQUFHLDJCQUFjLENBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7QUFDckQsTUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZixNQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUNqQixNQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixNQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUN2QixNQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUMxQyxNQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixNQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUN2QixNQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUMxQyxNQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNwQixNQUFJLENBQUMsTUFBTSxDQUFDO0FBQ1osTUFBSSxDQUFDLE1BQU0sQ0FBQztFQUVaOzs7O2NBN0JJLElBQUk7O1NBZ0NELG9CQUFHOzs7OztBQUtWLE9BQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNmLFdBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQy9CLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO0FBQ3JDLFFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNaLENBQUMsQ0FBQzs7QUFFSCxVQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixPQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFdEIsT0FBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRTdDLE9BQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDO0FBQ3JDLE9BQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDOzs7OztHQUt0Qzs7O1NBSUksZUFBQyxJQUFJLEVBQUU7OztBQUdYLFFBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFO0FBQzlCLFFBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRy9CLFNBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxLQUFLLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFFO0FBQy9CLFNBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTtBQUNyQixVQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUd4RCxNQUVJLElBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTtBQUMxQixVQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO01BRW5DLE1BQ0ksSUFBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFO0FBQzFCLFVBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHdCQUFXLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztNQUM5RCxNQUVJLElBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTtBQUMxQixVQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyx3QkFBWSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7TUFDL0QsTUFDSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDM0IsVUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDNUQsTUFDSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDM0IsVUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFD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QUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDNUI7OztTQW5DRyxHQUFHOzs7QUFzQ1QsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7b0JDdENMLE9BQU87Ozs7SUFFakIsTUFBTTtZQUFOLE1BQU07O0FBQ0MsV0FEUCxNQUFNLENBQ0UsS0FBSyxFQUFDLE9BQU8sRUFBQzswQkFEdEIsTUFBTTs7QUFFUiwrQkFGRSxNQUFNLDZDQUVGLE9BQU8sRUFBRTtBQUNmLFFBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0dBQ3BCOztTQUpHLE1BQU07OztBQVNaLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBHYW1lIGZyb20gJy4vanMvR2FtZSc7XG5cbi8vIGluIHBpeGVsc1xuY29uc3QgV0lEVEggPSAyNTY7XG5jb25zdCBIRUlHSFQgPSA5NjA7XG4vLyBpbiBjZWxsIHVuaXRzXG5jb25zdCBVTklWRVJTRV9MRU5HVEggPSAxMztcbmNvbnN0IFVOSVZFUlNFX0hFSUdIVCA9IDI1O1xuXG5jb25zdCBESU1FTlNJT04gPSB7XG5cblx0VU5JVkVSU0VfTEVOR1RIOiAxMyxcblx0VU5JVkVSU0VfSEVJR0hUOjI1LFxuXHRDRUxMX0xFTkdUSDogMjU2L1VOSVZFUlNFX0xFTkdUSCxcblx0Q0VMTF9IRUlHSFQ6IDk2MC9VTklWRVJTRV9IRUlHSFRcblxufVxuXG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG52YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbnZhciBnYW1lcyA9IFtuZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJ4eHggeHh4IHh4eFwiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIHB0QlwiLFxuXHRcdFwia2trIHh4eCBwdEJcIixcblx0XHRcImtrayBwdEIga2trXCIsXG5cdFx0XCJra2sgeHh4IHB0V1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCBwdFdcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJwdFcgeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInh4eCB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCBwdEJcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRCIGtra1wiXVxufSksIG5ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgaXRzIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiXX0pLFxubmV3IEdhbWUoe1xuXHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0Ly8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG5cdGNhbnZhcyxcblx0Y29udGV4dDogY3R4LFxuXHRESU1FTlNJT04sXG5cdHNwZWVkOiAyMCxcblx0cGxhbjogW1wia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBpdHMga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCJdXG59KSxcbm5ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgaXRzIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayB4eHgga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLF1cbn0pLFxubmV3IEdhbWUoe1xuXHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0Ly8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG5cdGNhbnZhcyxcblx0Y29udGV4dDogY3R4LFxuXHRESU1FTlNJT04sXG5cdHNwZWVkOiAyMCxcblx0cGxhbjogW1wia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJpdHMga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCBra2tcIixcblx0XHRcInB0VyBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgeHh4IGtra1wiLFxuXHRcdFwicHRXIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCJdXG59KSxcbm5ldyBHYW1lKHtcblx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdC8vICdjYW52YXMsJyBpcyB0aGUgc2FtZSBhcyAnY2FudmFzOiBjYW52YXMsJ1xuXHRjYW52YXMsXG5cdGNvbnRleHQ6IGN0eCxcblx0RElNRU5TSU9OLFxuXHRzcGVlZDogMjAsXG5cdHBsYW46IFtcImtrayBra2sga2trXCIsXG5cdFx0XCJpdHMga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInB0VyBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJ4eHgga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcInB0VyBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiXVxufSksXG5uZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgaXRzIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRCIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIl1cbn0pLFxubmV3IEdhbWUoe1xuXHQvLyBlbmhhbmNlZCBvYmplY3QgbGl0ZXJhbHNcblx0Ly8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG5cdGNhbnZhcyxcblx0Y29udGV4dDogY3R4LFxuXHRESU1FTlNJT04sXG5cdHNwZWVkOiAyMCxcblx0cGxhbjogW1wia2trIGl0cyBra2tcIixcblx0XHRcImtrayBwdEIga2trXCIsXG5cdFx0XCJra2sga2trIHB0V1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIHB0QlwiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIHB0V1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sgeHh4XCIsXG5cdFx0XCJra2sga2trIHB0V1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcImtrayB4eHgga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIl1cbn0pLFxuXG5uZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJra2sgaXRzIGtra1wiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sgcHRCXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayB4eHhcIixcblx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBwdFdcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIHB0V1wiLFxuXHRcdFwia2trIHh4eCBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiXVxufSksXG5uZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJpdHMga2trIGtra1wiLFxuXHRcdFwicHRCIGtrayBra2tcIixcblx0XHRcImtrayBra2sgcHRCXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCBwdFdcIixcblx0XHRcImtrayBwdEIga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0VyBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJ4eHggeHh4IGtra1wiLFxuXHRcdFwicHRCIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJwdFcga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJwdEIga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHB0QiBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiXVxufSksXG5uZXcgR2FtZSh7XG5cdC8vIGVuaGFuY2VkIG9iamVjdCBsaXRlcmFsc1xuXHQvLyAnY2FudmFzLCcgaXMgdGhlIHNhbWUgYXMgJ2NhbnZhczogY2FudmFzLCdcblx0Y2FudmFzLFxuXHRjb250ZXh0OiBjdHgsXG5cdERJTUVOU0lPTixcblx0c3BlZWQ6IDIwLFxuXHRwbGFuOiBbXCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgcHRXIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgaXRzIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIHh4eCBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sgaXRyIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIixcblx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XCJra2sga2trIGtra1wiLFxuXHRcdFwia2trIGtrayBra2tcIl1cbn0pLFxuXHRuZXcgR2FtZSh7XG5cdFx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdFx0Ly8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG5cdFx0Y2FudmFzLFxuXHRcdGNvbnRleHQ6IGN0eCxcblx0XHRESU1FTlNJT04sXG5cdFx0c3BlZWQ6IDIwLFxuXHRcdHBsYW46IFtcImtrayBwdFcga2trXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcImtrayBpdHMgaXRyXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcImtrayB4eHggcHRCXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XHRcInh4eCBra2sga2trXCIsXG5cdFx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcInB0QiBra2sga2trXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcInB0VyBra2sga2trXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcInB0QiBra2sga2trXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcImtrayBra2sga2trXCJdXG5cdH0pLFxuXHRuZXcgR2FtZSh7XG5cdFx0Ly8gZW5oYW5jZWQgb2JqZWN0IGxpdGVyYWxzXG5cdFx0Ly8gJ2NhbnZhcywnIGlzIHRoZSBzYW1lIGFzICdjYW52YXM6IGNhbnZhcywnXG5cdFx0Y2FudmFzLFxuXHRcdGNvbnRleHQ6IGN0eCxcblx0XHRESU1FTlNJT04sXG5cdFx0c3BlZWQ6IDIwLFxuXHRcdHBsYW46IFtcImtrayBwdFcga2trXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcImtrayBpdHMgaXRyXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcImtrayB4eHggcHRCXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XHRcInh4eCBra2sga2trXCIsXG5cdFx0XHRcImtrayBra2sgcHRXXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcInB0QiBra2sga2trXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcInB0VyBra2sga2trXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcInB0QiBra2sga2trXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcImtrayBwdFcga2trXCIsXG5cdFx0XHRcImtrayBra2sga2trXCIsXG5cdFx0XHRcImtrayBra2sga2trXCJdXG5cdH0pLFxuXG5cblxuXG5dO1xuXG5cblxuZnVuY3Rpb24gY2hvb3NlR2FtZShudW0pIHtcblx0Ly8gZ2FtZXNbbnVtXS5kcmF3R3JpZCgpO1xuXHRnYW1lc1tudW1dLmluaVNldFVwKCk7XG5cdGdhbWVzW251bV0uZHJhdygpO1xuXHQvLyBnYW1lc1tudW1dLnBsYXkoKTtcbn1cblxuXG5jaG9vc2VHYW1lKDEwKTtcbiIsImltcG9ydCBPYmogZnJvbSAnLi9PYmonO1xuXG5jbGFzcyBDaGFyYWN0ZXIgZXh0ZW5kcyBPYmp7XG4gIGNvbnN0cnVjdG9yKHN0YXRlLG9wdGlvbnMpe1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmN1cnJZID0gdGhpcy5jb252ZXJ0UGl4ZWwob3B0aW9ucykueTsvL2luIHBpeGVsOyBZIERFQ1JFQVNFU1xuICAgIHRoaXMuY3VyclggPSB0aGlzLmNvbnZlcnRQaXhlbChvcHRpb25zKS54O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICAvLyBmdW5jdGlvbiBjb252ZXJ0T3B0aW9uc1RvUGl4ZWwob3B0aW9ucyl7XG4gIC8vICAgdmFyIEhfQkxPQ0tTID0gMTQ7XG4gIC8vICAgdmFyIEhfRElNRU5USU9OID0gMjU2O1xuICAvLyAgIHZhciBWX0JMT0NLUyA9IDI1O1xuICAvLyAgIHZhciBWX0RJTUVOVElPTiA9IDk2MDtcbiAgLy8gICB2YXIgZ3JpZFBpeGVsLnggPSBvcHRpb25zLnggKiAoSF9ESU1FTlRJT04gLyBIX0JMT0NLUyk7XG4gIC8vICAgdmFyIGdyaWRQaXhlbC55ID0gKG9wdGlvbnMueSsxKSAqIChWX0RJTUVOVElPTiAvIFZfQkxPQ0tTKTtcbiAgLy8gICByZXR1cm4gZ3JpZFBpeGVsO1xuICAvLyB9XG5cbiBpbml0aWFsaXplQ2hhcmFjdGVyKGN0eCl7XG4gLy9vbmx5IGFibGUgdG8gYWNjZXNzICd0aGlzJyBvbiB0aGUgb3V0c2lkZVxuIFxuICAgXG4gICAgIHZhciB4ID0gdGhpcy5jdXJyWCA7XG4gICAgIHZhciB5ID0gdGhpcy5jdXJyWSA7XG4gICAgIHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuICAgICBpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VPYmosIHgsIHkpO1xuXG4gICAgIH07XG4gICAgIGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgLy8gY3R4LmFyYygxMjAsIDkwMCwgMTcsIDAsIE1hdGguUEkqMiwgdHJ1ZSk7Ly9jaGFyYWN0ZXIgc2l6ZVxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICAvLyBjdHguZmlsbCgpO1xuICAgIC8vIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIHJlYm9ybkNoYXJhY3RlciAoY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBieCA9IHRoaXMuY3Vyclg7XG4gICAgdmFyIGJ5ID0gdGhpcy5jdXJyWTtcbiAgXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuY2xlYXIoY3R4LCBieCwgYnkpO1xuICAgICAgdmFyIHggPSBzZWxmLmNvbnZlcnRQaXhlbChzZWxmLm9wdGlvbnMpLng7XG4gICAgICB2YXIgeSA9IHNlbGYuY29udmVydFBpeGVsKHNlbGYub3B0aW9ucykueTtcbiAgICAgIHNlbGYuY3VyclggPSB4O1xuICAgICAgc2VsZi5jdXJyWSA9IHk7XG4gICAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VPYmosIHgsIHkpO1xuXG4gICAgICB9O1xuICAgICAgaW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9CbGFjazIucG5nXCI7XG4gICAgfSwgNTApO1xuICB9XG5cbiAgbG9nKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZG9pbmdcIik7XG4gIH1cblxuICAgZHJhdyhjdHgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZHJhd2luZy4uXCIpO1xuXG4gICAgXG4gICAgdGhpcy5jbGVhcihjdHgsdGhpcy5jdXJyWCx0aGlzLmN1cnJZKTtcbiAgICBcbiAgICB2YXIgZHkgPSAtMTtcbiAgICB0aGlzLmN1cnJZICs9IGR5O1xuXG4gICAgdmFyIHggPSB0aGlzLmN1cnJYO1xuICAgIHZhciB5ID0gdGhpcy5jdXJyWTtcbiAgICB2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZU9iaiwgeCwgeSk7XG5cbiAgICB9O1xuICAgIGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuXG4gIH1cblxuICAvLyBzZXRJbnRlcnZhbChkcmF3ICwyMCk7Ly9jaGVjayBldmVyeSAyMG1zXG5cbiAgIGNvbnZlcnRQaXhlbChjb3VudGVyKXtcbiAgICAvLyB2YXIgSF9CTE9DS1MgPSAxNDtcbiAgICAvLyB2YXIgSF9ESU1FTlRJT04gPSAyNTY7XG4gICAgLy8gdmFyIFZfQkxPQ0tTID0gMjU7XG4gICAgLy8gdmFyIFZfRElNRU5USU9OID0gOTYwO1xuICAgIHZhciBncmlkUGl4ZWwgPSB7XG4gICAgICB4OiBjb3VudGVyLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKSxcbiAgICAgIHk6IChjb3VudGVyLkdyaWRZKSAqICh0aGlzLlZfRElNRU5USU9OIC8gdGhpcy5WX0JMT0NLUylcbiAgICB9XG4gICAgcmV0dXJuIGdyaWRQaXhlbDtcbiAgfVxuXG5cbiAgIGNoZWNrQ29sbGlzaW9uKHN0aWxsRSxtb3ZpbmdFLHBvcnRhbHMsaXRlbXMpe1xuICAgIHZhciBjb2xsaXNpb25UeXBlO1xuXG4gICAgLy8gLy9sb29wIHRocm91Z2ggZXZlcnkgb2JqZWN0IGluIHRoZSBtYXBcbiAgICAvLyBmb3IodmFyIGkgPSAwOyBpIDwgcG9ydGFscy5sZW5ndGg7IGkrKyl7XG4gICAgLy8gICB2YXIgcGl4ZWwgPSB0aGlzLmNvbnZlcnRQaXhlbChwb3J0YWxzW2ldKTsvL2luIHBpeGVsXG4gICAgLy8gICBpZigodGhpcy5jdXJyWSA9PSBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSl7XG4gICAgLy8gICAgIHRoaXMuY2xlYXIoKTtcbiAgICAvLyAgICAgY29sbHNpb25UeXBlID0gXCJwb3J0YWxzXCI7XG4gICAgLy8gICAgIGN1cnJYID0gcG9ydGFsc1tpKzFdLkdyaWRYOy8vaW4gZ3JpZFxuICAgIC8vICAgICBjdXJyWSA9IHBvcnRhbHNbaSsxXS5HcmlkWTtcbiAgICAvLyAgICAgdmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG4gICAgLy8gICAgIGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZU9iaiwgeCwgeSk7XG5cbiAgICAvLyAgICAgfTtcbiAgICAvLyAgICAgaW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9TdGFyMi5wbmdcIjtcblxuXG4gICAgLy8gICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyAgICAgLy8gY3R4LmFyYyhjdXJyWCArIDkuMTQsIGN1cnJZLCAxNywgMCwgTWF0aC5QSSoyLCB0cnVlKTsvL3BvcnRhbCBzaXplXG4gICAgLy8gICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgICAvLyAgICAgLy8gY3R4LmZpbGwoKTtcbiAgICAvLyAgICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdGlsbEUubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIHBpeGVsID0gdGhpcy5jb252ZXJ0UGl4ZWwoc3RpbGxFW2ldKTsvL2luIHBpeGVsXG4gICAgICAvLyBjb25zb2xlLmxvZyhwaXhlbC55KTtcbiAgICAgIC8vIGlmKHRoaXMuY3VyclkgPiBpLnkgJiYgdGhpcy5jdXJyWSA8IGkueSAtIDM4LjQgJiYgKGN1cnJYID4gaS54ICYmIGN1cnJYIDwgaS54ICsgMTguMjgpe1xuICAgICAgaWYodGhpcy5jdXJyWSA8IHBpeGVsLnkpe1xuICAgICAgICAvLyBjb2xsc2lvblR5cGUgPSBcInN0aWxsRVwiO1xuICAgICAgICBkb2N1bWVudC5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vdmluZ0UubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwaXhlbCA9IHRoaXMuY29udmVydFBpeGVsKG1vdmluZ0VbaV0pOy8vaW4gcGl4ZWxcbiAgICAgIC8vIGlmKHRoaXMuY3VyclkgPiBpLnkgJiYgdGhpcy5jdXJyWSA8IGkueSAtIDM4LjQgJiYgKGN1cnJYID4gaS54ICYmIGN1cnJYIDwgaS54ICsgMTguMjgpe1xuICAgICAgaWYgKCh0aGlzLmN1cnJZID09IHBpeGVsLnkpICYmICh0aGlzLmN1cnJYID09IHBpeGVsLngpKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBwaXhlbCA9IHRoaXMuY29udmVydFBpeGVsKGl0ZW1zW2ldKTsvL2luIHBpeGVsXG4gICAgICBpZigodGhpcy5jdXJyWSA9PSBwaXhlbC55KSAmJiAodGhpcy5jdXJyWCA9PSBwaXhlbC54KSl7XG4gICAgICAgIGl0ZW1Db2xsZWN0ZWQgKys7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1Db2xsZWN0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHNldEludGVydmFsKGNoZWNrQ29sbGlzaW9uICwyMCk7Ly9jaGVjayBldmVyeSAyMG1zXG4gIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNoYW5nZVN0YXRlKTtcblxuXG4gICBjaGFuZ2VTdGF0ZShlKXtcbiAgICAvL3JlZ2lzdGVyIGEgZXZlbnQgbGlzdGVuZXJcbiAgICB2YXIga2V5ID0gZS5rZXlDb2RlID8gZS5rZXlDb2RlIDogZS53aGljaDtcbiAgICBpZiAoa2V5ID09IDM4KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIllvdSBQcmVzc2VkIHRoZSBma2luZyBTcGFjZVwiKTtcbiAgICAgIHN3aXRjaChzdGF0ZSl7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBzdGF0ZSsrO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2hpdGVcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBzdGF0ZS0tO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQmxhY2tcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhcmFjdGVyO1xuIiwiaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlcic7XG5pbXBvcnQgT2JqIGZyb20gJy4vT2JqJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi9Qb3J0YWwnO1xuLy8gaW1wb3J0IEVuZW15IGZyb20gLi9DaGFyYWN0ZXIuanM7XG5cblxuXG5jbGFzcyBHYW1lIHtcblx0Ly8gc2V0IHVwIGluc3RhbmNlIHZhcmlhYmxlc1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKXtcblx0XHR0aGlzLmNhbnZhcyA9IG9wdGlvbnMuY2FudmFzO1xuXHRcdHRoaXMuY3R4ID0gb3B0aW9ucy5jb250ZXh0O1xuXHRcdHRoaXMuRElNRU5TSU9OID0gb3B0aW9ucy5ESU1FTlNJT047XG5cdFx0dGhpcy51bml2ZXJzZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdmVyc2UnKTtcblx0XHR0aGlzLnNwZWVkID0gb3B0aW9ucy5zcGVlZDtcblx0XHR0aGlzLnBsYW4gPSBvcHRpb25zLnBsYW47XG5cdFx0dGhpcy5HcmlkID0gW107XG5cdFx0dGhpcy5wb3J0YWxzQiA9IFtdO1xuXHRcdHRoaXMucG9ydGFsc1cgPSBbXTtcblx0XHR0aGlzLml0cnMgPSBbXTtcblx0XHR0aGlzLml0c3MgPSBbXTtcblx0XHR0aGlzLm1vdmluZ0UgPSBbXTtcblx0XHR0aGlzLnN0aWxsRSA9IFtdO1xuXHRcdHRoaXMuY2hhcmFjdGVyID0gbmV3IENoYXJhY3RlcigwLHtHcmlkWDo1LEdyaWRZOjIzfSk7XG5cdFx0dGhpcy5wb2ludCA9IDA7XG5cdFx0dGhpcy53aW4gPSBmYWxzZTtcblx0XHR0aGlzLkhfQkxPQ0tTID0gMTM7XG5cdFx0dGhpcy5IX0RJTUVOVElPTiA9IDI1Njtcblx0XHR0aGlzLkggPSB0aGlzLkhfRElNRU5TSU9OIC8gdGhpcy5IX0JMT0NLUztcblx0XHR0aGlzLlZfQkxPQ0tTID0gMjU7XG5cdFx0dGhpcy5WX0RJTUVOVElPTiA9IDk2MDtcblx0XHR0aGlzLlYgPSB0aGlzLlZfRElNRU5TSU9OIC8gdGhpcy5WX0JMT0NLUztcblx0XHR0aGlzLmludGVydmFsSUQgPSAwO1xuXHRcdHRoaXMubm93cHRCO1xuXHRcdHRoaXMubm93cHRXO1xuXG5cdH1cblxuXHQvLyBpbml0aWFsIHNldCB1cFxuXHRpbmlTZXRVcCgpIHtcblx0XHQvLyAvLyBOb3RlOiB1c2luZyBiaW5kIHRvIHBhc3MgdGhlIGNsYXNzJyBjb250ZXh0IHRvIHRoZSBjYWxsYmFja3Ncblx0XHQvLyAvLyBub3Qgc3VyZSBpZiB0aGlzIGNhbiBiZSBpbXByb3ZlZC5cblx0XHQvLyAvLyB0aGlzLnVuaXZlcnNlRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvb3BDZWxscy5iaW5kdGhpcygpKTtcblx0XHQvLyAvLyB3aGVuIHVzZXIgY2xpY2ssIHN0YXJ0IHRoZSBnYW1lXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jylcblx0XHRcdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZWxmLnBsYXkoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnBsYW4pO1xuXHRcdFx0dGhpcy5wYXJzZSh0aGlzLnBsYW4pO1xuXG5cdFx0XHR0aGlzLmNoYXJhY3Rlci5pbml0aWFsaXplQ2hhcmFjdGVyKHRoaXMuY3R4KTtcblxuXHRcdFx0dGhpcy5ub3dwdEIgPSB0aGlzLnBvcnRhbHNCLmxlbmd0aC0xO1xuXHRcdFx0dGhpcy5ub3dwdFcgPSB0aGlzLnBvcnRhbHNXLmxlbmd0aC0xO1xuXG5cdFx0XHQvLyBkcmF3KHRoaXMuR3JpZCkge1xuXG5cdFx0XHQvLyB9XG5cdH1cblxuXG5cblx0cGFyc2UocGxhbikge1xuXHRcdC8vIGxldCBncmlkID0gW107XG5cblx0XHRmb3IodmFyIGk9MDtpPHBsYW4ubGVuZ3RoO2krKykge1xuXHRcdFx0bGV0IGFycmF5ID0gcGxhbltpXS5zcGxpdChcIiBcIik7XG5cblx0XG5cdFx0XHRmb3IodmFyIGo9MDtqPGFycmF5Lmxlbmd0aDtqKyspIHtcblx0XHRcdFx0aWYoYXJyYXlbal0gPT0gXCJ4eHhcIikge1xuXHRcdFx0XHRcdHRoaXMuc3RpbGxFLnB1c2gobmV3IE9iaih7IEdyaWRYOiAxKzMqaitqLCBHcmlkWTogaSB9KSk7XG5cdFx0XHRcdFx0XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0ZWxzZSBpZihhcnJheVtqXSA9PSBcIm1vZVwiKSB7XG5cdFx0XHRcdFx0dGhpcy5FbmVtaWVzLnB1c2gobmV3IG1vdmluZ0Uoe30pKTtcblxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYoYXJyYXlbal0gPT0gXCJwdFdcIikge1xuXHRcdFx0XHRcdHRoaXMucG9ydGFsc1cucHVzaChuZXcgUG9ydGFsKDEsIHsgR3JpZFg6IDErMypqK2osIEdyaWRZOml9KSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbHNlIGlmKGFycmF5W2pdID09IFwicHRCXCIpIHtcblx0XHRcdFx0XHR0aGlzLnBvcnRhbHNCLnB1c2gobmV3IFBvcnRhbCAoMCwgeyBHcmlkWDogMSszKmoraiwgR3JpZFk6aX0pKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmIChhcnJheVtqXSA9PSBcIml0clwiKSB7XG5cdFx0XHRcdFx0dGhpcy5pdHJzLnB1c2gobmV3IE9iaih7IEdyaWRYOiAxICsgMyAqIGogKyBqLCBHcmlkWTogaSB9KSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoYXJyYXlbal0gPT0gXCJpdHNcIikge1xuXHRcdFx0XHRcdHRoaXMuaXRzcy5wdXNoKG5ldyBPYmooeyBHcmlkWDogMSArIDMgKiBqICsgaiwgR3JpZFk6IGkgfSkpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFxuXHRcdFx0fVxuXHRcdFxuXHRcdH1cblxuXHRcdC8vIHJldHVybiBncmlkO1xuXHR9XG5cblxuXG5cblx0cGxheSgpe1xuXHRcdC8vIHJlbW92ZSBnb2QgbW9kZVxuXHRcdC8vIHRoaXMudW5pdmVyc2VFbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9vcENlbGxzKTtcblx0XHQvLyBnYW1lIGxvb3Bcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnNwZWVkKTtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdHRoaXMuaW50ZXJ2YWxJRCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0c2VsZi5jaGFyYWN0ZXIuZHJhdyhzZWxmLmN0eCk7XG5cdFx0XHRzZWxmLmNoZWNrQ29sbGlzaW9uKCk7XG5cdFx0fSwgMjApO1xuXHRcblx0XHQvLyBzZXRJbnRlcnZhbCh0aGlzLmNoYXJhY3Rlci5jaGVja0NvbGxpc2lvbih0aGlzLnBvcnRhbHMsdGhpcy5lbmVtaWVzLHRoaXMuaXRlbXMpLCB0aGlzLnNwZWVkKTtcblx0XHQvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmNoYXJhY3Rlci5jaGFuZ2VTdGF0ZSlcblxuXHR9XG5cblx0bG9nZ2luZygpIHtcblx0XHRjb25zb2xlLmxvZyhcImxvZ2dpbmdcIik7XG5cdH1cblxuXHQvLyBkcmF3IGdyaWRcblx0ZHJhd0dyaWQoKSB7XG5cdFx0dGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzc3Nyc7XG5cdFx0dGhpcy5jdHgubGluZVdpZHRoID0gMTtcblx0XHQvLyB2ZXJ0aWNhbCBsaW5lc1xuXHRcdGZvciAobGV0IGkgPSAxOyBpPHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0xFTkdUSDsgaSsrKXtcblx0XHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0dGhpcy5jdHgubW92ZVRvKHRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RIKmksMCk7XG5cdFx0XHR0aGlzLmN0eC5saW5lVG8odGhpcy5ESU1FTlNJT04uQ0VMTF9MRU5HVEgqaSwgXG5cdFx0XHRcdHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0hFSUdIVCp0aGlzLkRJTUVOU0lPTi5DRUxMX0hFSUdIVCk7XG5cdFx0XHR0aGlzLmN0eC5zdHJva2UoKTtcblx0XHR9XG5cdFx0Ly8gaG9yaXpvbnRhbCBsaW5lc1xuXHRcdGZvciAobGV0IGkgPSAxOyBpPHRoaXMuRElNRU5TSU9OLlVOSVZFUlNFX0hFSUdIVDsgaSsrKXtcblx0XHRcdHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0dGhpcy5jdHgubW92ZVRvKDAsdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQqaSk7XG5cdFx0XHR0aGlzLmN0eC5saW5lVG8odGhpcy5ESU1FTlNJT04uVU5JVkVSU0VfTEVOR1RIKnRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RILCBcblx0XHRcdFx0dGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQqaSk7XG5cdFx0XHR0aGlzLmN0eC5zdHJva2UoKTtcblx0XHR9XG5cdH1cblxuXHRkcmF3KCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucG9ydGFsc0IpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucG9ydGFsc1cpO1xuXHRcdC8vZHJhdyBzdGF0aWMgc3R1ZmZcdFxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuR3JpZCk7XG5cdFx0dmFyIGN0eCA9IHRoaXMuY3R4O1xuXHRcdHZhciB4c2hpZnQgPSB0aGlzLkRJTUVOU0lPTi5DRUxMX0xFTkdUSDtcblx0XHR2YXIgeXNoaWZ0ID0gdGhpcy5ESU1FTlNJT04uQ0VMTF9IRUlHSFQ7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RpbGxFLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgeCA9IHRoaXMuc3RpbGxFW2ldLkdyaWRYO1xuXHRcdFx0bGV0IHkgPSB0aGlzLnN0aWxsRVtpXS5HcmlkWTtcblxuXHRcdFx0dmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0XHRpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRjdHguZHJhd0ltYWdlKHRoaXMsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpO1xuXG5cdFx0XHR9O1xuXHRcdFx0aW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9PYnN0YWNsZS5wbmdcIjtcblxuXHRcdFx0Ly8gdGhpcy5jdHguZmlsbFJlY3QoLCwzKnRoaXMuRElNRU5TSU9OLkNFTExfTEVOR1RILHRoaXMuRElNRU5TSU9OLkNFTExfSEVJR0hUKTtcblxuXHRcdH1cblxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBvcnRhbHNCLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgeCA9IHRoaXMucG9ydGFsc0JbaV0uR3JpZFg7XG5cdFx0XHRsZXQgeSA9IHRoaXMucG9ydGFsc0JbaV0uR3JpZFk7XG5cdFx0XHRcblx0XHRcdFx0dmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0XHRcdGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KTtcblxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL3BvdEIucG5nXCI7XG5cdFx0XG5cdFx0fVxuXG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb3J0YWxzVy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgeCA9IHRoaXMucG9ydGFsc1dbaV0uR3JpZFg7XG5cdFx0XHRcdGxldCB5ID0gdGhpcy5wb3J0YWxzV1tpXS5HcmlkWTtcblx0XHRcdFxuXHRcdFx0XHRcdHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0XHRcdGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHRjdHguZHJhd0ltYWdlKHRoaXMsIHggKiB4c2hpZnQsIHkgKiB5c2hpZnQpO1xuXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL3BvdFcucG5nXCI7XG5cdFx0XHRcdFxuXG5cblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0c3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IHggPSB0aGlzLml0c3NbaV0uR3JpZFg7XG5cdFx0XHRcdGxldCB5ID0gdGhpcy5pdHNzW2ldLkdyaWRZO1xuXG5cdFx0XHRcdHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0XHRpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UodGhpcywgeCAqIHhzaGlmdCwgeSAqIHlzaGlmdCk7XG5cblx0XHRcdFx0fTtcblx0XHRcdFx0aW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9TdGFyMi5wbmdcIjtcblxuXG5cblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0cnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IHggPSB0aGlzLml0cnNbaV0uR3JpZFg7XG5cdFx0XHRcdGxldCB5ID0gdGhpcy5pdHJzW2ldLkdyaWRZO1xuXG5cdFx0XHRcdHZhciBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0XHRpbWFnZU9iai5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UodGhpcywgeCAqIHhzaGlmdCwgeSAqIHlzaGlmdCk7XG5cblx0XHRcdFx0fTtcblx0XHRcdFx0aW1hZ2VPYmouc3JjID0gXCIuL2ltYWdlcy9yZXZlcnNlLnBuZ1wiO1xuXG5cblxuXHRcdFx0fVxuXG5cdFx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdC8vIFx0bGV0IHggPSB0aGlzLnBvcnRhbHNXW2ldLkdyaWRYO1xuXHRcdFx0Ly8gXHRsZXQgeSA9IHRoaXMucG9ydGFsc1dbaV0uR3JpZFk7XG5cblx0XHRcdC8vIFx0dmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0XHQvLyBcdGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBcdFx0Y3R4LmRyYXdJbWFnZSh0aGlzLCB4ICogeHNoaWZ0LCB5ICogeXNoaWZ0KTtcblxuXHRcdFx0Ly8gXHR9O1xuXHRcdFx0Ly8gXHRpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL3BvdFcucG5nXCI7XG5cblxuXG5cdFx0XHQvLyB9XG5cblx0XHR9XG5cdFxuXG5cblxuXHRcdFxuXG5cblxuXHRcdC8vIGZvciAodmFyIGk9MDtpPHRoaXMucG9ydGFscy5sZW5ndGg7aSsrKSB7XG5cdFx0Ly8gXHRjdHguZmlsbFN0eWxlPVwiI0ZGMDAwMFwiO1xuXHRcdC8vIFx0dGhpcy5jdHguZmlsbFJlY3QoaSpDRUxMX0xFTkdUSCxpKkNFTExfSEVJR0hULDMqQ0VMTF9MRU5HVEgsQ0VMTF9IRUlHSFQpO1xuXHRcdC8vIH1cblxuXHRcdC8vIGZvciAodmFyIGk9MDtpPHRoaXMucG9ydGFscy5sZW5ndGg7aSsrKSB7XG5cdFx0Ly8gXHRjdHguZmlsbFN0eWxlPVwiYmx1ZVwiO1xuXHRcdC8vIFx0dGhpcy5jdHguZmlsbFJlY3QoaSpDRUxMX0xFTkdUSCxpKkNFTExfSEVJR0hULDMqQ0VMTF9MRU5HVEgsQ0VMTF9IRUlHSFQpO1xuXHRcdC8vIH1cblxuXHRcdC8vIGZvciAodmFyIGk9MDtpPHRoaXMucG9ydGFscy5sZW5ndGg7aSsrKSB7XG5cdFx0Ly8gXHRjdHguZmlsbFN0eWxlPVwieWVsbG93XCI7XG5cdFx0Ly8gXHR0aGlzLmN0eC5maWxsUmVjdChpKkNFTExfTEVOR1RILGkqQ0VMTF9IRUlHSFQsMypDRUxMX0xFTkdUSCxDRUxMX0hFSUdIVCk7XG5cdFx0Ly8gfVxuXG5cdGNoZWNrQ29sbGlzaW9uKCkge1xuXHRcdC8vIHZhciBjb2xsaXNpb25UeXBlO1xuXG5cdFx0Ly8gLy9sb29wIHRocm91Z2ggZXZlcnkgb2JqZWN0IGluIHRoZSBtYXBcblx0XHRjb25zb2xlLmxvZyh0aGlzLnBvcnRhbHNCW3RoaXMubm93cHRCXSk7XG5cdFx0XG5cdFx0ICB2YXIgcGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5wb3J0YWxzQlt0aGlzLm5vd3B0Ql0pOy8vaW4gcGl4ZWxcblx0XHQgIGNvbnNvbGUubG9nKHBpeGVsLngpO1xuXHRcdCAgY29uc29sZS5sb2codGhpcy5jaGFyYWN0ZXIuY3VyclgpO1xuXHRcdCAgaWYoKHRoaXMuY2hhcmFjdGVyLmN1cnJZIDwgcGl4ZWwueSkgJiYgKE1hdGguYWJzKHRoaXMuY2hhcmFjdGVyLmN1cnJYIC0gcGl4ZWwueCk8MTApICl7XG5cdFx0XHQgIGNvbnNvbGUubG9nKFwiY2h1YW5cIik7XG5cdFx0ICAgIHRoaXMuY2hhcmFjdGVyLmNsZWFyKHRoaXMuY3R4LDYwLDYwKTtcblx0XHRcdHRoaXMubm93cHRCLS07XG5cdFxuXHRcdFx0cGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5wcm90YWxzQltub3dwdEJdKTtcblx0XHQgICAgdGhpcy5jaGFyYWN0ZXIuY3VyclggPSBwaXhlbC54Ly9pbiBncmlkXG5cdFx0ICAgIHRoaXMuY2hhcmFjdGVyLmN1cnJZID0gcGl4ZWwueTtcblx0XHQgICAgdmFyIGltYWdlT2JqID0gbmV3IEltYWdlKCk7XG5cdFx0ICAgIGltYWdlT2JqLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0ICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLCBwaXhlbC54LCBwaXhlbC55KTtcblxuXHRcdCAgICB9O1xuXHRcdCAgICBpbWFnZU9iai5zcmMgPSBcIi4vaW1hZ2VzL0JsYWNrMi5wbmdcIjtcblxuXG5cdFx0ICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcblx0XHQgICAgLy8gY3R4LmFyYyhjdXJyWCArIDkuMTQsIGN1cnJZLCAxNywgMCwgTWF0aC5QSSoyLCB0cnVlKTsvL3BvcnRhbCBzaXplXG5cdFx0ICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcblx0XHQgICAgLy8gY3R4LmZpbGwoKTtcblx0XHQgICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuXHRcdCAgfVxuXHRcdCAgZWxzZSBpZiAodGhpcy5jaGFyYWN0ZXIuY3VyclkgPCBwaXhlbC55KSB7XG5cdFx0XHQgIHRoaXMubm93cHRCLS07XG5cdFx0XHQgIC8vIHRoaXMubm93cHRCPSAodGhpcy5ub3dwdEIrdGhpcy5wb3J0YWxzQi5sZW5ndGgtMSkldGhpcy5wb3J0YWxzQi5sZW5ndGg7XG5cdFx0ICB9XG5cblx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9ydGFsc1cubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBcdHZhciBwaXhlbCA9IGNvbnZlcnRQaXhlbCh0aGlzLnBvcnRhbHNXW2ldKTsvL2luIHBpeGVsXG5cdFx0Ly8gXHRpZiAoKHRoaXMuY2hhcmFjdGVyLmN1cnJZID09IHBpeGVsLnkpICYmICh0aGlzLmNoYXJhY3Rlci5jdXJyWCA9PSBwaXhlbC54KSAmJiAodGhpcy5wb3J0YWxzV1tpXS5zdGF0ZSA9PSB0aGlzLmNoYXJhY3Rlci5zdGF0ZSkpIHtcblx0XHQvLyBcdFx0dGhpcy5jaGFyYWN0ZXIuY2xlYXIodGhpcy5jdHgsIHBpeGVsLngsIHBpeGVsLnkpO1xuXHRcdC8vIFx0XHRjb2xsc2lvblR5cGUgPSBcInBvcnRhbHNcIjtcblx0XHQvLyBcdFx0cGl4ZWwgPSBjb252ZXJ0UGl4ZWwodGhpcy5wcm90YWxzV1tpIC0gMV0pO1xuXHRcdC8vIFx0XHR0aGlzLmNoYXJhY3Rlci5jdXJyWCA9IHBpeGVsLngvL2luIGdyaWRcblx0XHQvLyBcdFx0dGhpcy5jaGFyYWN0ZXIuY3VyclkgPSBwaXhlbC55O1xuXHRcdC8vIFx0XHR2YXIgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcblx0XHQvLyBcdFx0aW1hZ2VPYmoub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBcdFx0XHRjdHguZHJhd0ltYWdlKHRoaXMsIHBpeGVsLngsIHBpeGVsLnkpO1xuXG5cdFx0Ly8gXHRcdH07XG5cdFx0Ly8gXHRcdGltYWdlT2JqLnNyYyA9IFwiLi9pbWFnZXMvQmxhY2syLnBuZ1wiO1xuXG5cblx0XHQvLyBcdFx0Ly8gY3R4LmJlZ2luUGF0aCgpO1xuXHRcdC8vIFx0XHQvLyBjdHguYXJjKGN1cnJYICsgOS4xNCwgY3VyclksIDE3LCAwLCBNYXRoLlBJKjIsIHRydWUpOy8vcG9ydGFsIHNpemVcblx0XHQvLyBcdFx0Ly8gY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuXHRcdC8vIFx0XHQvLyBjdHguZmlsbCgpO1xuXHRcdC8vIFx0XHQvLyBjdHguY2xvc2VQYXRoKCk7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0aWxsRS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMuc3RpbGxFW2ldKTsvL2luIHBpeGVsXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhwaXhlbC55KTtcblx0XHRcdC8vIGlmKHRoaXMuY3VyclkgPiBpLnkgJiYgdGhpcy5jdXJyWSA8IGkueSAtIDM4LjQgJiYgKGN1cnJYID4gaS54ICYmIGN1cnJYIDwgaS54ICsgMTguMjgpe1xuXHRcdFx0aWYgKHRoaXMuY2hhcmFjdGVyLmN1cnJZIDwgKHBpeGVsLnkrMzguNCkpIHtcblx0XHRcdFx0Ly8gY29sbHNpb25UeXBlID0gXCJzdGlsbEVcIjtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSUQpO1xuXHRcdFx0XHR0aGlzLmNoYXJhY3Rlci5yZWJvcm5DaGFyYWN0ZXIodGhpcy5jdHgpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImkgYW0gZXhlY3V0ZWRcIik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubW92aW5nRS5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFx0dmFyIHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMubW92aW5nRVtpXSk7Ly9pbiBwaXhlbFxuXHRcdC8vIFx0Ly8gaWYodGhpcy5jdXJyWSA+IGkueSAmJiB0aGlzLmN1cnJZIDwgaS55IC0gMzguNCAmJiAoY3VyclggPiBpLnggJiYgY3VyclggPCBpLnggKyAxOC4yOCl7XG5cdFx0Ly8gXHRpZiAoKHRoaXMuY2hhcmFjdGVyLmN1cnJZIDwgcGl4ZWwueSkgJiYgKHRoaXMuY3VyclggPT0gcGl4ZWwueCkpIHtcblx0XHQvLyBcdFx0ZG9jdW1lbnQucmVsb2FkKCk7XG5cblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cblxuXHRcdC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdC8vIFx0dmFyIHBpeGVsID0gY29udmVydFBpeGVsKHRoaXMuaXRlbXNbaV0pOy8vaW4gcGl4ZWxcblx0XHQvLyBcdGlmICgodGhpcy5jdXJyWSA8IHBpeGVsLnkpICYmICh0aGlzLmN1cnJYID09IHBpeGVsLngpKSB7XG5cdFx0Ly8gXHRcdHRoaXMucG9pbnQrKztcblx0XHQvLyBcdFx0Y29uc29sZS5sb2codGhpcy5wb2ludCk7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXHR9XG5cblxufVxuXG5cblxuXG5mdW5jdGlvbiBjb252ZXJ0UGl4ZWwoY291bnRlcil7XG4gICAgdmFyIEhfQkxPQ0tTID0gMTM7XG4gICAgdmFyIEhfRElNRU5USU9OID0gMjU2O1xuICAgIHZhciBWX0JMT0NLUyA9IDI1O1xuICAgIHZhciBWX0RJTUVOVElPTiA9IDk2MDtcbiAgICB2YXIgZ3JpZFBpeGVsID0ge1xuXHRcdHg6IGNvdW50ZXIuR3JpZFggKiAoSF9ESU1FTlRJT04gLyBIX0JMT0NLUyksXG5cdFx0eTogKGNvdW50ZXIuR3JpZFkpICogKFZfRElNRU5USU9OIC8gVl9CTE9DS1MpXG4gICAgfVxuICAgIHJldHVybiBncmlkUGl4ZWw7XG59XG5cblxuLy8gUHJpdmF0ZSBtZXRob2RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBMb29wIG92ZXIgdGhlIGNlbGxzXG5mdW5jdGlvbiBsb29wQ2VsbHMoZSkge1xuXHR2YXIgdW5pdmVyc2VFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXZlcnNlJyk7XG5cdHZhciBwYWdlWCA9IGUucGFnZVggLSB1bml2ZXJzZUVsZW0ub2Zmc2V0TGVmdDtcblx0dmFyIHBhZ2VZID0gZS5wYWdlWSAtIHVuaXZlcnNlRWxlbS5vZmZzZXRUb3A7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGk8dGhpcy51bml2ZXJzZS5oZWlnaHQ7IGkrKyl7XG5cdFx0Zm9yIChsZXQgaj0wOyBqPHRoaXMudW5pdmVyc2UubGVuZ3RoOyBqKyspe1xuXHRcdFx0bGV0IGNlbGwgPSB0aGlzLnVuaXZlcnNlLmNlbGxzW2ldW2pdO1xuXHRcdFx0aGFuZGxlQ2xpY2sodGhpcywgY2VsbCwgcGFnZVgsIHBhZ2VZKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gZ2l2ZSBsaWZlIG9yIGRlYXRoIHRvIHRoZSBjZWxsIGNsaWNrZWQuXG4vLyBOb3RlOiBiZWNhdXNlIGxvb3BDZWxscyBpcyBhIGNhbGxiYWNrIHdoaWNoIGhhcyB0aGUgY2xhc3MgY29udGV4dFxuLy8gYm91bmQgdG8gaXQsIHRoaXMgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGluIHRoZSBjYWxsYmFjayBkb2Vzbid0IGdldCB0aGVcbi8vIGNvbnRleHQgaW1wbGljaXRseSwgc28gSSBtdXN0IHBhc3MgaXQuIERvZXNuJ3QgZmVlbCBjbGVhbi4uLlxuLy8gZnVuY3Rpb24gaGFuZGxlQ2xpY2soc2VsZiwgY2VsbCwgcGFnZVgsIHBhZ2VZKXtcbi8vIFx0aWYgKHBhZ2VYID4gY2VsbC54ICYmIHBhZ2VYIDwgY2VsbC54K3NlbGYudW5pdmVyc2UuY2VsbExlbmd0aCAmJlxuLy8gXHRcdFx0XHRwYWdlWSA+IGNlbGwueSAmJiBwYWdlWSA8IGNlbGwueStzZWxmLnVuaXZlcnNlLmNlbGxIZWlnaHQgKSB7XG4vLyBcdFx0Y2hhbmdlQ2VsbHMoc2VsZiwgY2VsbCk7XG4vLyBcdH1cbi8vIH1cblxuLy8gMSBzdGVwID0gMSBnZW5lcmF0aW9uXG5mdW5jdGlvbiBzdGVwKCl7XG5cblx0XG59XG5cbi8qXG4qXHRwYXNzIHRoZSBjZWxsIHRocm91Z2ggdGhlIDQgcnVsZXMuIFxuXHROb3RlOiBjZWxscyBzaG91bGQgbm90IHVwZGF0ZSBoZXJlLCBzaW5jZSBhbHRlcmluZyAxIGJlZm9yZSB5b3UgY2FuXG5cdGFuYWx5emUgdGhlIG90aGVycyB3aWxsIGNhdXNlIGVycm9uZW91cyBvdXRjb21lcy5cbiovXG5mdW5jdGlvbiB0cmFuc2l0aW9ucyhzZWxmLCBjZWxsLCBjZWxsc1RvQ2hhbmdlKSB7XG5cdHZhciB1bmlMZW5ndGggPSBzZWxmLnVuaXZlcnNlLmxlbmd0aDtcblx0dmFyIHVuaUhlaWdodCA9IHNlbGYudW5pdmVyc2UuaGVpZ2h0O1xuXHR2YXIgbmVpZ2hib3Vyc0FsaXZlID0gMDtcblx0Ly8gR28gdGhyb3VnaCB0aGUgbmVpZ2hib3VycyBvZiBlYWNoIGNlbGwuXG5cdGZvciAobGV0IGk9MDsgaTw4OyBpKyspe1xuXHRcdGxldCBuZWlnaGJvdXJJRCA9IGNlbGwubmVpZ2hib3Vyc1tpXTtcblx0XHRpZiAobmVpZ2hib3VySUQgPj0gdW5pTGVuZ3RoKnVuaUhlaWdodCB8fCBuZWlnaGJvdXJJRCA8MCkgY29udGludWU7XG5cdFx0bGV0IG5laWdoYm91ciA9IGdldENlbGxCeUlkKHNlbGYsIG5laWdoYm91cklEKTtcblx0XHRpZiAobmVpZ2hib3VyLnN0YXRlID09PSAxKSBuZWlnaGJvdXJzQWxpdmUrKztcblx0fVxuXHRpZiAoY2VsbC5zdGF0ZSA9PT0gMSl7XG5cdFx0Ly8gemUgbGlmZSBydWxlc1xuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyAxKSBBbnkgbGl2ZSBjZWxsIHdpdGggZmV3ZXIgdGhhbiB0d28gbGl2ZSBuZWlnaGJvdXJzIGRpZXMsIGFzIFxuXHRcdC8vIGlmIGNhdXNlZCBieSB1bmRlci1wb3B1bGF0aW9uLlxuXHRcdC8vIDIpIEFueSBsaXZlIGNlbGwgd2l0aCB0d28gb3IgdGhyZWUgbGl2ZSBuZWlnaGJvdXJzIGxpdmVzIG9uIHRvIFxuXHRcdC8vIHRoZSBuZXh0IGdlbmVyYXRpb24uXG5cdFx0aWYgKG5laWdoYm91cnNBbGl2ZSA8IDIpIGNlbGxzVG9DaGFuZ2UucHVzaChjZWxsLmlkKTtcblx0XHQvLyAzKSBBbnkgbGl2ZSBjZWxsIHdpdGggbW9yZSB0aGFuIHRocmVlIGxpdmUgbmVpZ2hib3VycyBkaWVzLCBhcyBpZiBcblx0XHQvLyBieSBvdmVyY3Jvd2RpbmcuXG5cdFx0ZWxzZSBpZiAobmVpZ2hib3Vyc0FsaXZlID4gMykgY2VsbHNUb0NoYW5nZS5wdXNoKGNlbGwuaWQpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIDQpIEFueSBkZWFkIGNlbGwgd2l0aCBleGFjdGx5IHRocmVlIGxpdmUgbmVpZ2hib3VycyBiZWNvbWVzIGEgXG5cdFx0Ly8gbGl2ZSBjZWxsLCBhcyBpZiBieSByZXByb2R1Y3Rpb24uXG5cdFx0aWYgKG5laWdoYm91cnNBbGl2ZSA9PT0gMykgY2VsbHNUb0NoYW5nZS5wdXNoKGNlbGwuaWQpO1xuXHR9XG59IFxuXG5mdW5jdGlvbiBjaGFuZ2VDZWxscyhzZWxmLCBjZWxsKSB7XG5cdHNlbGYuY3R4LmZpbGxTdHlsZSA9IChjZWxsLnN0YXRlKSA/ICd3aGl0ZScgOiAnIzMzMyc7XG5cdHNlbGYuY3R4LmZpbGxSZWN0KGNlbGwueCsxLCBjZWxsLnkrMSwgXG5cdFx0XHRzZWxmLnVuaXZlcnNlLmNlbGxMZW5ndGgtMiwgc2VsZi51bml2ZXJzZS5jZWxsSGVpZ2h0LTIpO1xuXHRjZWxsLnN0YXRlID0gKGNlbGwuc3RhdGUpID8gMCA6IDE7XG59XG5cbmZ1bmN0aW9uIGdldENlbGxCeUlkKHNlbGYsIGlkKSB7XG5cdGxldCByb3cgPSBNYXRoLmZsb29yKGlkL3NlbGYudW5pdmVyc2UubGVuZ3RoKTtcblx0bGV0IGNvbHVtbiA9IGlkICUgc2VsZi51bml2ZXJzZS5sZW5ndGg7XG5cdHJldHVybiBzZWxmLnVuaXZlcnNlLmNlbGxzW3Jvd11bY29sdW1uXTtcbn0gXG5cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImNsYXNzIE9iantcbiAgY29uc3RydWN0b3Iob3B0aW9ucyl7XG4gICAgdGhpcy5HcmlkWCA9IG9wdGlvbnMuR3JpZFg7XG4gICAgdGhpcy5HcmlkWSA9IG9wdGlvbnMuR3JpZFk7XG4gICAgLy8gdGhpcy5zdGF0ZSA9IHN0YXRlOy8vMCBpcyBhIGNvbG9yMCwgMSBpcyBjb2xvcjFcblx0dGhpcy5IX0JMT0NLUyA9IDEzO1xuICAgIHRoaXMuSF9ESU1FTlRJT04gPSAyNTY7XG4gICAgdGhpcy5WX0JMT0NLUyA9IDI1O1xuICAgIHRoaXMuVl9ESU1FTlRJT04gPSA5NjA7XG5cbiAgfVxuXG5cblxuXG4gLy8gIGNvbnZlcnRQaXhlbChjb3VudGVyKSB7XG5cdC8vICAgdmFyIHggPSBjb3VudGVyLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKTtcblx0Ly8gICBjb25zb2xlLmxvZyhcInhpc1wiK3gpO1xuXHQvLyAgIHZhciBncmlkUGl4ZWwgPSB7XG5cdC8vIFx0ICB4OiBjb3VudGVyLkdyaWRYICogKHRoaXMuSF9ESU1FTlRJT04gLyB0aGlzLkhfQkxPQ0tTKSxcblx0Ly8gXHQgIHk6IChjb3VudGVyLkdyaWRZICsgMSkgKiAodGhpcy5WX0RJTUVOVElPTiAvIHRoaXMuVl9CTE9DS1MpXG5cdC8vICAgfVxuIC8vICAgIHJldHVybiBncmlkUGl4ZWw7XG5cdC8vIH1cblxuXHQgY2xlYXIoY3R4LHgseSkge1xuXHRcdCAvLyBjb25zb2xlLmxvZyh0aGlzLkhfRElNRU5USU9OIC8gdGhpcy5IX0JMT0NLUyk7XG5cdFx0IC8vIC8vIGNvbnNvbGUubG9nKHRoaXMuR3JpZFgpO1xuXHRcdCAvLyB2YXIgeCA9IHRoaXMuR3JpZFggKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpO1xuXHRcdCAvLyB2YXIgeSA9ICh0aGlzLkdyaWRZKSAqICh0aGlzLlZfRElNRU5USU9OIC8gdGhpcy5WX0JMT0NLUyk7XG5cdFx0IC8vIGNvbnNvbGUubG9nKFwieCBpcyBcIisgeCk7XG5cdFx0IC8vIGNvbnNvbGUubG9nKFwieSBpcyBcIiArIHkpO1xuXG5cdCAgLy8gY3R4LmNsZWFyUmVjdCh4LHksIDMgKiAodGhpcy5IX0RJTUVOVElPTiAvIHRoaXMuSF9CTE9DS1MpLCAxKyh0aGlzLlZfRElNRU5USU9OIC8gdGhpcy5WX0JMT0NLUykpO1xuXHRcdCBjdHguY2xlYXJSZWN0KHgsIHksIDYwLCA1MCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPYmo7XG4iLCJpbXBvcnQgT2JqIGZyb20gJy4vT2JqJztcblxuY2xhc3MgUG9ydGFsIGV4dGVuZHMgT2Jqe1xuICBjb25zdHJ1Y3RvcihzdGF0ZSxvcHRpb25zKXtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gIH1cbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gUG9ydGFsO1xuIl19
