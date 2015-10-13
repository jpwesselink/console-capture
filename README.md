# console-capture

[![Codeship Status for sytac/gulp-commonjs-tasks](https://codeship.com/projects/69dc7400-53c5-0133-1404-76919038d6b2/status?branch=master)](https://codeship.com/projects/108414)

## Description

Captures console and restores it at a later moment.

## Why?

I walked into a situation where I have to validate the existence of a log
file stored in a system variable before I can fire up a proper logger.
If either the system variable or the log file will not exist I have to abort the
process. If not, I have to write the location of the log file to
the logs.

## Installation

```bash
$ npm install --save console-capture
```

## Usage

*If you'd like to try the examples, please link the module first by running `gulp prepare-examples`*

```js
// ./examples/capture/index.js

'use strict';

var consoleCapture = require('console-capture');
consoleCapture.trap();

console.log('1 Mississippi');
console.log('2 Mississippi');
console.log('3 Mississippi');
console.dir({
  pizza: 'yummy'
});
console.trace(new Error('omg'));

consoleCapture.restore();

```


## Running tests

```bash
$ gulp test
```

Test reports are written to `./reports`.

## Contributing

-   Do pull requests.
-   Make sure there's tests and meaningful coverage.
-   Respect `./eslintrc`.
-   Issues should go in issues.
