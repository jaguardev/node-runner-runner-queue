'use strict';

const EventEmitter = require('events').EventEmitter;

const RECEIVE_EVENT = "receive";

/** Class representing a MessageQueue */
class MessageQueue extends EventEmitter {
	constructor(queue) {
		this.queue = queue;
		this.processing = false;
	}

	send(message) {
		this.queue.enqueue(message);
		if (!this.listenerCount(RECEIVE_EVENT)) {
			return;
		}
		if (this.processing) {
			return;
		}
		this.processing = true;
		for (let message of this.queue) {
			this.emit(RECEIVE_EVENT, message);
		}
		this.processing = false;
	}
}

module.exports = MessageQueue;
