'use strict';

const MESSAGE_EVENT = "message";

class MessageQueue {
	constructor(queue, eventEmitter) {
		this.queue = queue;
		this.eventEmitter = eventEmitter;
		this.processing = false;
	}

	send(message) {
		this.queue.enqueue(message);
		if (this.processing) {
			return;
		}
		this.processing = true;
		for (let message of this.queue) {
			this.eventEmitter.emit(MESSAGE_EVENT, message);
		}
		this.processing = false;
	}
	
	receive(cb) {
		this.eventEmitter.on(MESSAGE_EVENT, cb);
	}
}

module.exports = MessageQueue;
