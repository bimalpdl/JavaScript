const events = require('events');
let eventEmitter = new events.EventEmittor();  // all properties and methods relating to event belongs to the EventEmittor object.

// declaration of event handler
let myEventHandler = function () {
    console.log('An event is triggred');
}

// assigning event handler to an event. scream is an event here.
eventEmitter.on('scream', myEventHandler);

// emit() method fires an event. In this case 'scream' event
eventEmitter.emit('scream');
