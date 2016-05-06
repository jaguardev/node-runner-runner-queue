'use strict';

const Message = require('./Message');

class Module {
	constructor(messageQueue) {
		this.messageQueue = messageQueue;
		this.messageQueue.startReceive((message) => {
			if (message instanceof Message) {
				switch(message.name) {
				case Message.names.LOAD_MODULE: this.start(); break;
				case Message.names.UNLOAD_MODULE: this.stop(); break;
				}
			}
		});
		this.messageQueue.send(new Message(Message.names.INIT));
	}
	load(path) {
		//init module
	}
	unload(path) {
		//release module
	}
}

module.exports = Module;