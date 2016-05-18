'use strict';

class MessageReceiver {
	constructor(handler) {
		this.handler = handler;
		this._handle = (message) => this.handle(message);
	}

	start() {
		this.handler.messageQueue.startReceive(this._handle);
	}

	stop() {
		this.handler.messageQueue.stopReceive(this._handle);
	}

	handle(message) {
	}
}

module.exports = MessageReceiver;
