'use strict';

const Queue = require('./collection/Queue');
const MessageQueue = require('./core/MessageQueue');
const EventEmitter = require('events').EventEmitter;

const Application = require('./module/application');

let queue = new Queue();

let eventEmitter = new EventEmitter();
let messageQueue = new MessageQueue(queue, eventEmitter);

//hold queue
messageQueue.processing = true;
let application = new Application(messageQueue);
messageQueue.processing = false;

module.exports = application;
