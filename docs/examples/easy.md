# console-capture

## Example

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

``` -->

```bash
$ node examples/capture
```
