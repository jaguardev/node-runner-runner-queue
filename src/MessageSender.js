'use strict';

class MessageSender extends EventEmitter {
	constructor(messageQueue) {
		this.messageQueue = messageQueue;
	}

	send(message) {
		this.messageQueue.send(message);
	}
}

module.exports = MessageSender;
