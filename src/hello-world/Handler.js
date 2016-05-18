'use strict';

const MessageHandler = require('../core//MessageHandler');

const MessageSender = require('./MessageSender');
const MessageReceiver = require('./MessageReceiver');

class Handler extends MessageHandler {
	constructor(messageQueue) {
		super(messageQueue);
		this.messageSender = new MessageSender(this);
		this.messageReceiver = new MessageReceiver(this);
	}
}

module.exports = Handler;
