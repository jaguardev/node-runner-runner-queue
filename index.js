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

console.log("xyu");
