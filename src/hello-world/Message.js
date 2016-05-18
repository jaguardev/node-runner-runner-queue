'use strict';

const CoreMessage = require('../core/Message');
const MessageNames = require('./MessageNames');

class Message extends CoreMessage {
	constructor() {
		super(MessageNames.LOG);
	}
}

module.exports = Message;
