'use strict';

const Queue = require('./collection/Queue');
const MessageQueue = require('./core/MessageQueue');
const EventEmitter = require('events').EventEmitter;

const ApplicationHandler = require('./application/Handler');

let queue = new Queue();

let eventEmitter = new EventEmitter();
let messageQueue = new MessageQueue(queue, eventEmitter);

let application = new ApplicationHandler(messageQueue);

module.exports = application;
