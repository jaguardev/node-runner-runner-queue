'use strict';

class MessageSender {
	constructor(messageQueue, messageCreator) {
		this.messageQueue = messageQueue;
		this.messageCreator = messageCreator;
	}

	send(message) {
		//this.messageQueue.send(this.messageCreator.create(message));
		this.messageQueue.send(message);
	}
}

module.exports = MessageSender;
