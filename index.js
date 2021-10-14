var Promise = require('promise-polyfill')

module.exports = function (stream, enc, cb) {
    if (typeof enc === 'function') {
        cb = enc
        enc = null
    }

    var str = ''

    var p = new Promise (function (resolve, reject) {
        stream.on('data', function (data) {
            str += (typeof enc === 'string') ? data.toString(enc) : data.toString()
        })
        stream.on('end', function () {
            resolve(str)
        })
        stream.on('error', reject)
    })
    if (cb) {
        p.then(function (str) { cb(null, str) }, cb)
    }
    return p
}
