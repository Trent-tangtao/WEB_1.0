const fs = require('fs');


// var data = fs.readFileSync('test.txt');
// console.log(data.toString());
// console.log('end all ');

// 非阻塞
// fs.readFile('test.txt',function(err,data){
//     if(err)return console(error(err));
//     console.log(data.toString());
// });
// console.log("end");




// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// var connectHandler=function connected(){
//     console.log('connect successfully');
//     eventEmitter.emit('data_received');
// };
// eventEmitter.on('connection', connectHandler);
// eventEmitter.on('data_received',function(){
//     console.log('received successfully');
// });
// eventEmitter.emit('connection');
// console.log('end of all');


// var eventemitter = require('events').EventEmitter;
// var event = new eventemitter();
// event.on('some_event',function(){
//     console.log('some_event事件触发');
// });
// setTimeout(function(){
//     event.emit('some_event');
// },1000);




// var events = require('events');
// var emitter = new events.EventEmitter();
// emitter.on('someEvent',function(arg1,arg2){
//     console.log('listener1',arg1,arg2);
// });
// emitter.on('someEvent',function(test1,test2){
//     console.log('listener2',test1,test2);
// });
// emitter.emit('someEvent','one parameter','two parameter');

var events = require('events');
var emitter = new events.EventEmitter




