var corrupt = require('./')
var cstream = corrupt(0.5)
process.stdin.pipe(cstream).pipe(process.stdout)
