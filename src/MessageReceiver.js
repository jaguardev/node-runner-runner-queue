'use strict';

const EventEmitter = require('events').EventEmitter;
const RECEIVE_EVENT = require('./MessageQueue').RECEIVE_EVENT;

class MessageReceiver extends EventEmitter {
	constructor(messageQueue) {
		this.messageQueue = messageQueue;
		this.messageQueue.on(RECEIVE_EVENT, (message) => this.recieve(message));
	}

	recieve(message) {
		this.emit(message.topic, message.name, message.parameters);
	}
}

module.exports = MessageReceiver;
