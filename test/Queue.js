'use strict';

const Queue = require('..').Queue;

describe('Queue', function() {

	let queue;

	beforeEach(function() {
		queue = new Queue();
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

	describe('@@iterator', function() {
		it('should return iterator', function() {
			queue[Symbol.iterator]().should.be.iterator();
		});
		it('should iterate the queue', function() {
			queue.enqueue("Winnie");
			queue.enqueue("Christopher");
			queue.enqueue("Tigra");

			let iterations = 0;

			for (let object of queue) {
				iterations++;
			}

			iterations.should.equal(3);
		});
		it('should add object to the end of queue while iterating', function() {
			queue.enqueue("Winnie");
			queue.enqueue("Christopher");
			queue.enqueue("Tigra");

			let iterations = 0;

			for (let object of queue) {
				iterations++;
				if (object == "Winnie") {
					queue.enqueue("Honny Pot");
				}
				if (iterations == 4) {
					object.should.equal("Honny Pot");
				}
			}

			iterations.should.equal(4);
		});
	});

	describe('#enqueue(object)', function() {
		it('should add object to the queue', function() {
			queue.enqueue("Winnie");
			let arr = Array.from(queue);
			arr.should.have.length(1);
			arr.should.eql(["Winnie"]);
		});
		it('should add object to the end of the queue', function() {
			queue.enqueue("Winnie");
			queue.enqueue("Christopher");
			let arr = Array.from(queue);
			arr.should.have.length(2);
			arr.should.eql(["Winnie", "Christopher"]);
		});
		it('should not add undefined', function() {
			queue.enqueue(undefined);
			let arr = Array.from(queue);
			arr.should.have.length(0);
		});
	});

	describe('#dequeue()', function() {
		it('should return the first object in the queue', function() {
			queue.enqueue("Winnie");
			queue.enqueue("Christopher");
			queue.dequeue().should.equal("Winnie");
		});
		it('should remove the first object in the queue', function() {
			queue.enqueue("Winnie");
			queue.enqueue("Christopher");
			queue.dequeue();
			let arr = Array.from(queue);
			arr.should.have.length(1);
			arr.should.eql(["Christopher"]);
		});
		it('should return undefined if the queue is empty', function() {
			(typeof queue.dequeue()).should.be.equal('undefined');
		});
	});

	describe('#peek()', function() {
		it('should return the first object in the queue', function() {
			queue.enqueue("Winnie");
			queue.enqueue("Christopher");
			queue.peek().should.equal("Winnie");
		});
		it('should return undefined if the queue is empty', function() {
			(typeof queue.peek()).should.be.equal('undefined');
		});
	});

	describe('#clear()', function() {
		it('should clear the queue', function() {
			queue.enqueue("Winnie");
			queue.enqueue("Christopher");
			queue.clear();
			let arr = Array.from(queue);
			arr.should.have.length(0);
		});
	});

	describe('#contains(object)', function() {
		it('should find existed string', function() {
			queue.enqueue("Winnie");
			queue.contains("Winnie").should.be.ok();
		});
		it('should find if two similar strings existed', function() {
			queue.enqueue("Winnie");
			queue.enqueue("Winnie");
			queue.contains("Winnie").should.be.ok();
		});
		it('should find concrete object', function() {
			var object = {};
			queue.enqueue(object);
			queue.contains(object).should.be.ok();
		});
		it('should not find similar object', function() {
			queue.enqueue({});
			queue.contains({}).should.not.be.ok();
		});
		it('should find null if present', function() {
			queue.enqueue(null);
			queue.contains(null).should.be.ok();
		});
		it('should not find undefined', function() {
			queue.contains(undefined).should.not.be.ok();
		});
	});

	describe('#size()', function() {
		it('should return queue size', function() {
			queue.enqueue(null);
			queue.enqueue(null);
			queue.enqueue(null);
			queue.size().should.equal(3);
		});
	});
});