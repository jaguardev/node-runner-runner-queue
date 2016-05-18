'use strict';

const CoreMessage = require('../core/Message');

class Message extends CoreMessage {
	constructor(name, handler) {
		super(name, {handler: handler});
	}
}

module.exports = Message;
