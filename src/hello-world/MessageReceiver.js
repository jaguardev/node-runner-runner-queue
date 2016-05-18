'use strict';

const CoreMessageReceiver = require('../core/MessageReceiver');

class MessageReceiver extends CoreMessageReceiver {
	handle(message) {
		console.error("log");
		console.log(message);
	}
}

module.exports = MessageReceiver;
