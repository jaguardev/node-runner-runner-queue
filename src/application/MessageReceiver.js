'use strict';

const CoreMessageReceiver = require('../core/MessageReceiver');

const Message = require('./Message');
const MessageNames = require('./MessageNames');

class MessageReceiver extends CoreMessageReceiver {
	handle(message) {
		if (message instanceof Message) {
			switch(message.name) {
			case MessageNames.START_HANDLER: this.startHandler(message); break;
			case MessageNames.STOP_HANDLER: this.stopHandler(message); break;
			}
		}
	}

	startHandler(message) {
		message.parameters.handler.start();
	}

	stopHandler(message) {
		message.parameters.handler.stop();
	}
}

module.exports = MessageReceiver;
