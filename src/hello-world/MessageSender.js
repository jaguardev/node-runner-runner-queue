'use strict';

const CoreMessageSender = require('../core/MessageSender');

const Message = require('./Message');

class MessageSender extends CoreMessageSender {
	sendLog() {
		this.handler.messageQueue.send(new Message());
	}
}

module.exports = MessageSender;
