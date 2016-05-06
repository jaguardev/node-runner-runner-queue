'use strict';

const names = {
	INIT: Symbol('INIT'),
	START: Symbol('START')
};

class Message {
	constructor(name) {
		this.name = name;
	}

	static get names() {
		return names;
	} 
}

module.exports = Message;
