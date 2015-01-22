# stream-to-string

[![NPM version](https://badge.fury.io/js/stream-to-string.png)](http://badge.fury.io/js/stream-to-string)
[![Build Status](https://travis-ci.org/jasonpincin/stream-to-string.svg?branch=master)](https://travis-ci.org/jasonpincin/stream-to-string)
[![Coverage Status](https://coveralls.io/repos/jasonpincin/stream-to-string/badge.png?branch=master)](https://coveralls.io/r/jasonpincin/stream-to-string?branch=master)
[![Davis Dependency Status](https://david-dm.org/jasonpincin/stream-to-string.png)](https://david-dm.org/jasonpincin/stream-to-string)

Pipe a stream into a string, collect value with callback or promise

## example

```javascript
var toString = require('..'),
    through2 = require('through2'),
    stream   = through2()

toString(stream, function (err, msg) {
    console.log(msg)
})

# or with promises
toString(stream).then(function (msg) {
    console.log(msg)
})

stream.write('this is a')
stream.write(' test')
stream.end()
```

## api

```javascript
var toString = require('stream-to-string')
```

### toString(stream [, cb])

Collects stream data into a string. Executes optional callback with `err, string`. Returns a promise.

## testing

`npm test [--dot | --spec] [--coverage]`

Alternatively, only run test files matching a certain pattern by prefixing the command 
with `grep=pattern`. Example: `grep=init npm test`

Open an html coverage report after running tests with `npm run view-cover` or `npm run vc`
