'use strict';

class MessageSender {
	constructor(messageQueue) {
		this.messageQueue = messageQueue;
	}

	send(message) {
		this.messageQueue.send(message);
	}
}

module.exports = MessageSender;
