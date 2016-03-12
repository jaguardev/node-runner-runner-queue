'use strict';

const EventEmitter = require('events').EventEmitter;

/** Class representing a MessageQueue */
class MessageQueue extends EventEmitter {
	constructor(queue) {
		this.queue = queue;
		this.processing = false;
	}

	recieve() {
		if (this.processing) {
			return;
		}
		this.processing = true;
		for (let message of this.queue) {
			this.emit("recieve", message);
		}
		this.processing = false;
	}

	send(message) {
		this.queue.enqueue(message);
		this.recieve();
	}
}

module.exports = MessageQueue;
