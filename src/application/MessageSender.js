'use strict';

const CoreMessageSender = require('../core/MessageSender');

const MessageNames = require('./MessageNames');
const Message = require('./Message');

class MessageSender extends CoreMessageSender {
	sendStartHandler(handler) {
		this.handler.messageQueue.send(new Message(MessageNames.START_HANDLER, handler));
	}

	sendStopHandler(handler) {
		this.handler.messageQueue.send(new Message(MessageNames.STOP_HANDLER, handler));
	}
}

module.exports = MessageSender;
