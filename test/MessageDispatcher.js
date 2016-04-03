'use strict';

const MessageDispatcher = require('../src/MessageDispatcher');
const MessageQueue = require('../src/MessageQueue');
const Queue = require('../src/Queue');

describe('MessageDispatcher', function() {

	let messageDispatcher, messageQueue, queue;

	beforeEach(function() {
		queue = new Queue();
		messageQueue = new MessageQueue(queue);
		messageDispatcher = new MessageDispatcher(messageQueue);
	});

	describe('new MessageDispatcher()', function() {
		it('should be', function() {
			queue.should.be.iterable();
		});
	});


});