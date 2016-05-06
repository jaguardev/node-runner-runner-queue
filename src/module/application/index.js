'use strict';

const Message = require('./Message');

class Module {
	constructor(messageQueue) {
		this.messageQueue = messageQueue;
		this.messageQueue.send(new Message(Message.names.INIT));
	}
	run() {
		this.messageQueue.send(new Message(Message.names.START));
	}
}

module.exports = Module;
