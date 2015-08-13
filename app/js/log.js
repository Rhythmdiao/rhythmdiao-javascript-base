'use strict';
var log4js = require("log4js");
log4js.configure({
  appenders: [
    {
      type: 'console'
    }
  ],
  replaceConsole: true
});

var logger = log4js.getLogger('test');
logger.setLevel('DEBUG');
module.exports = logger;

