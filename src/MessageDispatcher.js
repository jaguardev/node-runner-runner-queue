'use strict';

const EventEmitter = require('events').EventEmitter;

/** Class representing a MessageQueue */
class MessageDispatcher extends EventEmitter {
	constructor(messageQueue) {
		this.messageQueue = messageQueue;
		this.messageQueue.on("recieve", (message) => this.dispatch(message));
	}

	dispatch(message) {

	}
}

module.exports = MessageDispatcher;
