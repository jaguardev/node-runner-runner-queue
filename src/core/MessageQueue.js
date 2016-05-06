'use strict';

const MESSAGE_EVENT = Symbol('message');

//what about errors?
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
	
	startReceive(cb) {
		this.eventEmitter.addListener(MESSAGE_EVENT, cb);
	}
	
	stopReceive(cb) {
		this.eventEmitter.removeListener(MESSAGE_EVENT, cb);
	}
}

module.exports = MessageQueue;
