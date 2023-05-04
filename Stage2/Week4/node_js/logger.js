const EventEmitter = require('events');  //Uppercase w/ camel case ==> EventEmitter is a class
 
var url = "http://mylogger.io/log";

class Logger extends EventEmitter{
    log(message) {
        //send ant HTTP request
        console.log(message);
    
        //Raise an event
        this.emit('messageLogged', {id: 1, url: 'http:// '} )  // making a noice , produce - signalling}
    }
         
}
module.exports = Logger;

