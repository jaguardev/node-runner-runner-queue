'use strict';

const MessageDispatcher = require('../src/MessageDispatcher');
const MessageQueue = require('../src/MessageQueue');
const Queue = require('../src/Queue');

describe('MessageDispatcher', function() {

	let messageDispatcher;

	beforeEach(function() {
		messageDispatcher = new MessageDispatcher(new MessageQueue(new Queue()));
	});

	describe('new Queue()', function() {
		it('should create new Queue object', function() {
			queue.should.be.Object();
			queue.should.be.instanceof(Queue);
		});
		it('should be iterable', function() {
			queue.should.be.iterable();
		});
	});


});