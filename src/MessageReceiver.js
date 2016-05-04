'use strict';

class MessageReceiver {
	constructor(messageQueue) {
		this.messageQueue = messageQueue;
		this.messageQueue.receive((message)=>this.recieve(message));
		this.handlers = [];
	}

	registerHandler(handler, filter) {
		this.handlers.push({handler: handler, filter: filter || function(){return true;}});
	}
	
	recieve(message) {
		this.handlers.forEach(function(handler) {
			let reducer = handler.handler;
			let filter = handler.filter;
			if (filter(message)) {
				reducer(message);
			}
		});
	}
}

module.exports = MessageReceiver;
