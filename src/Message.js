'use strict';

class Message {
	constructor(name, parameters, topic, priority) {
		this.name = name;
		this.parameters = parameters;
		this.topic = topic;
		this.priority = priority;
	}

	static create(name, parameters=null, topic=null, priority=1) {
		return new Message(name, parameters, topic, priority);
	}
}

module.exports = Message;
