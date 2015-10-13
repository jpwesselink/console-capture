'use strict';

var consoleUtils = require('console-capture');
var fauxConsole = {};

var util = require('util');

['log', 'info', 'error', 'warn', 'dir', 'time', 'timeEnd', 'trace', 'assert'].map(function (method) {
  var consoleMethod = console[method];
  fauxConsole[method] = function () {
    var args = Array.prototype.splice.call(arguments, 0);
    args.unshift('FAUX');
    consoleMethod.apply(console, args);
  };
});

// traps the current console and replaces current methods with a subscriber
// with the same behaviour
//
//
try {
  var logger = consoleUtils.prefixedConsole(console, '[OMG DUDE]');
  logger.info('hi')
  consoleUtils.trap(console);
  console.log('1 23');
  consoleUtils.subscribe(fauxConsole, {
    format: function (method, args) {
      return [util.format('[%s]', method)].concat(args);
    }
  });
  console.error('2 243');
  consoleUtils.unSubscribe(fauxConsole);
  consoleUtils.buffer.capture('foo');
  consoleUtils.buffer.capture('bar');
  console.error('3 263');
  consoleUtils.buffer.flush('foo');
  console.log('4 1');
  console.log('5 1');
  consoleUtils.buffer.flush('bar');

  console.log(6);
  consoleUtils.restore();

  console.log(7);
} finally {
  consoleUtils.buffer.flush();
  consoleUtils.restore();
}
