const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    fs.mkdir(path.join(__dirname, '/test'), {}, err => {
        if (err) throw err;
        console.log('Folder created...');
      });
});
myEmitter.emit('event');