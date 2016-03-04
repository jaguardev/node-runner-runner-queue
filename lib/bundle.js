(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/** @module myModule */

module.exports = require('./src/Queue');

},{"./src/Queue":2}],2:[function(require,module,exports){
'use strict';

/** Class representing a Queue */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
	function Queue() {
		_classCallCheck(this, Queue);

		this.array = [];
	}

	/**
  * Removes and returns an object from the head of the Queue
  * @return {*} object from the head of the Queue
  */


	_createClass(Queue, [{
		key: 'dequeue',
		value: function dequeue() {
			return this.array.shift();
		}

		/**
   * Adds an object to the tail of the Queue
   * @param {*} object to be added to the tail of the Queue
   */

	}, {
		key: 'enqueue',
		value: function enqueue(object) {
			object === undefined || this.array.push(object);
		}

		/**
   * Returns an object from the head of the Queue, but does not remove it
   * @return {*} object from the head of the Queue
   */

	}, {
		key: 'peek',
		value: function peek() {
			return this.array[0];
		}

		/**
   * Returns all objects from the Queue
   */

	}, {
		key: 'clear',
		value: function clear() {
			this.array.length = 0;
		}

		/**
   * Tests if an object in the Queue
   * @param {Boolean} object to look
   */

	}, {
		key: 'contains',
		value: function contains(object) {
			return this.array.indexOf(object) !== -1;
		}

		/**
   * Return a size of the Queue
   * @returns {Number} size of the Queue
   */

	}, {
		key: 'size',
		value: function size() {
			return this.array.length;
		}

		/**
   * 
   * @returns {*}
   */

	}, {
		key: Symbol.iterator,
		value: regeneratorRuntime.mark(function value() {
			return regeneratorRuntime.wrap(function value$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							if (!this.array.length) {
								_context.next = 5;
								break;
							}

							_context.next = 3;
							return this.dequeue();

						case 3:
							_context.next = 0;
							break;

						case 5:
						case 'end':
							return _context.stop();
					}
				}
			}, value, this);
		})
	}]);

	return Queue;
}();

module.exports = Queue;

},{}]},{},[1]);
