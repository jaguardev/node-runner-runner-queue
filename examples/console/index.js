'use strict';

let application = require('../..').application;

application.messageQueue.startReceive(function(message) {
	console.log(message);
});

application.run();

//const util = require('util');
//
//let app = require('./app');
//
//let messageSender = app.messageSender;
//let messageReceiver = app.messageReceiver;
//
//messageReceiver.registerHandler(function(message) {
//	console.log(message);
//});
//
//// screen initializer
//messageReceiver.registerHandler(function(message) {
//	process.stdout.on('resize', () => {
//		messageSender.send({
//			name: 'SCREEN',
//			parameters: {
//				width: process.stdout.columns,
//				height: process.stdout.rows
//			}
//		});
//	});	
//	messageSender.send({
//		name: 'SCREEN',
//		parameters: {
//			width: process.stdout.columns,
//			height: process.stdout.rows
//		}
//	});
//}, function(message) {
//	return 'START' == message;
//});
//
////desktop draw
//messageReceiver.registerHandler(function(message) {
//	process.stdout.write("\u001B[0;0H");
//	let str = "";
////	for (let i = 0; i < message.parameters.width; i++) {
////		 message.parameters.height
//	 process.stdout.write("\u001B[0;2H");
//	 process.stdout.write(new Array(message.parameters.width - 1).join("\u2550"));
//	 process.stdout.write(`\u001B[${message.parameters.height};2H`);
//	 process.stdout.write(new Array(message.parameters.width - 1).join("\u2550"));
//	 for (let i = 2; i < message.parameters.height; i++) {
//		 process.stdout.write(`\u001B[${i};0H`);
//		 process.stdout.write("\u2551");
//		 process.stdout.write(`\u001B[${i};${message.parameters.width}H`);
//		 process.stdout.write("\u2551");
//	 }
//	 process.stdout.write(`\u001B[0;0H`);
//	 process.stdout.write("\u2554");
//	 process.stdout.write(`\u001B[0;${message.parameters.width}H`);
//	 process.stdout.write("\u2557");
//	 process.stdout.write(`\u001B[${message.parameters.height};${message.parameters.width}H`);
//	 process.stdout.write("\u255D");
//	 process.stdout.write(`\u001B[${message.parameters.height};0H`);
//	 process.stdout.write("\u255A");
//	 process.stdout.write(`\u001B[2;2H`);
//	 process.stdout.write(new Array(message.parameters.width - 3).join("\u2592"));
//	 process.stdout.write("\u262D");
////	}
////	for (let i = 0; i < message.parameters.width * message.parameters.height ; i++) {
////		if (i < message.parameters.width ||
////			i%message.parameters.width == 0 ||
////			i % message.parameters.width == message.parameters.width - 1 ||
////			i > message.parameters.width * (message.parameters.height - 1)
////			) {
////			str += "-";
////		} else {
////			str += " ";
////		}
////	}
////	process.stdout.write(str);
//}, function(message) {
//	return util.isObject(message) && message.name == 'SCREEN';
//});
//
//messageSender.send('START');
//
//setTimeout(function() {
//	messageSender.send('STOP');
//}, 15000);
//
//
////
////console.log(process.stdout.columns);
////console.log("x");
////console.log(process.stdout.rows);
////
////function whiteSpace(width, height) {
////	process.stdout.write("\u001B[0;0H");
////	let str = "";
////	for (let i = 0; i < width * height ; i++) {
////		str += ".";
////	}
////	process.stdout.write(str);
////}
//
////for (let i = 0; i < process.stdout.rows; i++) {
////	for (let j = 0; j < process.stdout.columns; j++) {
////		process.stdout.write("\x1B[" + i + ";" + j + "f");
////		process.stdout.write(" ");
////	}
////}
//
////process.stdin.resume();
////process.stdin.setRawMode(true);
////process.stdin.resume();
////stdin.setEncoding('utf8');
////
////var password = '';
////process.stdin.on('data', function (ch) {
////	if (ch == 'q') {
////		process.stdin.pause();
////		process.stdin.setRawMode(false);
////	}
////});
////
////process.stdout.write("\u001B[33m");
////
////whiteSpace(process.stdout.columns, process.stdout.rows - 1);
////
//////process.stdout.write("\u001B[2J");
////
////process.stdout.write("\x1B[40;40f");
////
////process.stdout.write("\u001B[?25l");
////
////setTimeout(function() {
////	process.stdout.write("xyu");
////	process.stdout.write("\u001B[?25h");
////}, 10000);
////
//////Move the cursor forward N columns: \033[<N>C
//////Move the cursor backward N columns: \033[<N>D
//////Clear the screen, move to (0,0): \033[2J
//////Erase to end of line: \033[K
////
////
//////process.stdout.write("\x1B[0f");
