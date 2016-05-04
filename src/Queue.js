'use strict';

/** Class representing a Queue */
class Queue {
	constructor() {
		this.array = [];
	}

    /**
     * Removes and returns an object from the head of the Queue
     * @return {*} object from the head of the Queue
     */
	dequeue() {
		return this.array.shift();
	}

	/**
	 * Adds an object to the tail of the Queue
	 * @param {*} object to be added to the tail of the Queue
	 */
	enqueue(object) {
		object === undefined || this.array.push(object);
	}

	/**
	 * Returns an object from the head of the Queue, but does not remove it
	 * @return {*} object from the head of the Queue
	 */
	peek() {
		return this.array[0];
	}

	/**
	 * Removes all objects from the Queue
	 */
	clear() {
		this.array.length = 0;
	}

	/**
	 * Tests if an object in the Queue
	 * @param {Boolean} object to look
	 */
	contains(object) {
		return this.array.indexOf(object) !== -1;
	}

	/**
	 * Return a size of the Queue
	 * @returns {Number} size of the Queue
	 */
	size() {
		return this.array.length;
	}

	/**
	 * 
	 * @returns {*}
	 */
	* [Symbol.iterator]() {
		while (this.size()) {
			yield this.dequeue();
		}
	}
}

module.exports = Queue;
