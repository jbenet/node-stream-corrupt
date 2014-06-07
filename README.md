# corrupt-stream

Introduce some corruption to a stream. Useful to test integrity checks.

## Example

```js
var corrupt = require('corrupt-stream')
var cstream = corrupt(0.5)
process.stdin.pipe(cstream).pipe(process.stdout)
```
