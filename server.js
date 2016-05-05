'use strict';

const Queue = require('./src/Queue');
const MessageQueue = require('./src/MessageQueue');
const MessageSender = require('./src/MessageSender');
const MessageReceiver = require('./src/MessageReceiver');
const EventEmitter = require('events').EventEmitter;


let queue = new Queue();
let eventEmitter = new EventEmitter();
let messageQueue = new MessageQueue(queue, eventEmitter);

let defaultMessageSender = new MessageSender(messageQueue);
let defaultMessageReceiver = new MessageReceiver(messageQueue);

console.log("start");

console.log(process.stdout.columns);

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

defaultMessageReceiver.registerHandler(function(message) {
	console.log(message);
});

defaultMessageReceiver.registerHandler(function(message) {
	console.log("message.context start");
	defaultMessageSender.send({context2: 'pizda'});
	console.log("message.context end");
}, function(message) {
	return message.context;
});

defaultMessageReceiver.registerHandler(function(message) {
	defaultMessageSender.send({context3: '!!!'});
}, function(message) {
	return message.context2;
});

defaultMessageSender.send({context: 'xyu'});

setTimeout(function() {
	console.log("timeout start");
	defaultMessageSender.send({context2: 'Good message!'});
	console.log("timeout end");
}, 1000);

console.log("end");
