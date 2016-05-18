'use strict';

const MessageSender = require('./MessageSender');
const MessageReceiver = require('./MessageReceiver');

class MessageHandler {
	constructor(messageQueue, messageSender, messageReceiver) {
		this.messageQueue = messageQueue;
		this.messageSender = messageSender;
		this.messageReceiver = messageReceiver;
	}

	start() {
		this.messageReceiver.start();
	}

	stop() {
		this.messageReceiver.stop();
	}
}

module.exports = MessageHandler;
