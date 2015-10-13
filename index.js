'use strict';
var originalConsole = {};
var methods = ['log', 'info', 'error', 'warn', 'dir', 'time', 'timeEnd', 'trace', 'assert'];
var buffers = [];

var name = {
  trap: trap,
  restore: restore
};

module.exports = name;

// functions
function trap(currentConsole) {

  if (!currentConsole) {
    currentConsole = console;
  }

  methods.forEach(function (method) {
    originalConsole[method] = console[method];
    console[method] = function () {
      var args = Array.prototype.splice.call(arguments, 0);
      args.unshift(method);
      buffers.push(args);
    }
  });
}

function restore() {
  methods.forEach(function (method) {
    console[method] = originalConsole[method];
  });

  buffers.forEach(function (buffer) {
    var method = buffer.shift();
    console[method].apply(console, buffer);
  });
}
